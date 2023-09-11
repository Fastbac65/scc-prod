import { Container, Box, Checkbox, FormControlLabel, FormGroup, Typography, useTheme, alpha, styled } from '@mui/material';
import { useState } from 'react';
import CalendarVenueHire from './CalendarVenueHire';
import { bgGradient } from 'src/lib/cssStyles';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.background.neutral, 1)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.65)} 30%`,
    imgUrl: '/assets/images/scc-party2.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

const Styled2ndLayer = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.background.neutral, 0.65)} 70%`,
    endColor: `${alpha(theme.palette.background.neutral, 1)} 100%`,
  }),
  // position: 'relative',
  // overflow: 'hidden',
}));

// ----------------------------------------------------------------------

const VenueHireCalendar = () => {
  const theme = useTheme();
  const [holidays, setHolidays] = useState(true);
  const [booking, setBooking] = useState(true);
  // const [patrolTraining, setPatrolTraining] = useState(false);
  const [social, setSocial] = useState(true);
  const isSmUp = useResponsive('up', 'sm');

  const handleChange = (event) => {
    if (event.target.labels[0].innerText.includes('View')) {
      setHolidays(true);
      setBooking(true);
      // setPatrolTraining(true);
      setSocial(true);
    } else if (event.target.labels[0].innerText.includes('NSW')) {
      setHolidays(!holidays);
    } else if (event.target.labels[0].innerText.includes('Venue')) {
      setBooking(!booking);
      // } else if (event.target.labels[0].innerText.includes('Patrol')) {
      //   setPatrolTraining(!patrolTraining);
    } else if (event.target.labels[0].innerText.includes('SCC')) {
      setSocial(!social);
    }

    event.target = null;
  };

  return (
    <StyledRoot>
      <Styled2ndLayer>
        <div style={{ position: 'relative' }}>
          <div id="venuecalendar" style={{ position: 'absolute', top: '-80px' }} />
        </div>
        <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center', justifyContent: 'center' }}>
          <Typography variant="h3">SCC Venue Bookings</Typography>{' '}
          <Typography variant="caption" sx={{ mb: 3 }}>
            scroll within calendar to view more..
          </Typography>
          <Box sx={{ display: 'flex', py: 2 }}>
            {isSmUp && (
              <Box>
                <FormGroup>
                  <Typography sx={{ fontWeight: '500', fontSize: '1.25em' }} variant="h5">
                    Filter
                  </Typography>
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={holidays && booking && social} color="primary" />} label="View All" disabled={holidays && booking && social} />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={booking} color="success" />} label="Venue Bookings" />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={social} color="warning" />} label="SCC Socials" />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={holidays} color="info" />} label="NSW Holidays" />
                </FormGroup>
              </Box>
            )}
            <Box sx={{ flexGrow: 1 }}>
              {' '}
              {/* margin seems to fix scroll issue on mobile */}
              <CalendarVenueHire
                holidays={holidays}
                booking={booking}
                // patrolTraining={patrolTraining}
                social={social}
              />
            </Box>
          </Box>
        </Container>
      </Styled2ndLayer>
    </StyledRoot>
  );
};

export default VenueHireCalendar;
