import { Container, Box, Checkbox, FormControlLabel, FormGroup, Typography, useTheme, alpha, styled, Stack } from '@mui/material';
import { useState } from 'react';
import { bgGradient } from 'src/lib/cssStyles';
import useResponsive from 'src/hooks/useResponsive';
import Iconify from 'src/components/iconify/Iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.background.neutral, 1)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.65)} 30%`,
    imgUrl: '/assets/images/gusto2.jpeg',
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

const OurClubTest = () => {
  const theme = useTheme();

  const isSmUp = useResponsive('up', 'sm');

  return (
    <StyledRoot>
      <Styled2ndLayer>
        <Container maxWidth="lg" sx={{ py: 3, textAlign: 'center', justifyContent: 'center' }}>
          <Typography variant="h3" component="h2">
            SCC Venue Bookings
          </Typography>{' '}
          <Typography variant="caption" sx={{ mb: 3 }}>
            scroll within calendar to view
          </Typography>
          <Box sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={4} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '2fr 3fr', md: 'repeat(2, 1fr)' }}>
            <Stack>
              <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
                Venue Details
              </Typography>
              <Stack spacing={1}>
                <OverviewItem icon="carbon:bar" label="Stylish Wooden Bar" text="Beautiful tables and stools. BYO drinks for you and your guests. Bar service also available." />
                <OverviewItem icon="material-symbols:soup-kitchen" label="Large Commercial Grade Kitchen" text="Available for all your entertaining requirements. " />
                <OverviewItem
                  icon="carbon:music"
                  label="State Of The Art Audio/Video Facilities"
                  text="For your music, movies, presentations and conferencing. Everything you could possibly need and easy to setup."
                />
                <OverviewItem
                  icon="material-symbols:restaurant"
                  label="Large Bar Servery Area"
                  text="Large private outdoor balcony adjoining the hall. Capacity for up to 120 people. Inside and outside dining with BBQs. "
                />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
                Venue Details
              </Typography>
              <Stack spacing={1}>
                <OverviewItem icon="carbon:bar" label="Stylish Wooden Bar" text="Beautiful tables and stools. BYO drinks for you and your guests. Bar service also available." />
                <OverviewItem icon="material-symbols:soup-kitchen" label="Large Commercial Grade Kitchen" text="Available for all your entertaining requirements. " />
                <OverviewItem
                  icon="carbon:music"
                  label="State Of The Art Audio/Video Facilities"
                  text="For your music, movies, presentations and conferencing. Everything you could possibly need and easy to setup."
                />
                <OverviewItem
                  icon="material-symbols:restaurant"
                  label="Large Bar Servery Area"
                  text="Large private outdoor balcony adjoining the hall. Capacity for up to 120 people. Inside and outside dining with BBQs. "
                />
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Styled2ndLayer>
    </StyledRoot>
  );
};

export default OurClubTest;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography>{label}</Typography>
        <Typography color="text.secondary" variant="body2">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
