// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Typography, Box } from '@mui/material';
// routes
// components
import Logo from 'src/components/logo';
//
import { AuthWithSocial, AuthCarousel, AuthRegisterForm } from '../components';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

export default function RegisterCoverView() {
  const isMdUp = useResponsive('up', 'md');
  return (
    <Stack direction="row" sx={{ minHeight: 1 }}>
      <Box
        sx={{
          width: { xs: 1, md: 480 },
          p: (theme) => ({
            xs: theme.spacing(4, 10),
            sm: theme.spacing(5, 20),
            md: theme.spacing(5, 10),
          }),
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Logo />
        </Box>
        <Stack
          sx={{
            pb: 5,
            pt: { xs: 5, md: 5 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h3" paragraph>
            Create Account
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`Already have a account? `}
            <Link component={NextLink} href="/auth/login-cover" variant="subtitle2" color="secondary">
              Login
            </Link>
          </Typography>
        </Stack>

        <AuthWithSocial />

        <Divider sx={{ py: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            OR
          </Typography>
        </Divider>

        <AuthRegisterForm />
      </Box>

      {isMdUp && <AuthCarousel title="new account" images={['/assets/images/scc-beach-pool.jpeg', '/assets/images/scc-fb-grp.jpeg', '/assets/images/scc-pool-waves.jpeg']} />}
    </Stack>
  );
}
