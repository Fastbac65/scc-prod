import { Stack, Container, Typography, Unstable_Grid2 as Grid, Box, alpha, useTheme, Link, Button } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Iconify from 'src/components/iconify';
import { bgGradient } from 'src/lib/cssStyles';

const OurClubLanding = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          pt: 8,
          pb: 4,
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
                Our Club
              </Typography>
              <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
                South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of
                lifesaving expertise.
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
            links={[
              { name: 'Home', href: '/' },
              { name: 'SRC/Bronze', href: '/ourclub/#srcbronze' },
              { name: 'SCC Cafe-Gusto', href: '/ourclub/#gustocafe' },
              { name: 'SCC Committee', href: '/ourclub/#clubcommittee' },
            ]}
            // moreLink={[{ name: 'Payments and Donations', href: 'https://pnpnet.qvalent.com/OnlinePaymentServlet?cd_community=SLSA&cd_currency=AUD' }]}
            // theme={theme}
          />
        </Container>
        <Stack spacing={1} alignItems={{ xs: 'center' }}>
          <Link target="_blank" rel="noopener" href="https://pnpnet.qvalent.com/OnlinePaymentServlet?cd_community=SLSA&cd_currency=AUD">
            <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
              Payments & Donations
            </Button>
          </Link>
        </Stack>
      </Box>

      {/* <Divider /> */}
    </>
  );
};

export default OurClubLanding;
