import { Stack, Container, Typography, Unstable_Grid2 as Grid, Box, alpha, useTheme } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';

import { bgGradient } from 'src/lib/cssStyles';

const CompetitorsLanding = () => {
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
                Competitors
              </Typography>
              <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
                Our competitors at South Curl Curl SLSC share a unified mission: To excel in the waters, on the sand, and beyond. We commit to relentless training, unwavering dedication, and embodying the
                values of lifesaving.
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

export default CompetitorsLanding;
