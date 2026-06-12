import { Box, Typography, Stack, styled, alpha, Link, Container } from '@mui/material';
import { useState } from 'react';
// components
import Iconify from 'src/components/iconify/Iconify';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------
const StyledRootResponsive = styled('div', {
  shouldForwardProp: (prop) => prop !== 'imgUrl',
})(({ theme, imgUrl }) => ({
  padding: theme.spacing(4, 0),
  ...bgGradient({
    direction: 'to top',
    startColor: `${alpha(theme.palette.background.neutral, 0.6)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.98)} 80%`,
    imgUrl,
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 30%`,
      imgUrl,
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const IMAGES = ['/assets/images/beacheatery1.jpg', '/assets/images/beacheatery2.jpg', '/assets/images/beacheatery3.jpg', '/assets/images/beacheatery4.jpg'];

const VenueHireCatering = () => {
  const [imgUrl] = useState(() => IMAGES[Math.floor(Math.random() * IMAGES.length)]);

  return (
    <StyledRootResponsive imgUrl={imgUrl}>
      <div style={{ position: 'relative' }}>
        <div id="venuecatering" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3" component="h2">
              On-site Catering
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              <OverviewItem
                icon="material-symbols:restaurant"
                label="Beach Eatery Catering"
                text="From relaxed beachfront gatherings to birthdays, corporate functions, engagement parties and community events, The Beach Eatery offers fresh, high-quality catering designed to suit every occasion."
              />
              <OverviewItem
                icon="material-symbols:menu-book"
                label="Our Menu"
                text={
                  <>
                    Located on site, their experienced team can help create a seamless food and beverage experience so you can focus on enjoying your event. Check out their{' '}
                    <Link href="https://southcurlcurlslsc.com.au/assets/docs/TheBeachEatery-Catering&SetMenu.pdf" target="_blank" rel="noopener" color="secondary">
                      full menu
                    </Link>
                    .
                  </>
                }
              />
              <OverviewItem
                icon="mdi:currency-usd"
                label="10% Hall Hire Discount"
                text="As a special benefit for our guests, event bookings that use The Beach Eatery Catering will receive a 10% discount on hall hire at South Curl Curl Surf Life Saving Club."
              />
              <OverviewItem icon="carbon:bar" label="Host Your Event" text="Support local, enjoy exceptional catering, and host your next event in one of the Northern Beaches' most iconic beachfront venues." />
            </Stack>
          </Stack>
          <Stack />
        </Stack>

        <Box display="flex" justifyContent="center">
          {/* <Typography variant="body2" color="text.secondary">
            Beach Eatery&nbsp;
          </Typography> */}
          <Stack direction={{ sm: 'column', md: 'row' }} sx={{ py: 2, maxWidth: '1000px' }}>
            <Typography variant="body2" color="text.secondary">
              w:&nbsp;
              <Link href="https://www.thebeacheatery.com.au/" target="_blank" rel="noopener" variant="body2" color="inherit">
                https://www.thebeacheatery.com.au/
              </Link>
              &nbsp;&nbsp;
            </Typography>

            <Typography variant="body2" color="text.secondary">
              e:&nbsp;
              <Link href="mailto:hello@thebeacheatery.com.au" variant="body2" color="inherit">
                hello@thebeacheatery.com.au
              </Link>
              &nbsp;&nbsp;
            </Typography>
            <Typography variant="body2" color="text.secondary">
              t:&nbsp;
              <Link href="tel:+61294498916" variant="body2" color="inherit">
                +612 94498916
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default VenueHireCatering;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography>{label}</Typography>
        <Typography color="text.secondary" variant="body2">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
