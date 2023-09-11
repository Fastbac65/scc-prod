import { Container, Box, Checkbox, FormControlLabel, FormGroup, Typography, useTheme, alpha, styled } from '@mui/material';
import { useState } from 'react';
import CalendarPatrol from './CalendarPatrol';
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

const PatrolCalendar = () => {
  const theme = useTheme();
  const [holidays, setHolidays] = useState(true);
  const [patrol, setPatrol] = useState(true);
  const isSmUp = useResponsive('up', 'sm');

  const handleChange = (event) => {
    if (event.target.labels[0].innerText.includes('View')) {
      setHolidays(true);
      setPatrol(true);
    } else if (event.target.labels[0].innerText.includes('NSW')) {
      setHolidays(!holidays);
    } else if (event.target.labels[0].innerText.includes('Patrols')) {
      setPatrol(!patrol);
    }
    event.target = null;
  };

  return (
    <StyledRoot>
      <Styled2ndLayer>
        <Container maxWidth="lg" sx={{ py: 3, textAlign: 'center', justifyContent: 'center' }}>
          <Typography variant="h3">SCC Patrol Calendar</Typography>{' '}
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
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={holidays && patrol} color="primary" />} label="View All" disabled={holidays && patrol} />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={patrol} color="warning" />} label="SCC Patrols" />
                  <FormControlLabel onChange={handleChange} control={<Checkbox checked={holidays} color="info" />} label="NSW Holidays" />
                </FormGroup>
              </Box>
            )}
            <Box sx={{ flexGrow: 1 }}>
              {' '}
              {/* margin seems to fix scroll issue on mobile */}
              <CalendarPatrol holidays={holidays} patrol={patrol} />
            </Box>
          </Box>
        </Container>
      </Styled2ndLayer>
    </StyledRoot>
  );
};

export default PatrolCalendar;
