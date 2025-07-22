import { Box, Typography, Stack, styled, alpha, Link, Button } from '@mui/material';
// components
import Iconify from 'src/components/iconify/Iconify';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------
const StyledRootResponsive = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  ...bgGradient({
    direction: 'to top',

    startColor: `${alpha(theme.palette.background.neutral, 0.8)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.98)} 70%`,
    // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.7)} 0%`,
    // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.95)} 70%`,
    imgUrl: '/assets/images/scc-party2.jpg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to right',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 0.98)} 65%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/scc-party2.jpg',
    }),
    // backgroundPosition: 'center, left',
    // backgroundSize: 'cover, auto 100%',
  },
}));

// const StyledRoot = styled('div')(({ theme }) => ({
//   ...bgGradient({
//     startColor: `${alpha(theme.palette.background.default, 1)} 0%`,
//     endColor: `${alpha(theme.palette.background.default, 0.65)} 30%`,
//   }),
// }));

// const Styled2ndLayer = styled('div')(({ theme }) => ({
//   ...bgGradient({
//     startColor: `${alpha(theme.palette.background.default, 0.65)} 70%`,
//     endColor: `${alpha(theme.palette.background.default, 1)} 100%`,
//   }),
// }));

// ----------------------------------------------------------------------

const VenueHireDetails = () => {
  return (
    <StyledRootResponsive>
      <Stack spacing={4} display="flex" alignItems="center">
        <Box sx={{ px: 1, pb: 2 }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '2fr 3fr', md: 'repeat(2, 1fr)' }}>
          <Stack></Stack>
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
              <OverviewItem icon="mdi:currency-usd" label="Venue Hire Payments" text="For venue hire payments please visit the link below, select 'South Curl Curl' as entity and transaction type 'Function'." />
            </Stack>
          </Stack>
        </Box>
        <Link target="_blank" rel="noopener" href="https://hub.sls.com.au/public/pay/338">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            Venue Hire Payments
          </Button>
        </Link>
      </Stack>
    </StyledRootResponsive>
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
