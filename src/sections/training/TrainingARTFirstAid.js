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

const trainingARTFirstAidContent = [
  {
    icon: 'ci:first-aid',
    label: 'Advanced Resuscitation Certificate',
    text: `<p>The Advanced Resuscitation Techniques Certificate (<strong>ARTC</strong>) provides participants with the skills and knowledge to use oxygen, airway management devices and automated defibrillators during resuscitation, and to administer oxygen to conscious or unconscious breathing casualties.</p><ul><li>Minimum age : 15yrs and above</li><li>Prerequisite : Provide First Aid Course</li><li>Outcome : ART Patrolling Member</li><li>Course Duration : 4 evenings</li></ul><p>This course is run two or three times a season with a Spring course starting in November &amp; a summer course starting in February. Please send a message to the <a href="mailto:chiefinstructor@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">chiefinstructor@southcurlcurlslsc.com.au</a> to express your interest in this course</p>`,
  },
  {
    icon: 'ci:first-aid',
    label: 'Provide First Aid Course',
    text: `<p>Trains participants in the skills and knowledge to manage emergency first aid situations until professional medical support is available.&nbsp;</p><ul><li>Minimum age : 14/15yrs and above</li><li>Prerequisite : Complete the Elearning pre-work</li><li>Outcome : First Aid Certificate</li><li>Course Duration : Full day course</li></ul><p>This course runs generally inline with the ARTC course and is a prerequisite for ARTC</p>`,
  },
];
const TrainingARTFirstAid = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="artfirstaid" style={{ position: 'absolute', top: '-80px' }} />
      </div>

      <Container maxWidth="lg" sx={{ mx: 0, px: { xs: 0.5, sm: 3 }, textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3">Advanced First Aid</Typography>
            <Typography variant="body2">
              At South Curl Curl we also provide many opportunities to enhance your First Aid capabilities through more advanced First Aid training. Why not go to the next level and join us in our Advanced
              Resus and First Aid courses.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {trainingARTFirstAidContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '400px' }}>
            <Typography variant="caption">For all training queries please send an email to chiefinstructor@southcurlcurlslsc.som.au for further information</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default TrainingARTFirstAid;

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
