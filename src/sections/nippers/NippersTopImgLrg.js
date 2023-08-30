import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
// components
import Iconify from 'src/components/iconify/Iconify';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------
const StyledRootResponsive = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0, 4),
  ...bgGradient({
    direction: 'to bottom',

    startColor: `${alpha(theme.palette.background.neutral, 0.7)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.95)} 80%`,
    // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.7)} 0%`,
    // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.95)} 70%`,
    imgUrl: '/assets/images/gusto1.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 0, 4),
    ...bgGradient({
      direction: 'to bottom',
      startColor: `${alpha(theme.palette.background.neutral, 0.8)} 30%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 95%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/gusto1.jpeg',
    }),
    backgroundPosition: 'center, top',
    // backgroundSize: 'cover',
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
console.log(nippersIntroContent);
const NippersTopImgLrg = () => {
  return (
    <StyledRootResponsive>
      {/* <StyledRoot> */}
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '700px' }}>
            <Typography variant="h3">Welcome to Nippers 2023/24</Typography>
            <Typography variant="body2">
              South Curl Curl Surf Life Saving Club warmly welcomes all our new and existing Nippers, Nipper parents, Nippers committee members and Age Managers to the 2023/2024 season. So what is South Curly
              Nippers all about?
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr' }}>
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
      {/* </StyledRoot> */}
    </StyledRootResponsive>
  );
};
export default NippersTopImgLrg;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      {/* <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box> */}
      <Stack spacing={0.5}>
        <Typography variant="h4">{label}</Typography>
        <Typography color="text.secondary" variant="body2">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
