import { Stack, Divider, Container, Typography, IconButton, Unstable_Grid2 as Grid, Box, alpha, Link, useTheme } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Iconify from 'src/components/iconify/Iconify';
import { socials } from 'src/config-global';
import { bgGradient } from 'src/lib/cssStyles';

const PrivacyTermsOfUseLanding = () => {
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
              <Typography variant="h2" component="h1">
                {/* {title} */}
                Privacy & Terms of Use
              </Typography>
              <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
                At South Curl Curl SLSC, we are dedicated to safeguarding your privacy. We take the protection of personal information seriously and have implemented measures to ensure the confidentiality,
                security, and responsible handling of all data collected through our services
              </Typography>
              {/* <Typography variant="h2" component="h1">
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
          <CustomBreadcrumbs
            sx={{ mb: 3 }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'Privacy Policy', href: '/privacy/#privacy' },
              { name: 'Terms of Use', href: '/privacy/#termsofuse' },
            ]}
          />
        </Container>
      </Box>

      {/* <Divider /> */}
    </>
  );
};

export default PrivacyTermsOfUseLanding;
