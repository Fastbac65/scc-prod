import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
// components
import Iconify from 'src/components/iconify/Iconify';
import Markdown from 'src/components/markdown/Markdown';
import { useSettingsContext } from 'src/components/settings';
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
    // padding: theme.spacing(6, 0, 4),
    ...bgGradient({
      direction: 'to bottom',
      startColor: `${alpha(theme.palette.background.neutral, 0.6)} 20%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 98%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/gusto1.jpeg',
    }),
    backgroundPosition: 'center, top',
    // backgroundSize: 'cover',
  },
}));

// ----------------------------------------------------------------------

const ourclubTrainingContent = [
  {
    icon: 'grommet-icons:swim',
    label: 'Surf Rescue Cadet - Existing SRC $100',
    text: `<p>Existing SRC members under 14-18 yrs), A membership fee of $100 is required - includes SRC course, Surf Rescue Certificate and patrol uniform. Not included - Pink Hi-Vis Rashie and and a south curly skull cap (if you don't already have one). Both can be bought at South Curl Curl online Store in Team App.</p>`,
  },
  {
    icon: 'grommet-icons:swim',
    label: 'Bronze Medallion - New Members $380',
    text: `<p>New South Curly member to the club, the BM course fee is $310 - includes Hi-Vis Rashie, skull cap, Bronze Medallion Certification, First aid certification, Advanced Resuscitation Certificate and patrol uniform. An active club Membership fee of $70 is also required.`,
  },
  {
    icon: 'grommet-icons:swim',
    label: 'Bronze Medallion - Nipper Parent/Associate Member $290',
    text: `<p>Nippers parents and associate members, upgrade your skills to Bronze Medallion and qualify to assist with water safety for our Nippers. The BM course fee is $220 - includes Hi-Vis Rashie, skull cap, Bronze Medallion Certification, First aid certification, Advanced Resuscitation Certificate and patrol uniform. An active club Membership fee of $70 is also required.</p>`,
  },
  {
    icon: 'grommet-icons:swim',
    label: 'Bronze Medallion - Existing SRC $100',
    text: `<p>A current SRC upgrading to the Bronze the BM course fee is only $70 - includes Bronze Medallion Certification, First aid certification and Advanced Resuscitation Certificate. A club SRC Membership fee of $30 is also required</p>`,
  },
];
const OurClubTraining = () => {
  const { user } = useSettingsContext();
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="srcbronze" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Typography variant="h3">SRC and Bronze Training</Typography>
            <Typography variant="body2">
              South Curl Curl Surf Life Saving Club offers a variety of courses to new and existing members. All lifesavers are encouraged to gain extra awards to improve their skills. The minimum requirement
              to be an active Surf Lifesaver is the Surf Rescue Certificate (min age 13 yrs) or the Bronze Medallion (min age 15 yrs). All member & course payments can be made via the SLS Members Portal above.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {ourclubTrainingContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2 }}>
            <Typography variant="body2">
              For all of you existing active patrolling members, please make sure you check out our latest news and the members training pages for everything you need to know for your Skill Maintenance
              (previously Proficiencies) this year.
            </Typography>
          </Stack>
        </Box>
        {user && (
          <Link component={NextLink} href="/training">
            <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
              SCC Members Training
            </Button>
          </Link>
        )}
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubTraining;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0}>
        <Typography variant="h5">{label}</Typography>
        {/* <Typography color="text.secondary" variant="body2">
          {text}
        </Typography> */}
        <Markdown content={text} />
      </Stack>
    </Stack>
  );
}
