import { Button, DialogActions, DialogContent, DialogContentText, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { EmailAuthProvider, reauthenticateWithCredential, signInWithEmailLink, updatePassword, updateProfile } from 'firebase/auth';

import { auth, db } from 'src/lib/createFirebaseApp';
import { useSettingsContext } from 'src/components/settings';
import { useRouter } from 'next/router';
import Iconify from 'src/components/iconify/Iconify';
import PasswordField from './PasswordField';
import { addDoco, updateDoco } from 'src/lib/firestoreDocument';

const EmailSignInSetPassword = ({ email, fname, mobile }) => {
  const router = useRouter();

  console.log(email, fname);

  const {
    dispatch,
    state: { alert, modal },
  } = useSettingsContext();
  const emailRef = useRef('');
  const savedEmailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const [emailError, setEmailError] = useState(false);
  const [pwordError, setPwordError] = useState(false);
  const [emailSaved, setEmailSaved] = useState(true);

  // check if this is same device and get email from local storage
  useEffect(() => {
    savedEmailRef.current = window.localStorage.getItem('emailForSignIn');
    // no email render the email input box
    if (!savedEmailRef.current) setEmailSaved(false);
    console.log('setEmail ran');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // email is either the saved version or coming from the dialog
    const email = emailSaved ? savedEmailRef.current : emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // no email saved locally and no email input in email field
    if (!email && !emailSaved) {
      setEmailError(true);
      throw new Error('Please provide an email');
    }
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
      console.log(result.user);
      try {
        // pick a profile pic from /assets/images/avatar/avatar_x
        const pic = Math.floor(Math.random() * 25);
        await updateProfile(result.user, { displayName: fname, photoURL: `/assets/images/avatar/avatar_${pic}.jpg` });
        await updatePassword(result.user, password);
        // await updateDoco('members', result.user.uid, { displayName: fname, phoneNumber: mobile, photoURL: `/assets/images/avatar/avatar_${pic}.jpg` });
        // const credential = EmailAuthProvider.credential(result.user.email, password);
        // await reauthenticateWithCredential(result.user, credential);
      } catch (error) {
        console.log(error, error.message);
      }
      const userObj = {
        uid: result.user.uid,
        email: result.user.email,
        emailVerified: result.user.emailVerified,
        phoneNumber: mobile,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        providerData: result.user.providerData,
        createdAt: result.user.metadata.createdAt,
        creationTime: result.user.metadata.creationTime,
        lastLoginAt: result.user.metadata.lastLoginAt,
        lastSignInTime: result.user.metadata.lastSignInTime,
      };
      // create the member doc
      await addDoco('members', result.user.uid, userObj);
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');

      dispatch({ type: 'END_LOADING' });
      dispatch({ type: 'MODAL', payload: { ...modal, open: false } });
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: `Thank you. Your details have been secured. Your South Curl Curl SLSC website members account is all setup! You can view your account details via the fun avatar, top right. If you would like to be a content contributor to the SCC website and posts please speak with a member of our committee or contact webadamin@southcurlcurlslsc.com.au.`,
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
      // http://192.168.0.220:5002/auth/verification?mode=signIn&oobCode=uABwO_CtfyKvq8oBtTjE293g6Qa9-DYm58L_l90_TqYAAAGJZAuxkQ&apiKey=AIzaSyBz4ew-AmtQGL0h6DNYJKhniipIK7eFBUM&continueUrl=https%3A%2F%2Fscc-prod.vercel.app%3Ffn%3Dbobooo%2520atv%26em%3Dboboo%40bob.com%26ph%3D0456817076&lang=en

      // http://192.168.0.220:5002/auth/verification?mode=signIn&oobCode=m5xrSip1zCWEV6jQl9Xyolsk-DUGP9CKuA4GNQEjEGsAAAGJZCaPlg&apiKey=AIzaSyBz4ew-AmtQGL0h6DNYJKhniipIK7eFBUM&continueUrl=http%3A%2F%2F192.168.0.220%3A5002%3Ffn%3DTerence%2520Durnin%26em%3Dbobo%40bob.com%26ph%3D0407945789&lang=en
    }

    dispatch({ type: 'END_LOADING' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {!emailSaved && (
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <DialogContentText>It appears you are using a different device or browser to complete the signin process. For security reasons we need to confirm your email again.</DialogContentText>
          <TextField sx={{ my: 2 }} size="small" inputRef={emailRef} error={emailError} label="Email" />
          {/* <DialogContentText>Confirm new password:</DialogContentText> */}
        </DialogContent>
      )}
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
