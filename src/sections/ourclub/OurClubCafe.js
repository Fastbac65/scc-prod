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
    imgUrl: '/assets/images/gustocafe1.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/gustocafe1.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const cafeContent = [
  {
    icon: 'mdi:umbrella-beach',
    label: 'About The Beach Eatery',
    text: `<p>We are a dog friendly cafe located in the South Curl Curl Surf Club. Situated directly above the golden sands of South Curl Curl beach. The Beach Eatery is a great place to stop in for a coffee and a bite to eat after the beach, a swim in the rock pool or a pit stop on your walk. Just up the hill is the beautiful board walk around South Curl Curl headland cliff top.</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Our Menu',
    text: `<p>At Beach Eatery we have a delicious menu to either dine in or takeaway. We have options available for vegetarians and vegans, and also a great range of gluten free items. Whether its a quick takeaway bacon and egg roll on the run or something more substantial to enjoy dine in with friends and family (or your furry companion) while enjoying our beautiful location.</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'See You Soon',
    text: `<p>We are proud to be part of South Curl Curl SLSC and supporting this amazing volunteer organisation who keeps our beautiful beach safe. We look forward to seeing you soon! We are open from 6.30am every day.</p>`,
  },
];
const OurClubCafe = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="gustocafe" style={{ position: 'absolute', top: '-80px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3" component="h2">
              The Beach Eatery
            </Typography>
            <Typography variant="body2">
              Located right on south curly beach: beautiful views, great food, awesome coffee and a relaxed vibe, with dogs of all kinds and the odd seagull, welcomed and encouraged!
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {cafeContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '400px' }}>
            <Markdown content={`<p>Follow us on Insta: <a target='_blank' rel='noopener noreffer' href=" https://www.instagram.com/thebeacheatery/">@thebeacheatery</a></p>`} />
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubCafe;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography>{label}</Typography>
        <Markdown content={text} />
      </Stack>
    </Stack>
  );
}
