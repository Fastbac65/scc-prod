import axios from 'axios';

export default function getPatrol(patrol) {
  // get cal events via promise
  return new Promise(async (resolve, reject) => {
    try {
      const calId = 'cb27ab3151610b4206a2df3bb7d606f71216f9d3e7ec4b4aa80171f8b2286ee9@group.calendar.google.com'; // patrol gcal
      const start = encodeURIComponent(new Date('01 Sept 2024').toISOString());
      const end = encodeURIComponent(new Date('01 June 2025').toISOString());
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?key=AIzaSyBz4ew-AmtQGL0h6DNYJKhniipIK7eFBUM&timeMin=${start}&timeMax=${end}&singleEvents=true&maxResults=999`;
      const getEvents = await axios.get(url);
      if (getEvents.status === 200) {
        const events = getEvents.data.items.map((event) => ({
          //
          id: event?.id,
          title: event?.summary,
          location: event?.location,
          description: event?.description,
          start: event.start?.dateTime || event.start?.date,
          end: event.end?.dateTime || event.end?.date,
          created: event?.created,
          creator: event?.creator,
          // borderColor: googleCalColors[indx],
        }));
        resolve(events.filter((evt) => evt.title === patrol).sort(compareFn));
      }
    } catch (error) {
      console.log(error.message);
      reject(error.message);
    }
  });
}

// sort ascending start date/time funct..
function compareFn(a, b) {
  if (new Date(a.start).getTime() < new Date(b.start).getTime()) {
    return -1;
  } else if (new Date(a.start).getTime() > new Date(b.start).getTime()) {
    return 1;
  }
  return 0;
}
