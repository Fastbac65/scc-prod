import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Link, IconButton, InputAdornment } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useSettingsContext } from 'src/components/settings';
//
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'src/lib/createFirebaseApp';
import { addDoco, updateDoco } from 'src/lib/firestoreDocument';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

// ----------------------------------------------------------------------

export default function AuthLoginForm() {
  const {
    state: { alert },
    dispatch,
  } = useSettingsContext();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('That is not an email'),
    password: Yup.string().required('Password is required').min(6, 'Password should be of minimum 6 characters length'),
  });
  const defaultValues = {
    email: 'holymoly@this.com',
    password: 'qwaszxer',
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    // reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 500));
      const userDoc = await signInWithEmailAndPassword(auth, data.email, data.password);
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: 'Welcome back!',
          duration: 3000,
        },
      });
      console.log(userDoc);
      // update subset
      // const userObj = {
      //   uid: userDoc.user.uid,
      //   email: userDoc.user.email,
      //   emailVerified: userDoc.user.emailVerified,
      //   phoneNumber: userDoc.user.phoneNumber,
      //   displayName: userDoc.user.displayName,
      //   photoURL: userDoc.user.photoURL,
      //   providerData: userDoc.user.providerData,
      //   createdAt: userDoc.user.metadata.createdAt,
      //   creationTime: userDoc.user.metadata.creationTime,
      //   lastLoginAt: userDoc.user.metadata.lastLoginAt,
      //   lastSignInTime: userDoc.user.metadata.lastSignInTime,
      // };
      const userObj = {
        // uid: userDoc.user.uid,
        // email: userDoc.user.email,
        // phoneNumber: userDoc.user.phoneNumber,
        // displayName: userDoc.user.displayName,
        // photoURL: userDoc.user.photoURL,
        lastLoginAt: userDoc.user.metadata.lastLoginAt,
        lastSignInTime: userDoc.user.metadata.lastSignInTime,
      };
      console.log(userObj);

      await updateDoco('members', userDoc.user.uid, userObj);
      // reset();
      // router.push('/account/orders/');
    } catch (error) {
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'error',
          message: `Login failed. Please check your details are correct. To recover a lost password please use 'Forgot password?`,
          duration: 10000,
        },
      });
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1.5} alignItems="flex-end">
        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Link component={NextLink} href="/auth/reset-password" variant="body2" underline="always" color="text.secondary">
          Forgot password?
        </Link>

        <LoadingButton fullWidth color="primary" size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
