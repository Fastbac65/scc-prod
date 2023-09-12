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
    imgUrl: '/assets/images/boaties1.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 10%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 40%`,
      imgUrl: '/assets/images/boaties1.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const boatiesContent = [
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'A Family Environment',
    text: `<p>The majority of our rowing competitors have never been involved in any sort of rowing environment before, mostly coming from Nippers, old club members/family or associated friends in the community. We welcome people from all walks of life into the boaties family, but they always stay for the warm and fun atmosphere we champion at South Curly, and are happy to walk away with some silverware at the end of each season.</p>`,
  },
  {
    icon: 'material-symbols:rowing-rounded',
    label: 'Branch, State and National Accolades',
    text: `<p>South Curly rowing has been a force to be reckoned with across Branch, State and National (SLSA/ASRL) carnivals for a number of years and are hoping to add to our current records of success. Currently standing at 11 Aussie Golds, 8 ASRL Golds, Numerous State & Branch medals, as well as regular appearances as part of the NSW state team when competing in the Interstate Championships. Together with 3 time representation in the National Selection event competing in a Test series against New Zealand, SCC boaties are proud to keep producing quality season after season.</p> `,
  },
];
const CompetitorsBoaties = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="boaties" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3">South Curly Boaties</Typography>
            <Typography variant="body2">
              With a focus on producing some of the best surf boat rowing athletes in the country, not afraid to crack into an 8ft swell in a boat, South Curly Boaties have been one of Australia’s most dominant
              competitive clubs in the sport for the better part of 85 years.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {boatiesContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        {/* <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '400px' }}>
            <Typography variant="caption">Email Boat Captain - Boatiesemailhere@southcurlynippers.com.</Typography>
          </Stack>
        </Box> */}
      </Container>
    </StyledRootResponsive>
  );
};
export default CompetitorsBoaties;

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
