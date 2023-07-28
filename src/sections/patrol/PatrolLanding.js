import { Stack, Divider, Container, Typography, IconButton, Unstable_Grid2 as Grid, Box, alpha, Link, useTheme } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Iconify from 'src/components/iconify/Iconify';
import { socials } from 'src/config-global';
import { bgGradient } from 'src/lib/cssStyles';

const PatrolLanding = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          pt: 8,
          pb: 2,
          mt: { sm: '16px' },
          position: 'relative',
          ...bgGradient({
            startColor: `${alpha(theme.palette.background.default, 0.4)} 0%`,
            endColor: `${theme.palette.background.default} 105%`,
            imgUrl: 'assets/images/scc-fb-grp.jpeg',
          }),
        }}
      >
        <Grid container spacing={3} sx={{ m: 0, justifyContent: 'center' }}>
          <Grid xs={12} md={10}>
            <Stack spacing={1} alignItems={{ xs: 'center' }} sx={{ textAlign: { xs: 'center' } }}>
              <Typography variant="h2" component="h2">
                {/* {title} */}
                Patrols
              </Typography>
              <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
                The only place to be on a sunny Sunday morning. Check our weekly update for latest news.
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
        <Container>
          <CustomBreadcrumbs sx={{ mb: 3 }} links={[{ name: 'Home', href: '/' }, { name: 'Our Club' }]} />
        </Container>
      </Box>

      {/* <Divider /> */}
    </>
  );
};

export default PatrolLanding;
