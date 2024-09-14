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
  const isSmUp = useResponsive('up', 'sm');

  const handleChange = (event) => {
    if (event.target.labels[0].innerText.includes('View')) {
      setHolidays(true);
      setComps(true);
    } else if (event.target.labels[0].innerText.includes('NSW')) {
      setHolidays(!holidays);
    } else if (event.target.labels[0].innerText.includes('Comps')) {
      setComps(!comps);
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
            SCC Competitive Calendar
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
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={holidays && comps} color="primary" />} label="View All" disabled={holidays && comps} />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={comps} color="warning" />} label="SCC Comps" />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={holidays} color="info" />} label="NSW Holidays" />
                </FormGroup>
              </Box>
            )}
            <Box sx={{ flexGrow: 1 }}>
              {/* margin seems to fix scroll issue on mobile */}
              <CalendarCompetitors holidays={holidays} comps={comps} />
            </Box>
          </Box>
          <Box>
            <Typography variant="caption">If you would like to add an event to the SCC competitive calendar please contact competition@southcurlcurlslsc.com.au</Typography>
          </Box>
        </Container>
      </Styled2ndLayer>
    </StyledRoot>
  );
};

export default CompetitorsCalendar;
