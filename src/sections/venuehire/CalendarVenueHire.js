import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import { Box } from '@mui/system';
import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import CalEvent from './CalEvent';
import { useTheme } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';

//sample google cal url https://www.googleapis.com/calendar/v3/calendars/fastbac65%40gmail.com/events?key=AIzaSyBz4ew-AmtQGL0h6DNYJKhniipIK7eFBUM&timeMin=2023-01-01T00%3A00%3A00%2B11%3A00&timeMax=2023-02-01T00%3A00%3A00%2B11%3A00&singleEvents=true&maxResults=9999

export const getCalendarEvents = (googleCalColors) => async (info, successCallback, failureCallback) => {
  // export const getCalendarEvents = (googleCalColors) => async (info, successCallback, failureCallback) => {
  const googleCalIds = [
    'qe0q09knhqeim7ng95daocmhctbjbdjo@import.calendar.google.com',
    // 'o2lpae7ahjt1fjsielmk8535usqrr781@import.calendar.google.com',
    // '638ddc38eff446e1a914ee3f9a50e67114b7e931601aa9d2f6aa26cf14fe2958@group.calendar.google.com', // venue hire
    'scccaretaker@gmail.com', // scc events
  ];

  const start = encodeURIComponent(info.startStr);
  const end = encodeURIComponent(info.endStr);

  var allGetEvents = [];
  var allEvents = [];
  var getPromises = [];

  googleCalIds.forEach((calendarId) => {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=AIzaSyBz4ew-AmtQGL0h6DNYJKhniipIK7eFBUM&timeMin=${start}&timeMax=${end}&singleEvents=true&maxResults=999`;
    try {
      getPromises.push(axios.get(url));
    } catch (error) {
      console.log(error.message);
      failureCallback(new Error(error.message || 'Something went wrong.'));
    }
  });
  allGetEvents = await Promise.all(getPromises);

  allGetEvents.forEach((response, indx) => {
    var events = [];

    if (response.status === 200) {
      events = response.data.items.map((event) => ({
        //
        id: event?.id,
        title: event?.summary || 'Busy',
        location: event?.location,
        description: event?.description,
        start: event.start?.dateTime || event.start?.date,
        end: event.end?.dateTime || event.end?.date,
        created: event?.created,
        creator: event?.creator,
        borderColor: googleCalColors[indx],
        // borderColor: googleCalColors[indx],
      }));
      allEvents = [...allEvents, ...events];
    }
  });

  successCallback(allEvents);
};

const CalendarVenueHire2 = ({ holidays, booking, social }) => {
  const theme = useTheme();
  const {
    dispatch,
    state: { modal },
  } = useSettingsContext();

  const allEvents = useRef([]); // Will be a copy of all events so we can filter

  // responsive workaround for buttons on the FC header
  const [endStr, setEndStr] = useState('');
  const [startStr, setStartStr] = useState('');
  // const screenWidth = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1400 };  //  for some reason the app is still using default breakpoints
  const screenWidth = { xs: 0, sm: 700, md: 900, lg: 1200 }; // sm default is 600  but I'm using 700 to fit filter in

  const googleCalColors = [`${theme.palette.info.main}`, `${theme.palette.warning.main}`];
  // const googleCalColors = [`${theme.palette.info.main}`, `${theme.palette.info.main}`, `${theme.palette.success.main}`, `${theme.palette.warning.main}`];
  // to stop FC rerendering and re-fetching events everytime a state change occurs on the page
  const memoizeGetCalendarEvents = useMemo(() => {
    return getCalendarEvents(googleCalColors);
  }, []);

  useEffect(() => {
    if (!holidays) {
      allEvents.current.forEach((event) => {
        if (event?.extendedProps?.creator?.email === 'qe0q09knhqeim7ng95daocmhctbjbdjo@import.calendar.google.com') {
          event.setProp('display', 'none');
        }
      });
    } else if (holidays) {
      allEvents.current.forEach((event) => {
        if (event?.extendedProps?.creator?.email === 'qe0q09knhqeim7ng95daocmhctbjbdjo@import.calendar.google.com') {
          event.setProp('display', 'auto');
        }
      });
    }
  }, [holidays]);

  useEffect(() => {
    if (!booking) {
      allEvents.current.forEach((event) => {
        if (event.borderColor === `${theme.palette.warning.main}`) {
          event.setProp('display', 'none');
        }
      });
    } else if (booking) {
      allEvents.current.forEach((event) => {
        if (event.borderColor === `${theme.palette.warning.main}`) {
          event.setProp('display', 'auto');
        }
      });
    }
  }, [booking]);

  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setTimeout(() => {
          setSize(window.innerWidth);
          if (window.innerWidth < screenWidth.sm) {
            setStartStr('');
            setEndStr('prev,next');
          } else {
            setStartStr('listMonth,list3Months');
            setEndStr('today prev,next');
          }
        }, 500);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useWindowSize(); // dynamically sets the calendar list menu statefully

  const handleEventSet = (events) => {
    allEvents.current = [...events];
  };

  const handleEventClick = (eventInfo) => {
    eventInfo.jsEvent.preventDefault();
    console.log(eventInfo, eventInfo.event.title);
    dispatch({
      type: 'MODAL',
      payload: {
        ...modal,
        open: true,
        title: 'Calendar Event',
        content: <CalEvent eventInfo={eventInfo.event} />,
      },
    });
  };

  const handleEventDidMount = (calEventInfo) => {
    if (!holidays) {
      // if (calEventInfo?.borderColor === `${theme.palette.info.main}`) {
      if (calEventInfo.event?.extendedProps?.creator?.email === 'qe0q09knhqeim7ng95daocmhctbjbdjo@import.calendar.google.com') {
        calEventInfo.event.setProp('display', 'none');
      }
    }
    if (!booking) {
      if (calEventInfo.event?.extendedProps?.creator?.email === 'sccslsc.webdev@gmail.com') {
        calEventInfo.event.setProp('display', 'none');
      }
    }
    // if (!social) {
    //   // if (calEventInfo?.borderColor === `${theme.palette.error.main}`) {
    //   if (calEventInfo.event?.extendedProps?.creator?.email === 'fastbac65@gmail.com') {
    //     calEventInfo.event.setProp('display', 'none');
    //   }
    // }
  };

  // className wrapper is used to override FC defauls CSS styles to SCC colors and work better with dark mode
  return (
    <div>
      <Box className="wrapper">
        <FullCalendar
          height={550}
          plugins={[listPlugin, googleCalendarPlugin]}
          googleCalendarApiKey="AIzaSyBz4ew-AmtQGL0h6DNYJKhniipIK7eFBUM"
          // events={getCalendarEvents}
          eventSources={[memoizeGetCalendarEvents]}
          initialView="list3Months"
          views={{
            listMonth: { buttonText: 'month' },
            list3Months: { type: 'listMonth', duration: { months: 3 }, buttonText: '3 months' },
            listYear: { buttonText: 'Year' },
          }}
          headerToolbar={{
            start: startStr,
            center: 'title',
            end: endStr,
          }}
          titleFormat={{ year: 'numeric', month: 'short' }}
          eventClick={handleEventClick}
          eventsSet={handleEventSet} // called after events are initialized/added/changed/removed
          eventDidMount={handleEventDidMount}
        />
      </Box>
    </div>
  );
};
export default memo(CalendarVenueHire2);
//
