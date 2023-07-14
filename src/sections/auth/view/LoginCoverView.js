// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Typography, Box } from '@mui/material';
// routes
// components
import Logo from 'src/components/logo';
//
import { AuthWithSocial, AuthCarousel, AuthLoginForm } from '../components';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

export default function LoginCoverView() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Stack direction="row" sx={{ minHeight: 1 }}>
      <Box
        sx={{
          width: { xs: 1, md: 480 },
          p: (theme) => ({
            xs: theme.spacing(2, 4),
            sm: theme.spacing(3, 20),
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
            Member Login
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`Don’t have an account? `}
            <Link component={NextLink} href="/auth/register-cover" variant="subtitle2" color="secondary">
              Sign Up Here
            </Link>
          </Typography>
        </Stack>

        <AuthWithSocial />

        <Divider sx={{ py: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            OR
          </Typography>
        </Divider>

        <AuthLoginForm />
      </Box>

      {isMdUp && <AuthCarousel title="welcome back!" images={['/assets/images/scc-beach-pool.jpeg', '/assets/images/scc-fb-grp.jpeg', '/assets/images/scc-pool-waves.jpeg']} />}
    </Stack>
  );
}
