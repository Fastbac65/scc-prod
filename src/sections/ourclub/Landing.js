import { Stack, Divider, Container, Typography, IconButton, Unstable_Grid2 as Grid, Box, alpha, Link } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Iconify from 'src/components/iconify/Iconify';

export default Landing = (img, title) => {
  return (
    <>
      <Box
        sx={{
          py: 10,
          position: 'relative',
          ...bgGradient({
            startColor: `${alpha(theme.palette.background.default, 0.4)} 0%`,
            endColor: `${theme.palette.background.default} 100%`,
            imgUrl: 'assets/images/scc-fb-grp.jpeg',
          }),
        }}
      >
        <Grid container spacing={3} sx={{ m: 0, justifyContent: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={2}
              alignItems={{
                xs: 'center',
                md: 'center',
              }}
              sx={{
                // color: 'common.white',
                textAlign: {
                  xs: 'center',
                  md: 'center',
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.72, pb: 0 }}>
                {duration}
              </Typography>

              <Typography variant="h2" component="h2" sx={{ mt: 0 }}>
                {title}
              </Typography>

              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                {clientsideDate}
              </Typography>

              <Stack direction="row">
                {socials.map((social) => (
                  <Link key={social.value} href={social.href} target="_blank" underline="none">
                    <IconButton color="primary">
                      <Iconify icon={social.icon} />
                    </IconButton>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* <Image sx={{ mt: { xs: '64px', md: 0 } }} alt="hero" src={heroImg} ratio="21/9" /> */}

      <Container>
        <CustomBreadcrumbs sx={{ my: 3 }} links={[{ name: 'Home', href: '/' }, { name: 'InSights', href: '/insights#insights' }, { name: title }]} />
      </Container>

      <Divider />
    </>
  );
};
