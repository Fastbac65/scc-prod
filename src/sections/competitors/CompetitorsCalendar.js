import { Container, Box, Checkbox, FormControlLabel, FormGroup, Typography, useTheme, alpha, styled, Link } from '@mui/material';
import { useState } from 'react';
import CalendarCompetitors from './CalendarCompetitors';
import { bgGradient } from 'src/lib/cssStyles';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.background.neutral, 1)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.45)} 30%`,
    imgUrl: '/assets/images/patrol2.jpeg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

const Styled2ndLayer = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.background.neutral, 0.45)} 70%`,
    endColor: `${alpha(theme.palette.background.neutral, 1)} 100%`,
  }),
  // position: 'relative',
  // overflow: 'hidden',
}));

// ----------------------------------------------------------------------

const CompetitorsCalendar = () => {
  const theme = useTheme();
  const [holidays, setHolidays] = useState(true);
  const [comps, setComps] = useState(true);
  const [boats, setBoats] = useState(true);
  const isSmUp = useResponsive('up', 'sm');

  const handleChange = (event) => {
    if (event.target.labels[0].innerText.includes('View')) {
      setHolidays(true);
      setComps(true);
      setBoats(true);
    } else if (event.target.labels[0].innerText.includes('NSW')) {
      setHolidays(!holidays);
    } else if (event.target.labels[0].innerText.includes('Comps')) {
      setComps(!comps);
    } else if (event.target.labels[0].innerText.includes('Boats')) {
      setBoats(!boats);
    }
    event.target = null;
  };

  return (
    <StyledRoot>
      <Styled2ndLayer>
        <div style={{ position: 'relative' }}>
          <div id="competitivecalendar" style={{ position: 'absolute', top: '-60px' }} />
        </div>
        <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center', justifyContent: 'center' }}>
          <Typography variant="h3" component="h2">
            SLSSNB Surf Sports Competitive Calendar
          </Typography>{' '}
          <Typography variant="caption" sx={{ mb: 3 }}>
            scroll within calendar to view more
          </Typography>
          <Box sx={{ display: 'flex', py: 2 }}>
            {isSmUp && (
              <Box>
                <FormGroup>
                  <Typography sx={{ fontWeight: '500', fontSize: '1.25em' }} variant="h5">
                    Filter
                  </Typography>
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={holidays && comps && boats} color="primary" />} label="View All" disabled={holidays && comps} />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={boats} color="warning" />} label="Surf Boats" />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={comps} color="error" />} label="SLS Comps" />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={holidays} color="info" />} label="NSW Holidays" />
                </FormGroup>
              </Box>
            )}
            <Box sx={{ flexGrow: 1 }}>
              {/* margin seems to fix scroll issue on mobile */}
              <CalendarCompetitors holidays={holidays} comps={comps} boats={boats} />
            </Box>
          </Box>
          <Box>
            <Typography variant="caption">If you would like to add an event to the SCC competitive calendar please contact competition@southcurlcurlslsc.com.au</Typography>
          </Box>
          <Box>
            <Typography variant="caption">
              2026/2027 NSW Surf Boat events: &nbsp;
              {/* <Link color={theme.palette.mode === 'dark' ? 'secondary.lighter' : 'white'} rel="noopener" target="_blank" */}
              <Link color="inherit" rel="noopener" target="_blank" href="https://southcurlcurlslsc.com.au/assets/docs/26_27NSWSurfBoatsCalendar.pdf">
                View or Download
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">
              Full 2026/2027 SLSSNB Surf Sports Calendar: &nbsp;
              {/* <Link color={theme.palette.mode === 'dark' ? 'secondary.lighter' : 'white'} rel="noopener" target="_blank" */}
              <Link color="inherit" rel="noopener" target="_blank" href="https://www.surflifesaving.net.au/wp-content/uploads/2026-2027-Surf-Sports-Calendar-Planner.pdf">
                View or Download
              </Link>
            </Typography>
          </Box>
        </Container>
      </Styled2ndLayer>
    </StyledRoot>
  );
};

export default CompetitorsCalendar;
