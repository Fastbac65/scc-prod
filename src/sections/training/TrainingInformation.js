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
    imgUrl: '/assets/images/patrol1.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0.3)} 10%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 45%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/patrol1.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const patrolInfoContent = [
  {
    icon: 'icon-park-outline:degree-hat',
    label: 'Season Starts Sept 23rd',
    text: `<p>All active members are required to be rostered onto patrol duty throughout the season on a rotational basis usually one day per month, which equates to 5-6 half day patrols per season. Due to the strength of our patrolling membership and our patrol hours, this is one of the lightest patrolling commitments across the Sydney Northern Beaches Branch.</p>`,
  },
  {
    icon: 'icon-park-outline:degree-hat',
    label: 'Patrol Roster',
    text: `<p>Current SCC Patrol roster can be seen below in the calendar section. This version on the public website does not include telephone numbers due to privacy reasons. Patrolling Members can access the Patrol Roster with telephone number on TeamApp under ‘Information for Patrolling Members’.</p>`,
  },
  {
    icon: 'icon-park-outline:degree-hat',
    label: 'Gym Access',
    text: `<p>Our gym is for the benefit of our Patrolling Members only. Allowing non-members to access the facility puts the club at risk.  Those Patrolling Members wishing to access the gym must complete patrol obligations, and will require a FOB.  The fee is $50 (non-refundable) and is payable via the payment link on <a rel='noopener' target='_blank' href=' https://pnpnet.qvalent.com/OnlinePaymentServlet?cd_community=SLSA&cd_currency=AUD' >here</a>. Select South Curl Curl at the top and 'club key' for 'Transaction Type". Please complete Gym Agreement Form found <a rel='noopener' target='_blank' href='https://southcurlcurlslsc.org/wp-content/uploads/2023/08/SCC-Gym-agreement-FINAL.pdf' >here</a>. Email mail@southcurlcurlslsc.org to arrange FOB collection or activation.</p>`,
  },
];
const TrainingInformation = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="patrolinfo" style={{ position: 'absolute', top: '-80px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3">SCC Training</Typography>
            <Typography variant="body2">All your training info here from Nat our chief instructor</Typography>
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
            <Typography variant="caption">For any queries around Patrols and Rosters please email the Patrol Supervisor on patrolsup@southcurlcurlslsc.com.au</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default TrainingInformation;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography>{label}</Typography>
        <Markdown content={text} />

        {/* <Typography color="text.secondary" variant="body2">
          {text}
        </Typography> */}
      </Stack>
    </Stack>
  );
}
