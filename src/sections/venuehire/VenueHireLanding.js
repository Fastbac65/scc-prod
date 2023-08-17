import { Stack, Divider, Container, Typography, IconButton, Unstable_Grid2 as Grid, Box, alpha, Link, useTheme, styled } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Iconify from 'src/components/iconify/Iconify';
import { socials } from 'src/config-global';
import { bgGradient } from 'src/lib/cssStyles';

const StyledRootResponsive = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0, 1),
  ...bgGradient({
    direction: 'to top',

    startColor: `${alpha(theme.palette.background.neutral, 0.7)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.85)} 70%`,
    // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.7)} 0%`,
    // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.95)} 70%`,
    imgUrl: '/assets/images/scc-party2.jpg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      // direction: 'to right',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 0.98)} 65%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: 'assets/images/scc-fb-grp.jpeg',
    }),
    // backgroundPosition: 'center, left ',
    // backgroundSize: 'cover, auto 100%',
  },
}));

const VenueHireLanding = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          pt: 8,
          pb: 1,
          mt: { sm: '16px' },

          position: 'relative',
          ...bgGradient({
            startColor: `${alpha(theme.palette.background.neutral, 0.4)} 0%`,
            endColor: `${alpha(theme.palette.background.neutral, 0.98)} 100%`,
            imgUrl: 'assets/images/scc-fb-grp.jpeg',
          }),
        }}
      >
        <Grid container spacing={3} sx={{ m: 0, justifyContent: 'center' }}>
          <Grid xs={12} md={10}>
            <Stack spacing={1} alignItems={{ xs: 'center' }} sx={{ textAlign: { xs: 'center' } }}>
              <Typography variant="h2" component="h2">
                {/* {title} */}
                Venue Hire
              </Typography>
              <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
                Amazing location, stunning panoramic views of Curl Curl beach. We offer a unique venue, right on the beach, for parties, weddings, conferences, business meetings and other similar functions.
              </Typography>
              {/* <Typography variant="h2" component="h2">
                {title}
                South Curl Curl SLSC
              </Typography> */}

              {/* <Stack direction="row">
                {socials.map((social) => (
                  <Link key={social.value} href={social.href} target="_blank" underline="none">
                    <IconButton color="secondary">
                      <Iconify icon={social.icon} />
                    </IconButton>
                  </Link>
                ))}
              </Stack> */}
            </Stack>
          </Grid>
        </Grid>
        <Container sx={{ pt: 2 }}>
          <CustomBreadcrumbs links={[{ name: 'Home', href: '/' }, { name: 'Venue Details' }]} />
        </Container>
      </Box>

      {/* <Divider /> */}
    </>
  );
};

export default VenueHireLanding;
