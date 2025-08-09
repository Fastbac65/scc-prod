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
    imgUrl: '/assets/images/champs3.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(25, 0, 4),
    ...bgGradient({
      direction: 'to bottom',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 35%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/champs10wide.jpeg',
    }),
    backgroundPosition: 'center, top',
    backgroundSize: '100%',
  },
}));

// ----------------------------------------------------------------------

const champsContent = [
  {
    icon: 'mdi:run',
    label: 'What is a Champion Lifesaver?',
    text: `
    <p>Becoming a South Curl Curl Champion Lifesaver is not just a title; it’s a journey that demands unwavering dedication and a profound commitment to rigorous training. Imagine early mornings and late evenings, where the gym, the pool, and the beautiful ocean become your training grounds. A relentless pursuit of physical and mental excellence through board races, beach sprints, tube rescues and all aspects of aquatic rescue, CPR and first aid.</p>
    
    <p>Amid the training and assessments, what makes this journey truly remarkable is the sense of community. Lifesavers create bonds through shared laughter, unforgettable memories, and unique experiences. It's not just a sport or an event; it's a way of life where the commitment is matched by the warmth of camaraderie.</p>`,
  },
  {
    icon: 'mdi:run',
    label: 'A Champion Lifesaver Event',
    text: `
    <p>The Champion Lifesaver event provides Surf Life Saving members (minimum age group U14, so 13 yrs of age) with the opportunity to demonstrate, in a competitive manner, the physical, lifesaving and knowledge skills required of a Lifesaver. The event is determined through a scoring system, where the competitor with the highest score, after all 3 sections, is declared the winner. The maximum attainable score in total is 120 points.</p>
    <ul>
    <li>Physical Skills 40 points - Surf (swim) Race, Board Race, Beach Sprint, Tube Rescue (10 points each)</li>
    <li>Questionnaire 40 points - The theory section consists of 40 multiple choice questions derived from the current edition of the SLSA Public Safety and Aquatic Rescue Manual. 30-minute time limit.</li>
    <li>Resuscitation 40 points - Part A: A live patient assessment including lateral position (20 points maximum), Part B: One person CPR on a manikin (20 points maximum)
    </ul>
</li>
    <p>For more information on how to join the Champion Lifesavers at South Curl Curl, please do not hesitate to contact: Ben Humel, CLS Head Coach mobile:0419 446 864 or email <a target='_blank rel='noopener' href='mailto:ben@humel.com.au'   >ben@humel.com.au</a>, Valerie Burke, CLS Team Mgr  mobile:0431 905 095.</p>`,
  },
  {
    icon: 'mdi:run',
    label: 'Follow Us',
    text: `
    <p>For all the latest updates and posts, follow our Instagram: <a target='_blank rel='noopener' href='https://www.instagram.com/sccchampionlifesavers/'   >@sccchampionlifesavers</a> or <a target='_blank rel='noopener' href='https://www.facebook.com/groups/2409768001/'   >SCC Facebook</a></p>`,
  },
];
//
const CompetitorsChamps = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="champs" style={{ position: 'absolute', top: '-260px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Typography variant="h3" component="h2">
              SCC Champion Lifesavers
            </Typography>
            <Typography variant="body2">
              Championing the development of elite lifesavers, we strive to cultivate exceptional skills, unwavering dedication, and a commitment to safeguarding lives on our challenging but beautiful beaches,
              come join the best of the best..
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
