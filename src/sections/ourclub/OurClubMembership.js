import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
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
      direction: 'to right',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/gusto2.jpeg',
    }),
    backgroundPosition: 'center, left',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const membershipContent = [
  {
    icon: 'tdesign:member',
    label: 'Membership Renewal',
    text: `<p>Renew online at SLS members portal below. Patroling Member $70, Associate (Social) Member $50, Patrol Cadet (u18) $30 and Family Membership $250. Family membership covers parents/guardians plus kids under 18.</p>`,
  },
  {
    icon: 'tdesign:member',
    label: 'Nippers & Nipper Parents Renewal',
    text: `<p>Renew online at SLS members portal below. Nipper $100, Associate Nipper Parent $50. Please see Nippers page for all program details</p>`,
  },
  // {
  //   icon: 'tdesign:member',
  //   label: 'New members Welcome',
  //   text: 'South Curl Curl Surf Life Saving Club welcomes new membership enquiries from all-comers regardless of age and skill levels. Training is available in all facets of surf life saving and members are encouraged to obtain the various life saving qualifications. Registration',
  // },
  {
    icon: 'tdesign:member',
    label: 'New Member & Nipper Registration',
    text: `<p>Create a new account for each member at SLS members portal below. Within members portal, click on $ menu top right, select South Curl Curl and 'Pay Online' to pay your membership fee. Send photo of ID with proof of age to mail@southcurlcurlslsc.org for each new member (e.g. License, Passport or Birth Certificate).</p>`,
  },
];
const OurClubMembership = () => {
  return (
    <StyledRootResponsive>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3">SCC Membership</Typography>
            <Typography variant="body2">
              South Curl Curl Surf Life Saving Club welcomes all new membership enquiries from all-comers regardless of age and skill levels. For our new Nippers and parents, an amazing fun program awaits you.
              For those aspiring to compete, you are in the right place. The Club has a relatively small and friendly membership base and all interests are catered for, especially social.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 3fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {membershipContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Link target="_blank" rel="noopener" href="https://members.sls.com.au/SLSA_Online/modules/login/index.php">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            SLS Members Portal
          </Button>
        </Link>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ pt: 2, maxWidth: '800px' }}>
            <Typography variant="caption">If you experience difficulties in setting up an online account or renewal, please email the club at mail@southcurlcurlslsc.org.</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubMembership;

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
