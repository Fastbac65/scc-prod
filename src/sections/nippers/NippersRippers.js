import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
// components
import Iconify from 'src/components/iconify/Iconify';
import Markdown from 'src/components/markdown/Markdown';
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
    imgUrl: '/assets/images/gusto2.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/gusto2.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const rippersContent = [
  {
    icon: 'mdi:umbrella-beach',
    label: 'Skill Development Focus',
    text: `<p>The programs core objective is to impart crucial skills such as surf awareness and beach safety. Through carefully structured sessions, participants develop a strong foundation in ocean safety while boosting their self-assurance in a supportive setting.</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Engaging Activities',
    text: `<p>Alongside skill acquisition, the program engages participants in a variety of enjoyable activities including beach races, friendly flags, ocean wades and progressive introduction to using nipper surfboards as confidence in the water grows.</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Family-Centered Approach',
    text: `<p>Parents and guardians are welcomed to join their children during sessions. This family-oriented approach ensures that everyone shares in the excitement as participants master new skills throughout the season.</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Dual Participation Opportunities',
    text: `<p>Members of the 'Rippers' group are also given the option to participate in their mainstream age groups if they wish, fostering a sense of belonging and integration. Its all about providing an active learning and fun environment for all participants.</p>`,
  },
];
const NippersRippers = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="rippers" style={{ position: 'absolute', top: '-80px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3">SCC Rippers</Typography>
            <Typography variant="body2">
              South Curly proudly partners with the Cerebral Palsy Alliance at Allambie Heights to offer an exceptional modified Nipper program tailored for children and youth (ages 5 to 15) with additional
              needs. This collaborative initiative emphasizes inclusion, creating an enriching environment for all participants through:
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {rippersContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '400px' }}>
            <Typography variant="caption">Email Kirsten Quinn - rippers@southcurlcurlslsc.com.au if you have any requirements for this program or would like to help out.</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default NippersRippers;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography>{label}</Typography>
        <Markdown content={text} />
      </Stack>
    </Stack>
  );
}
