import { Stack, Divider, Container, Typography, IconButton, Unstable_Grid2 as Grid, Box, alpha, Link, useTheme } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Iconify from 'src/components/iconify/Iconify';
import { socials } from 'src/config-global';
import { bgGradient } from 'src/lib/cssStyles';

const TrainingLanding = () => {
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
                Training
              </Typography>
              <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
                At South Curl Curl we aim to provide training that is relevant to the needs of our lifesaving community but also ensure that it is current and of the highest standard. Our trainers have a great
                passion for keeping our very dynamic beach safe and giving all patrollers the skills to do so. South Curly often provides extra excitement and being comfortable in our surf, whilst keeping your
                family & friends safe can be an asset for life.
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
          <CustomBreadcrumbs
            sx={{ mb: 3 }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'IRB Crew/Driver', href: '/training/#irb' },
              { name: 'ART & First Aid', href: '/training/#artfirstaid' },
              { name: 'Training Calendar', href: '/training/#trainingcalendar' },
            ]}
          />
        </Container>
      </Box>

      {/* <Divider /> */}
    </>
  );
};

export default TrainingLanding;
