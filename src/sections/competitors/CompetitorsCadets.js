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
    imgUrl: '/assets/images/gusto4.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to right',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/gusto4.jpeg',
    }),
    backgroundPosition: 'center, left',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const cadetsContent = [
  {
    icon: 'mingcute:hat-2-line',
    label: 'Comprehensive Training and Skill Development',
    text: 'Surf Life Saving Cadets at South Curl Curl SLSC undergo rigorous and comprehensive training. They learn vital skills like water rescue techniques, CPR, first aid, and surf awareness, ensuring they are well-prepared to respond effectively in emergency situations.',
  },
  {
    icon: 'mingcute:hat-2-line',
    label: 'Community-Centric Values',
    text: 'Our cadets program places a strong emphasis on community values. Cadets are just beginning their journey to teens and beyond and with a great sense of adventure they are taught to prioritize the safety and well-being of beachgoers whilst embodying the ethos of Surf Life Saving.',
  },
  {
    icon: 'mingcute:hat-2-line',
    label: 'Leadership Cultivation',
    text: 'Beyond skills, cadets are mentored to develop leadership qualities. They gain experience in teamwork, communication, and decision-making, preparing them to take on leadership roles within the Surf Life Saving movement and other areas of life.',
  },
  {
    icon: 'mingcute:hat-2-line',
    label: 'Lifelong Dedication',
    text: 'The Surf Life Saving Cadet experience is designed to instill a lifelong commitment to ocean safety and community service. It fosters a deep and enduring passion for lifesaving, encouraging cadets to remain engaged and make a lasting impact in their communities.',
  },
];
console.log(cadetsContent);
const CompetitorsCadets = () => {
  return (
    <StyledRootResponsive>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '700px' }}>
            <Typography variant="h3">SCC Surf Rescue Cadets</Typography>
            <Typography variant="body2">
              At South Curl Curl SLSC, our Surf Life Saving Cadets are empowered with the skills, knowledge, and values to become dedicated and community-focused lifesavers, committed to beach safety and
              well-being.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 3fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {cadetsContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '500px' }}>
            <Typography variant="body2">All membership renewals and new member registrations are now online. Please follow link below for full instructions.</Typography>
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
export default CompetitorsCadets;

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
