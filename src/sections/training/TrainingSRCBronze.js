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
    imgUrl: '/assets/images/header12.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(25, 0, 4),
    ...bgGradient({
      direction: 'to bottom',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 35%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/header12.jpeg',
    }),
    backgroundPosition: 'center, top',
    backgroundSize: '100%',
  },
}));

// ----------------------------------------------------------------------

const trainingSRCBronzeContent = [
  {
    icon: 'icon-park-outline:degree-hat',
    label: 'Surf Rescue Certificate',
    text: `<p>The Surf Rescue Certificate (<strong><em>SRC</em></strong>) course is the entry level patrolling award and provides participants with the knowledge of basic patrolling and surf awareness in order to become a probationary patroller and provide water safety for Nippers. The last stepping stone of the Nippers journey to transition to a cadet.</p><ul><li>Minimum age - 13yrs and above</li><li>Prerequisite : 200m swim in 5 minutes</li><li>Outcome : Patrolling Member</li><li>Course Duration : 7-8 weeks</li></ul><p>Candidates train in groups for approximately seven (7) weeks, training weekly in the water on the Sundays and 4 midweek sessions for the Dry content.&nbsp;Candidates will be assessed on various CPR and radio skills and team work in a patrolling situation.&nbsp;</p><p>This course is run once a season with a Spring course starting in October.</p>`,
  },
  {
    icon: 'icon-park-outline:degree-hat',
    label: 'Bronze Medallion',
    text: `<p>The Bronze Medallion course provides participants with the knowledge of basic patrolling and surf awareness in order to be able to participate in lifesaving operations.&nbsp;</p><ul><li>Minimum age - 15yrs and above</li><li>Prerequisite : 400m swim in 9 minutes</li><li>Outcome : Patrolling Member</li><li>Course Duration : 7-8 weeks</li></ul><p>Candidates train in groups for approximately eight (8) weeks, training twice per week and will be assessed on various skills in communications and team work in a patrolling situation. The candidates will also come away with a nationally recognised First Aid Certificate and Advanced Resuscitation Certificate.</p><p>This course is run twice a season with a Spring course starting in October &amp; a summer course starting at the end of January.</p>`,
  },
];
const TrainingSRCBronze = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="info" style={{ position: 'absolute', top: '-160px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Typography variant="h3">SRC & Bronze</Typography>
            <Typography variant="body2">
              The minimum requirement to be an active Surf Lifesaver and join us on patrol is the Surf Rescue Certificate (min age 13 yrs) or the Bronze Medallion (min age 15 yrs). These are also the minmum
              requirement to provide water safety at Nippers.
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={1} sx={{ px: 1, py: 2, textAlign: 'left' }}>
          {trainingSRCBronzeContent.map((item) => (
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
export default TrainingSRCBronze;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography sx={{ fontWeight: 600 }}>{label}</Typography>
        <Markdown content={text} />
        {/* <Typography color="text.secondary" variant="body2">
          {text}
        </Typography> */}
      </Stack>
    </Stack>
  );
}
