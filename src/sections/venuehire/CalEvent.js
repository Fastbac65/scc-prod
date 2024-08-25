import { Box, Button, DialogActions, DialogContent, DialogContentText, Grid, Stack } from '@mui/material';
import { CalendarMonth, Circle, Description, Place } from '@mui/icons-material';
import Markdown from 'src/components/markdown/Markdown';
import { fDateTime } from 'src/lib/formatTime';
import { useRouter } from 'next/router';
import { useSettingsContext } from 'src/components/settings';

const CalEvent = ({ eventInfo }) => {
  const router = useRouter();
  const {
    posts,
    host,
    dispatch,
    state: { modal },
  } = useSettingsContext();

  // if (eventInfo?.extendedProps?.description) {
  //   console.log(eventInfo?.extendedProps?.description);
  //   var description = [];
  //   var atag = '<a></a>'; // initialise to something
  //   if (eventInfo.extendedProps.description.includes('</a>')) {
  //     atag = '<a' + eventInfo.extendedProps.description.split('<a')[1].split('</a>')[0] + '</a>';
  //   }
  //   var descriptionFormatted = eventInfo.extendedProps.description.split(atag);
  //   var newstring = '';
  //   descriptionFormatted.forEach((str) => {
  //     newstring = newstring + str;
  //   });
  //   if (newstring.includes('</a>')) {
  //     //  another bloody atag
  //     var atag2 = '<a></a>'; // initialise to something
  //     atag2 = '<a' + newstring.split('<a')[1].split('</a>')[0] + '</a>';
  //     descriptionFormatted = newstring.split(atag2);
  //     newstring = '';
  //     descriptionFormatted.forEach((str) => {
  //       newstring = newstring + str;
  //     });
  //   }

  //   description = eventInfo.extendedProps.description.split('<br>');
  //   // description = newstring.split('<br>');
  // }
  var startEnd;
  if (!eventInfo.allDay) {
    if (eventInfo.end) {
      startEnd = fDateTime(eventInfo.start, 'MMMM do yyyy, h:mm aaa') + ' - ' + fDateTime(eventInfo.end, 'h:mm aaa');
    } else startEnd = fDateTime(eventInfo.start, 'MMMM do yyyy, h:mm aaa');
  } else startEnd = fDateTime(eventInfo.start, 'MMMM do yyyy,') + ' all-day';

  var location = '';
  if (eventInfo?.extendedProps?.location && eventInfo.extendedProps?.location.includes(`/posts/`)) {
    let postId = eventInfo.extendedProps.location.split('/posts/')[1];
    var postDoc = posts.filter((doc) => doc.id === postId);
    // location = 'SCC Post: ' + eventInfo.extendedProps.location.split('scc-proto.web.app/posts/')[1].split('_')[0];
    if (postDoc.length !== 0) {
      location = 'SCC Post: ' + postDoc[0].data.title + ' by ' + postDoc[0].data.uName;
    } else location = 'This post seems to no longer exist. Please update/check calendar event location';
  } else location = eventInfo?.extendedProps?.location;

  const handleClickLocation = (event) => {
    dispatch({ type: 'MODAL', payload: { ...modal, open: false } });
    // if (eventInfo.extendedProps.location.includes('/posts/')) {
    if (eventInfo.extendedProps.location.includes('/posts/')) {
      // let link = `/posts/${eventInfo.extendedProps.location.split('/posts/')[1]}`;
      let link = `/posts/${eventInfo.extendedProps.location.split('/posts/')[1]}`;
      router.push(link);
    } else if (eventInfo.extendedProps.location.includes('http')) {
      window.open(eventInfo.extendedProps.location);
    } else window.open(`https://maps.google.com?q=${eventInfo.extendedProps.location} `, '_system');
  };

  return (
    <>
      <DialogContent
      // sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}
      >
        <Box sx={{ my: 2, maxWidth: '450px' }}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Circle sx={{ color: eventInfo.borderColor }} />
            </Grid>
            <Grid item xs={11}>
              <DialogContentText variant="body1">{eventInfo.title}</DialogContentText>
            </Grid>

            <Grid item xs={1}>
              <DialogContentText>
                <CalendarMonth />
              </DialogContentText>
            </Grid>
            <Grid item xs={11}>
              <DialogContentText variant="body2">{startEnd}</DialogContentText>
            </Grid>
            {eventInfo.extendedProps.description && (
              <>
                <Grid item xs={1}>
                  <DialogContentText>
                    <Description />
                  </DialogContentText>
                </Grid>
                <Grid item xs={11}>
                  <Markdown content={eventInfo.extendedProps.description} />
                </Grid>
              </>
            )}
            {eventInfo.extendedProps.location && (
              <>
                <Grid item xs={1}>
                  <DialogContentText>
                    <Place />
                  </DialogContentText>
                </Grid>
                <Grid item xs={11}>
                  <DialogContentText variant="body2">{location}</DialogContentText>
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      </DialogContent>
      {eventInfo.extendedProps.location && (
        <Stack direction="row" sx={{ justifyContent: 'center', padding: 2 }}>
          <Button color="info" onClick={handleClickLocation} sx={{ borderRadius: 25 }} endIcon={<Place />}>
            go to
          </Button>
        </Stack>
      )}
    </>
  );
};
export default CalEvent;
