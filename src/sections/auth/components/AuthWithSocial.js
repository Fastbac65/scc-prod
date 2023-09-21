// next
import { useRouter } from 'next/router';

// @mui
import { Stack, Button } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import { signInSocial } from 'src/lib/firebaseAuth';
import { useSettingsContext } from 'src/components/settings';
import { auth, providerFacebook, providerGoogle } from 'src/lib/createFirebaseApp';
import { addDoco, updateDoco } from 'src/lib/firestoreDocument';

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  const router = useRouter();
  const {
    dispatch,
    state: { alert },
    setHoldRouter,
  } = useSettingsContext();

  const authSocial = async (provider) => {
    dispatch({ type: 'START_LOADING' });
    try {
      setHoldRouter(true);
      const { user, newUser } = await signInSocial(auth, provider);
      let message = 'Welcome back to South Curl Curl Members!!';
      if (newUser) {
        message = `Awesome!!!  Your South Curl Curl members account has been created successfully. Your social profile details have been linked to this account. If you wish to update these details you must update them on your social account. You can edit your personal information and profile details by clicking on your photo top right. `;

        const userObj = {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          displayName: user.displayName,
          photoURL: user.photoURL,
          providerData: user.providerData,
          createdAt: user.metadata.createdAt,
          creationTime: user.metadata.creationTime,
          lastLoginAt: user.metadata.lastLoginAt,
          lastSignInTime: user.metadata.lastSignInTime,
        };
        // addDoco also adds timestamp
        await addDoco('members', user.uid, userObj);
      } else {
        // update subset including items that could change in social account
        const userObj = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          lastLoginAt: user.metadata.lastLoginAt,
          lastSignInTime: user.metadata.lastSignInTime,
        };
        await updateDoco('members', user.uid, userObj);
      }
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: message,
          // variant: '',
          duration: newUser ? 30000 : 6000,
        },
      });
      setHoldRouter(false);
      dispatch({ type: 'END_LOADING' });
    } catch (error) {
      console.log(error);
      const message = error.message === 'Firebase: Error (auth/popup-closed-by-user).' ? 'Pop up closed before social login completion' : `An error has occured: ${error.message}`;
      dispatch({
        type: 'UPDATE_ALERT',
        payload: { ...alert, open: true, severity: 'error', message: message, duration: 8000 },
      }),
        // setTimeout(
        //   // allows some time for the page routing to settle before error message
        //   () =>
        //     dispatch({
        //       type: 'UPDATE_ALERT',
        //       payload: { ...alert, open: true, severity: 'error', message: error.message, duration: 8000 },
        //     }),
        //   100
        // );
        dispatch({ type: 'END_LOADING' });
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      {/* <Button fullWidth size="large" color="inherit" variant="outlined"> */}
      <Button fullWidth size="large" color="inherit" variant="outlined" onClick={() => authSocial(providerGoogle)}>
        <Iconify icon="logos:google-icon" width={24} />
      </Button>

      {/* <Button fullWidth size="large" color="inherit" variant="outlined">
        <Button fullWidth size="large" color="inherit" variant="outlined" onClick={() => authSocial(providerFacebook)}>
        <Iconify icon="carbon:logo-facebook" width={24} color="#1877F2" />
      </Button> */}

      {/* <Button color="inherit" fullWidth variant="outlined" size="large">
        <Iconify icon="carbon:logo-github" width={24} sx={{ color: 'text.primary' }} />
      </Button> */}
    </Stack>
  );
}
