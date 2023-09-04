import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
// components
import Iconify from 'src/components/iconify/Iconify';
import Markdown from 'src/components/markdown/Markdown';
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
    imgUrl: '/assets/images/header15.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(25, 0, 4),
    ...bgGradient({
      direction: 'to bottom',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 35%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/header15.jpeg',
    }),
    backgroundPosition: 'center, top',
    backgroundSize: '100%',
  },
}));

// ----------------------------------------------------------------------

const champsContent = [
  {
    icon: 'mdi:run',
    label: 'What is a champion lifesaver',
    text: `
    <p>To give the little ones a chance to use the beach & pool without being "crashed" by the big kids, we have different starting times for the younger age groups as follows:</p>
    <ul>
    <li>this</li>
    <li>1that</li>
    <li>other</li>
    <li>another</li>
    </ul>
    <p>No light but the muted purring of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. No light but the muted purring of the bright void beyond the chain link. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the missionaries,.</p>`,
  },
  {
    icon: 'mdi:run',
    label: 'Parents Run Nippers',
    text: `
    <p>The Club operates entirely on volunteer help. There are many jobs, and for many you don’t need surf lifesaving experience. It is our experience that <strong>the more you get involved, the more your child will enjoy Nippers.</strong> Roles that parents can help with include:</p>
    <ul>
    <li>Age Managers/Assistants & Nippers Committee Roles</li>
    <li>Water Safety (Bronze Medalion required)</li>
    <li>Clothing Sales</li>
    <li>Fundraising and BBQ</li>
    <li>Carnivals - Entry assistance and/or becoming an Official</li>
    </ul>
    <p><strong>Please Note:</strong> We require a parent/guardian to be on the beach at all times during Nippers. It's a lot more fun to participate. Your assistance throughout the season will be regularly required and counted upon. Please offer your help.</p>
    `,
  },
];
console.log(champsContent);
const CompetitorsChamps = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="champs" style={{ position: 'absolute', top: '-160px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Typography variant="h3">SCC Championship Lifesavers</Typography>
            <Typography variant="body2">
              Championing the development of elite lifesavers, we strive to cultivate exceptional skills, unwavering dedication, and a commitment to safeguarding lives on our challenging but beautiful beaches,
              all while fostering a culture of unwavering dedication to water safety.
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={1} sx={{ px: 1, py: 2, textAlign: 'left' }}>
          {champsContent.map((item) => (
            <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
          ))}
        </Stack>
        {/* <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '500px' }}>
            <Typography variant="body2">All membership renewals and new Nipper registrations are now online. Please follow link below for full instructions.</Typography>
          </Stack>
        </Box> */}
      </Container>
    </StyledRootResponsive>
  );
};
export default CompetitorsChamps;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography variant="h5">{label}</Typography>
        <Markdown content={text} />
        {/* <Typography color="text.secondary" variant="body2">
          {text}
        </Typography> */}
      </Stack>
    </Stack>
  );
}
