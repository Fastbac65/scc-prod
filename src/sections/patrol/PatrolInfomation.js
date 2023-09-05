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
    imgUrl: '/assets/images/patrol4.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/patrol4.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const patrolInfoContent = [
  {
    icon: 'mdi:flag-variant-outline',
    label: 'Skill Development Focus',
    text: `The programs core objective is to impart crucial skills such as surf awareness and beach safety. Through carefully structured sessions, participants develop a strong foundation in ocean safety while boosting their self-assurance in a supportive setting.`,
  },
  {
    icon: 'mdi:flag-variant-outline',
    label: 'Engaging Activities',
    text: `Alongside skill acquisition, the program engages participants in a variety of enjoyable activities including beach races, friendly flags, ocean wades and progressive introduction to using nipper surfboards as confidence in the water grows.`,
  },
  {
    icon: 'mdi:flag-variant-outline',
    label: 'Family-Centered Approach',
    text: `Parents and guardians are welcomed to join their children during sessions. This family-oriented approach ensures that everyone shares in the excitement as participants master new skills throughout the season.`,
  },
  {
    icon: 'mdi:flag-variant-outline',
    label: 'Dual Participation Opportunities',
    text: `Members of the 'Rippers' group are also given the option to participate in their mainstream age groups if they wish, fostering a sense of belonging and integration. Its all about providing an active learning and fun environment for all participants.`,
  },
];
const PatrolInformation = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="patrolinfo" style={{ position: 'absolute', top: '-80px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3">SCC Patrol</Typography>
            <Typography variant="body2">
              All active members are required to be rostered onto patrol duty throughout the season on a rotational basis usually one day per month, which equates to 5-6 half day patrols per season.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {patrolInfoContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '400px' }}>
            <Typography variant="caption">Email Patrol Capt - patrol@southcurlynippers.com if you have any requirements for this program or would like to help out.</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default PatrolInformation;

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
