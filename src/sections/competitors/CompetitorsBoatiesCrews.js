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
    imgUrl: '/assets/images/boaties3.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(25, 0, 4),
    ...bgGradient({
      direction: 'to bottom',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 35%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/boaties3wide.jpeg',
    }),
    backgroundPosition: 'center, top',
    backgroundSize: '100%',
  },
}));

// ----------------------------------------------------------------------

const boatiesCrewsContent = [
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'Our Crews',
    text: `<p>Our club is stronger than ever with a number of crews across every division this season, all with formidable records & success over the years. This season our competitors include;</p><br/>
    
    <p>- Open Male - Death Riders, Echidnas, Sneaky Nuts<br/>
    - Open Female - Shakers<br/>
    - Reserve Male - tbd<br/>
    - Reserve Female - Milk<br/>
    - U23 Male - Underdogs, Burley, Whompa<br/>
    - U23 Female - Crumpets*<br/>
    - U19 Male - Tickles*, New Un-Named Crew*<br/>
    - U19 Female - Cruisers*, New Un-Named Crew*<br/><br/>

    *denotes on Debut to scare the competition for the first time this season. We are still in the process of naming two crews, standby for updates!</p>`,
  },
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'Interested In Joining SCC Boaties',
    text: `<p>‘Interested in joining as a rower/sweep? Feel free to contact our Boat Captains Jules & Mali at <a href='mailto:boatcaptain@southcurlcurlslsc.com.au'>boatcaptain@southcurlcurlslsc.com.au</a></p>`,
  },
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'Socials',
    text: `
    <p>For all the latest South Curly rowing updates, check us out on our Instagram: <a target='_blank rel='noopener' href='https://www.instagram.com/southcurlyboaties/'   >@southcurlyboaties</a></p>`,
  },
];
const CompetitorsBoatiesCrews = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="boatcrews" style={{ position: 'absolute', top: '-260px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Typography variant="h3">South Curly Crews</Typography>
            {/* <Typography variant="body2">
              Championing the development of elite lifesavers, we strive to cultivate exceptional skills, unwavering dedication, and a commitment to safeguarding lives on our challenging but beautiful beaches,
              come join the best of the best..
            </Typography> */}
          </Stack>
        </Box>

        <Stack spacing={1} sx={{ px: 1, py: 2, textAlign: 'left' }}>
          {boatiesCrewsContent.map((item) => (
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
export default CompetitorsBoatiesCrews;

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
