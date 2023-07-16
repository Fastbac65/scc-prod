// next
import { useRouter } from 'next/router';

// @mui
import { Stack, Button } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import { signInSocial } from 'src/lib/firebaseAuth';
import { useSettingsContext } from 'src/components/settings';
import { auth, providerFacebook, providerGoogle } from 'src/lib/createFirebaseApp';

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  const router = useRouter();
  const {
    dispatch,
    state: { alert },
    setHoldRouter,
  } = useSettingsContext();

  const useSocial = async (provider) => {
    try {
      setHoldRouter(true);
      const { user, newUser } = await signInSocial(auth, provider);
      let message = 'Welcome back to South Curl Curl Members!!';
      if (newUser)
        message =
          'Awesome!!!  Your South Curl Curl members account has been created successfully. Your social profile details have been linked to this account. If you wish to update these details you must update them on your social account.';
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: newUser ? 'info' : 'success',
          message: message,
          // variant: '',
          duration: newUser ? 30000 : 6000,
        },
      });
      setHoldRouter(false);
    } catch (error) {
      console.log(error);
      setTimeout(
        // allows some time for the page routing to settle before error message
        () =>
          dispatch({
            type: 'UPDATE_ALERT',
            payload: { ...alert, open: true, severity: 'error', message: error.message, duration: 8000 },
          }),
        1200
      );
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button fullWidth size="large" color="inherit" variant="outlined" onClick={() => useSocial(providerGoogle)}>
        <Iconify icon="logos:google-icon" width={24} />
      </Button>

      <Button fullWidth size="large" color="inherit" variant="outlined" onClick={() => useSocial(providerFacebook)}>
        <Iconify icon="carbon:logo-facebook" width={24} sx={{ color: '#1877F2' }} />
      </Button>

      {/* <Button color="inherit" fullWidth variant="outlined" size="large">
        <Iconify icon="carbon:logo-github" width={24} sx={{ color: 'text.primary' }} />
      </Button> */}
    </Stack>
  );
}
