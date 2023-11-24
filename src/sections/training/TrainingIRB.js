import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
// components
import Iconify from 'src/components/iconify/Iconify';
import Markdown from 'src/components/markdown/Markdown';
import useResponsive from 'src/hooks/useResponsive';
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
    imgUrl: '/assets/images/irbtrain.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to right',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/irbtrain.jpeg',
    }),
    backgroundPosition: 'center, left',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const trainingIRBContent = [
  {
    icon: 'fontisto:propeller-1',
    label: 'IRB Crew',
    text: `<p>The Inflatable Rescue Boat (IRB) Crew course provides participants with the skills and knowledge to effectively crew an Inflatable Rescue Boat in surf rescue operations</p><ul><li>Minimum age : 15yrs and above</li><li>Prerequisite : Bronze Medallion</li><li>Outcome : IRB Crew</li><li>Course Duration : approx 4 weeks - depends on candidate and being able to display skills in various surf conditions</li></ul><p>Please send a message to the club captain to express your interest in this course -&nbsp;<a href="mailto:clubcaptain@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">clubcaptain@southcurlcurlslsc.com.au</a></p>`,
  },
  ,
  {
    icon: 'fontisto:propeller-1',
    label: 'IRB Driver',
    text: `<p>The Silver Medallion Inflatable Rescue Boat Driver (<strong>IRB Driver</strong>) course provides participants with the skills and knowledge to effectively drive an Inflatable Rescue Boat in surf rescue operations</p><p>Minimum age : 17yrs and above</p><ul><li>Prerequisite : IRB crew &amp; Bronze Medallion</li><li>Outcome : IRB Driver</li><li>Course Duration : 8 + weeks - depends on candidate and being able to display skills in various surf conditions</li></ul><p>Please send a message to the club captain to express your interest in this course -&nbsp;<a href="mailto:clubcaptain@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">clubcaptain@southcurlcurlslsc.com.au</a></p>`,
  },
];
const TrainingIRB = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="irb" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ mx: 0, px: { xs: 0.5, sm: 3 }, textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '700px' }}>
            <Typography variant="h3" component="h2">
              Rescue Boat Training
            </Typography>
            <Typography variant="body2">
              When the surf gets &quot;more demanding&quot; and things get more complicated our IRB teams are called upon. Take your life saving skills up another level, join our amazing IRB crew and drivers
              and learn how to deal with and navigate probably some of the most challenging surf conditions on the northern beaches
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 3fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {trainingIRBContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '900px' }}>
            <Typography variant="body2">
              All members are required to be active and renewed to participate is any South Curly training and water activity for insurance purposes. Please make sure you membership is up to date and you have
              completed the skills maintenance for prerequisites.
            </Typography>
          </Stack>
        </Box>
        {/* <Link component={NextLink} href="/ourclub">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            SCC Membership
          </Button>
        </Link> */}
      </Container>
    </StyledRootResponsive>
  );
};
export default TrainingIRB;

function OverviewItem({ icon, label, text = '-' }) {
  const isSmUp = useResponsive('up', 'sm');

  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      {isSmUp && (
        <Box sx={{ width: 24, height: 24 }}>
          <Iconify icon={icon} />
        </Box>
      )}
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
