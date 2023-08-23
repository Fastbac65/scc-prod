import { Stack, Container, Typography, Unstable_Grid2 as Grid, Box, alpha, useTheme } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import { bgGradient } from 'src/lib/cssStyles';

const NippersLanding = () => {
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
                Nippers
              </Typography>
              <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
                The best place to be on a Sunday morning, maximum fun and the highest level of competitive and water safety training for our little ones. Check our weekly update for latest news.
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
          <CustomBreadcrumbs links={[{ name: 'Home', href: '/' }, { name: 'Our Club' }]} />
        </Container>
      </Box>

      {/* <Divider /> */}
    </>
  );
};

export default NippersLanding;
