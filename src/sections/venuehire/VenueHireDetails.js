import { Box, Typography, Stack, styled, alpha } from '@mui/material';
// components
import Iconify from 'src/components/iconify/Iconify';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.background.default, 1)} 0%`,
    endColor: `${alpha(theme.palette.background.default, 0.85)} 30%`,
    imgUrl: '/assets/images/scc-party2.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

const VenueHireDetails = () => {
  return (
    <StyledRoot>
      <Box sx={{ px: 1, pb: 2 }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '2fr 3fr', md: 'repeat(2, 1fr)' }}>
        <Stack></Stack>
        <Stack>
          <Typography variant="h3" sx={{ mb: 3 }}>
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
    </StyledRoot>
  );
};
export default VenueHireDetails;

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
