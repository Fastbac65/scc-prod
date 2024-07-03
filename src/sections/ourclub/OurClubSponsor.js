import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import { ST } from 'next/dist/shared/lib/utils';
// components
import Iconify from 'src/components/iconify/Iconify';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------
const StyledRootResponsive = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  ...bgGradient({
    direction: 'to top',

    startColor: `${alpha(theme.palette.background.neutral, 0.6)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.8)} 90%`,
    // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.7)} 0%`,
    // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.95)} 70%`,
    imgUrl: '/assets/images/header8.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/header8.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const OurClubSponsor = () => {
  return (
    <StyledRootResponsive>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box sx={{ mb: 2 }} display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3" component="h2">
              South Curl Curl Sponsorship
            </Typography>
            <Typography variant="body2">
              It takes a lot of support and funding to run a busy surf life saving club. Through our members, the club is committed to maintaining the spirit of Surf Life-Saving via promotion of beach safety,
              member competency in the beach / surf environment, surf sports competition and surf lifesaving education in the community. Rescue gear and equipment represents the greatest single cost to running
              a surf lifesaving Club. If you would like to support South Curl Curl SLSC through sponsorship please download our sponsorship document below!
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={2} direction="row" display="flex" justifyContent="center">
          <Link sx={{ mr: 1 }} target="_blank" rel="noopener" href="https://southcurlcurlslsc.com.au/assets/docs/SCC-Sponsorship-lr.pdf">
            <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
              SCC Sponsorship Document
            </Button>
          </Link>
        </Stack>

        <Box display="flex" justifyContent="center">
          <Stack sx={{ pt: 2, maxWidth: '800px' }}>
            <Typography variant="caption">For any further clarifications plese email sponsorship@southcurlcurlslsc.com.au.</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubSponsor;

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
