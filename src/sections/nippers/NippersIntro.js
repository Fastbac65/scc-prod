import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
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
    imgUrl: '/assets/images/gusto3.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to right',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/gusto3.jpeg',
    }),
    backgroundPosition: 'center, left',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const nippersIntroContent = [
  {
    icon: 'mdi:umbrella-beach',
    label: 'Family Focus',
    text: 'South Curly promotes a family-oriented environment, ensuring Nipper activities are enjoyable, secure, and educational for children, parents, and caregivers',
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Beach Craft, Fun and Passion',
    text: 'Our goal is to impart safe beach skills and cultivate a lifelong love for the ocean among kids, nurturing their connection to the sea.',
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Inclusive Community',
    text: 'We embrace inclusivity, offering Nipper opportunities to all skill levels and abilities. Our Additional Needs (Rippers) program is another great example of this and has thrived for years.',
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Vibrant Social Scene',
    text: 'From lively BBQs and Sippers gatherings to camping trips and more, our club thrives socially, fostering camaraderie and connection among members.',
  },
];
const NippersIntro = () => {
  return (
    <StyledRootResponsive>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '700px' }}>
            <Typography variant="h3" component="h2">
              Welcome to Nippers 2023/24
            </Typography>
            <Typography variant="body2">
              South Curl Curl Surf Life Saving Club warmly welcomes all our new and existing Nippers, Nipper parents, Nippers committee members and Age Managers to the 2023/2024 season. So what is South Curly
              Nippers all about?
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 3fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {nippersIntroContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '500px' }}>
            <Typography variant="body2">All membership renewals and new Nipper registrations are now online. Please follow link below for full instructions.</Typography>
          </Stack>
        </Box>
        <Link component={NextLink} href="/ourclub">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            SCC Membership
          </Button>
        </Link>
      </Container>
    </StyledRootResponsive>
  );
};
export default NippersIntro;

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
