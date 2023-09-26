import { Button, DialogActions, DialogContent } from '@mui/material';
import { useRef, useState } from 'react';
import { signInWithEmailLink, updatePassword, updateProfile } from 'firebase/auth';

import { auth } from 'src/lib/createFirebaseApp';
import { useSettingsContext } from 'src/components/settings';
import { useRouter } from 'next/router';
import Iconify from 'src/components/iconify/Iconify';
import PasswordField from './PasswordField';
import { addDoco } from 'src/lib/firestoreDocument';

const EmailSignInSetPassword = ({ email, fname, mobile }) => {
  const router = useRouter();

  const {
    dispatch,
    state: { alert, modal },
  } = useSettingsContext();
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  // const [emailError, setEmailError] = useState(false);
  const [pwordError, setPwordError] = useState(false);
  // const [emailSaved, setEmailSaved] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setPwordError(true);
      throw new Error('Passwords do not match, please check for typos');
    }
    if (password.length < 8) {
      setPwordError(true);
      throw new Error('Passwords must be a minimum of 8 characters!');
    }
    dispatch({ type: 'START_LOADING' });
    try {
      // The client SDK will parse the code from the link for you.
      const result = await signInWithEmailLink(auth, email, window.location.href);
      try {
        // pick a profile pic from /assets/images/avatar/avatar_x
        const pic = Math.floor(Math.random() * 25);
        await updateProfile(result.user, { displayName: fname, photoURL: `/assets/images/avatar/avatar_${pic}.jpg` });
        await updatePassword(result.user, password);
      } catch (error) {
        console.log('error updating profile and pword ', error, error.message);
      }
      const userObj = {
        uid: result.user.uid,
        email: result.user.email,
        emailVerified: result.user.emailVerified,
        phoneNumber: mobile,
        displayName: fname,
        photoURL: result.user.photoURL,
        providerData: result.user.providerData,
        createdAt: result.user.metadata.createdAt,
        creationTime: result.user.metadata.creationTime,
        lastLoginAt: result.user.metadata.lastLoginAt,
        lastSignInTime: result.user.metadata.lastSignInTime,
      };
      // create the member doc
      await addDoco('members', result.user.uid, userObj);

      dispatch({ type: 'END_LOADING' });
      dispatch({ type: 'MODAL', payload: { ...modal, open: false } });
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: `Thank you. Your details have been secured. Your South Curl Curl SLSC website members account is all setup! You can view your account details via the fun avatar, top right. If you would like to be a content contributor to the SCC website and posts please speak with a member of our committee or contact webadmin@southcurlcurlslsc.com.au.`,
          duration: 12000,
        },
      });
      router.push('/');
    } catch (error) {
      console.log(error.message, error);
      dispatch({ type: 'MODAL', payload: { ...modal, open: false } });

      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'error',
          message: `Authentication error: ${error.code}. Your email link seems to have expired. Please re-start the process!`,
          duration: 8000,
        },
      });
      // router.push('/auth/login-cover/');
    }

    dispatch({ type: 'END_LOADING' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {!emailSaved && (
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <DialogContentText>It appears you are using a different device or browser to complete the signin process. For security reasons we need to confirm your email again.</DialogContentText>
          <TextField sx={{ my: 2 }} size="small" inputRef={emailRef} error={emailError} label="Email" />
          <DialogContentText>Confirm new password:</DialogContentText>
        </DialogContent>
      )} */}
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/* <DialogContentText>New password:</DialogContentText> */}
        <PasswordField sx={{ my: 2 }} size="small" inputRef={passwordRef} error={pwordError} label="New Password" />
        {/* <DialogContentText>Confirm new password:</DialogContentText> */}
        <PasswordField size="small" inputRef={confirmPasswordRef} error={pwordError} label="Confirm Password" />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button type="submit" sx={{ borderRadius: 25 }} variant="contained" endIcon={<Iconify icon="carbon:send" />}>
          Submit
        </Button>
      </DialogActions>
    </form>
  );
};
export default EmailSignInSetPassword;
