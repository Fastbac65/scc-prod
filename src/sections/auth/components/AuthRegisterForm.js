import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// @mui
import { LoadingButton } from '@mui/lab';
import { Typography, Stack, Link, IconButton, InputAdornment, CircularProgress } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useSettingsContext } from 'src/components/settings';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function AuthRegisterForm() {
  const router = useRouter();

  const {
    dispatch,
    state: { alert },
  } = useSettingsContext();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required').min(6, 'Mininum 6 characters').max(20, 'Maximum 20 characters'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    mobile: Yup.string().required('Phone number is required'),
  });
  const defaultValues = {
    fullName: '',
    email: '',
    mobile: '',
  };
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    dispatch({ type: 'START_LOADING' });
    try {
      const user = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentUserEmail: data.email,
          mode: 'isClient',
          api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
        }),
      }).then((res) => res.json());
      // if the account already existing throw a wobbler
      console.log(user);
      if (user.uid) throw new Error('Error - It appears there is already an account on our system with that email address.');
      // await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentUserEmail: data.email,
          currentUserName: data.fullName,
          currentUserPhone: data.mobile,
          mode: 'signInWithEmail',
          api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
        }),
      }).then((res) => res.json());
      console.log(response);
      router.push('/');

      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: `Thank you.. we're almost there. An account verification email has been sent to ${data.email}. To complete your account setup and verification, please follow the instructions in your email.`,
          duration: 12000,
        },
      });

      dispatch({ type: 'END_LOADING' });
    } catch (error) {
      console.error(error);
      router.push('/');
      dispatch({ type: 'END_LOADING' });
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'error',
          message: `An account with email ${data.email} already exists. To recover your account please use the 'Forgot password?' on the Client Login page`,
          duration: 12000,
        },
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1.5}>
        <RHFTextField name="fullName" label="Full Name" />

        <RHFTextField name="email" label="Email address" />
        <RHFTextField name="mobile" label="Mobile" />

        {/* <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}

        <LoadingButton fullWidth color="primary" size="large" type="submit" variant="contained" loading={isSubmitting} loadingIndicator={<CircularProgress color="primary" size={24} />}>
          Create my South Curly account
        </LoadingButton>

        <Typography variant="caption" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
          {`In using this website I agree to South Curl Curl SLSC `}
          <Link color="text.primary" href="#" underline="always">
            Terms of Service
          </Link>
          {` and `}
          <Link color="text.primary" href="#" underline="always">
            Privacy Policy.
          </Link>
        </Typography>
      </Stack>
    </FormProvider>
  );
}
