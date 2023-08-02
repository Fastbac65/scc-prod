import { Stack, Divider, Container, Typography, IconButton, Unstable_Grid2 as Grid, Box, alpha, Link, useTheme } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Iconify from 'src/components/iconify/Iconify';
import { socials } from 'src/config-global';
import { bgGradient } from 'src/lib/cssStyles';

const VenueHireLanding = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          pt: 8,
          // pb: 2,
          mt: { sm: '16px' },

          position: 'relative',
          ...bgGradient({
            startColor: `${alpha(theme.palette.background.default, 0.4)} 0%`,
            endColor: `${alpha(theme.palette.background.default, 1)} 90%`,
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
                Amazing location, stunning panoramic views of Curl Curl beach. We offer a unique venue, right on the beach, for parties, weddings, conferences, business meetings, fundraisers and other similar
                functions.
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
