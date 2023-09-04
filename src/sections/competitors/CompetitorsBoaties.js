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
    imgUrl: '/assets/images/boaties1.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      imgUrl: '/assets/images/boaties1.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const boatiesContent = [
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'Skill Development Focus',
    text: `boaties are awesome this and that`,
  },
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'State and National Success',
    text: `Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. `,
  },
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'Family-Centered Approach',
    text: `Now this quiet courtyard, Sunday afternoon, this girl with a hand on his chest. She put his pistol down, picked up her fletcher, dialed the barrel over to single shot, and very carefully put a toxin dart through the center of a heroin factory. `,
  },
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'Dual Participation Opportunities',
    text: `Members of the 'Rippers' group are also given the option to participate in their mainstream age groups if they wish, fostering a sense of belonging and integration. Its all about providing an active learning and fun environment for all participants.`,
  },
];
console.log(boatiesContent);
const CompetitorsBoaties = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="boaties" style={{ position: 'absolute', top: '-80px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3">SCC Boaties</Typography>
            <Typography variant="body2">
              Our mission with the South Curl Curl SLSC Rowing Teams is to champion competitive excellence. We strive to nurture a deep passion for rowing, foster camaraderie, and instill discipline while
              representing our club with pride on regional, state and national waters.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {boatiesContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '400px' }}>
            <Typography variant="caption">Email Boat Captain - Boatiesemailhere@southcurlynippers.com.</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default CompetitorsBoaties;

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
