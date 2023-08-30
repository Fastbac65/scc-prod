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
    imgUrl: '/assets/images/header12.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(25, 0, 4),
    ...bgGradient({
      direction: 'to bottom',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 30%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/header12.jpeg',
    }),
    backgroundPosition: 'center, top',
    backgroundSize: '100%',
  },
}));

// ----------------------------------------------------------------------

const textStr = `<>
        To give the little ones a chance to use the beach & pool without being crashed by the big kids, we have different starting times for the younger age groups as follows:
        <ul>
          <li>8.45am to 9.45am - Under 6, 7 and 8 and SRC</li>
          <li>10am to 11am - Under 9–13 and Rippers (Additional Needs Nippers)</li>
        </ul>
        The younger age groups can take longer than the allocated hour depending on numbers and helpers available. Nippers assemble behind their age marker on the beach for roll call and must be wearing their
        age-colour nipper cap and have sunscreen applied before Nippers starts. At the end of the nippers session, each child must be marked off the roll prior to leaving with parent. Nipper caps are to be
        removed once Nippers has finished.
      </>`;

const nippersIntroContent = [
  {
    icon: 'mdi:umbrella-beach',
    label: 'Sunday Activities',
    text: (
      <>
        To give the little ones a chance to use the beach & pool without being crashed by the big kids, we have different starting times for the younger age groups as follows:
        <ul>
          <li>8.45am to 9.45am - Under 6, 7 and 8 and SRC</li>
          <li>10am to 11am - Under 9–13 and Rippers (Additional Needs Nippers)</li>
        </ul>
        The younger age groups can take longer than the allocated hour depending on numbers and helpers available. Nippers assemble behind their age marker on the beach for roll call and must be wearing their
        age-colour nipper cap and have sunscreen applied before Nippers starts. At the end of the nippers session, each child must be marked off the roll prior to leaving with parent. Nipper caps are to be
        removed once Nippers has finished.
      </>
    ),
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Beach Craft, Fun and Passion',
    text: `Our goal is to impart safe beach skills and cultivate a lifelong love for the ocean among kids, nurturing their connection to the sea.`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Inclusive Community',
    text: `We embrace inclusivity, offering Nipper opportunities to all skill levels and abilities. Our Additional Needs (Rippers) program is another great example of this and has thrived for years.`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Vibrant Social Scene',
    text: 'From lively BBQs and Sippers gatherings to camping trips and more, our club thrives socially, fostering camaraderie and connection among members.',
  },
];
console.log(nippersIntroContent);
const NippersInformation = () => {
  return (
    <StyledRootResponsive>
      {/* <StyledRoot> */}
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Typography variant="h3">Information for Nippers/Parents</Typography>
            <Typography variant="body2">
              South Curl Curl Nippers are between the age of 5-14 years. Our primary goal is to teach surf awareness and safety in a fun and healthy outdoor environment with friends. Nippers should be
              encouraged to do regular swimming lessons so they can enjoy the beach and ocean activities.
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={1} sx={{ px: 1, py: 2, textAlign: 'left' }}>
          {nippersIntroContent.map((item) => (
            <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
          ))}
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
export default NippersInformation;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography variant="h4">{label}</Typography>
        <Typography sx={{ whiteSpace: 'pre-wrap' }} color="text.secondary" variant="body2">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
