// next
import { useRouter } from 'next/router';
// fb
import { applyActionCode, checkActionCode, signOut, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

// @mui
import { Stack } from '@mui/material';
// components
//
import { useCallback, useEffect } from 'react';
import { useSettingsContext } from 'src/components/settings';
import { auth } from 'src/lib/createFirebaseApp';
import { AuthCarousel } from '../components';
import ResetPasswordVerification from '../components/ResetPasswordVerification';
import EmailSignInSetPassword from '../components/EmailSignInSetPassword';

// ----------------------------------------------------------------------

export default function VerificationView() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    // code using router.query
    const { oobCode, mode, continueUrl } = router.query;

    if (!oobCode || !mode) {
      router.back();
      return;
    }
    verifyUser(oobCode, mode, continueUrl);
  }, [router.isReady]);

  const {
    user,
    // setLogin,
    dispatch,
    state: { alert, modal },
  } = useSettingsContext();

  const verifyUser = async (oobCode, mode, continueUrl) => {
    console.log('verify fct ran');
    // Additional state parameters passed via continueUrl for fullname and email from the register page
    const url = new URL(continueUrl);
    const email = url.searchParams.get('em');
    const fname = url.searchParams.get('fn');
    const mobile = url.searchParams.get('ph');

    if (oobCode) {
      dispatch({ type: 'START_LOADING' });
      try {
        // action code boundary
        switch (mode) {
          case 'signIn': {
            if (isSignInWithEmailLink(auth, window.location.href)) {
              dispatch({ type: 'END_LOADING' });
              dispatch({
                type: 'MODAL',
                payload: {
                  ...modal,
                  open: true,
                  title: 'Create Password',
                  content: <EmailSignInSetPassword email={email} fname={fname} mobile={mobile} />,
                },
              });
            }
            break;
          }
          case 'verifyAndChangeEmail': {
            // const result = await checkActionCode(auth, oobCode);
            await applyActionCode(auth, oobCode);

            router.push('/');
            dispatch({ type: 'END_LOADING' });
            dispatch({
              type: 'UPDATE_ALERT',
              payload: {
                ...alert,
                open: true,
                severity: 'success',
                message: 'Your new email has been verified. You now have full access to SCC Members',
                duration: 8000,
              },
            });
            break;
          }
          case 'recoverEmail': {
            // const result = await checkActionCode(auth, oobCode);
            await applyActionCode(auth, oobCode);
            // await reload(auth.user);
            dispatch({ type: 'END_LOADING' });
            router.push('/');
            dispatch({
              type: 'UPDATE_ALERT',
              payload: {
                ...alert,
                open: true,
                severity: 'success',
                message: `Your email change has been reversed. For security reasons existing sessions have expired. You can sign back in using your original credentials. We strongly recommend you change your password if you did not initiate this email change!`,
                duration: 10000,
              },
            });

            router.push('/');
            signOut(auth);
            break;
          }
          case 'resetPassword': {
            await checkActionCode(auth, oobCode);
            // if the code is ok proceed
            dispatch({ type: 'END_LOADING' });
            dispatch({
              type: 'MODAL',
              payload: {
                ...modal,
                open: true,
                title: 'Reset Password',
                content: <ResetPasswordVerification oobCode={oobCode} />,
              },
            });
            break;
          }

          default: {
            dispatch({ type: 'END_LOADING' });
            dispatch({
              type: 'UPDATE_ALERT',
              payload: {
                ...alert,
                open: true,
                severity: 'error',
                message: 'Verification failed. Unsupported mode',
                duration: 6000,
              },
            });
            router.push('/');
            break;
          }
        }
      } catch (error) {
        dispatch({ type: 'END_LOADING' });
        console.log(error, error.message);
        dispatch({
          type: 'UPDATE_ALERT',
          payload: {
            ...alert,
            open: true,
            severity: 'error',
            message: error.message,
            duration: 6000,
          },
        });
        router.push('/');
      }
    }
  };

  return (
    <Stack direction="row" sx={{ minHeight: 1 }}>
      <AuthCarousel title="Member Verification" images={['/assets/images/scc-beach-pool.jpeg', '/assets/images/scc-fb-grp.jpeg', '/assets/images/scc-pool-waves.jpeg']} />
    </Stack>
  );
}
