import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';

import { Box, Typography, Stack, Container, CircularProgress, styled, alpha, Divider } from '@mui/material';
// assets
// components
import FormProvider, { RHFTextField, RHFSelect, RHFDatePicker } from 'src/components/hook-form';
//
import { useSettingsContext } from 'src/components/settings';

import { addDoco } from 'src/lib/firestoreDocument';
import { useEffect } from 'react';
import Iconify from 'src/components/iconify/Iconify';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------

const bookingOptions = ['Evening', 'Morning', 'All Day'];

const StyledRootResponsive = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  ...bgGradient({
    direction: 'to top',

    startColor: `${alpha(theme.palette.background.neutral, 0.7)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.85)} 70%`,
    // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.7)} 0%`,
    // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.95)} 70%`,
    imgUrl: '/assets/images/scc-party2.jpg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 0%`,
      endColor: `${alpha(theme.palette.background.neutral, 0.98)} 65%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/scc-venue.jpeg',
    }),
    // backgroundPosition: 'center, left ',
    // backgroundSize: 'cover, auto 100%',
  },
}));

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.background.neutral, 1)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.85)} 30%`,
    imgUrl: '/assets/images/scc-party2.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

const VenueHireBooking = () => {
  const {
    // user,
    dispatch,
    state: { alert },
  } = useSettingsContext();

  const bookingSchema = Yup.object().shape({
    fullName: Yup.string().required('Please provide your full name'),
    email: Yup.string().required('Please provide your email'),
    phoneNumber: Yup.string().required('Please provide your mobile'),
    occasion: Yup.string().required('What is the occasion'),
    bookingDate: Yup.string().required('Please chose a date for your booking'),
    bookingType: Yup.string().required('Please chose a booking type'),
  });
  const defaultValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    occasion: '',
    bookingDate: new Date(),
    bookingType: 'Evening',
  };
  const methods = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues,
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // useEffect(() => {
  //   const date = new Date();
  //   console.log(date);
  //   const resetValues = {
  //     fullName: 'Terry',
  //     email: '',
  //     phoneNumber: '',
  //     occasion: '',
  //     bookingDate: date,
  //     bookingType: 'Morning Event',
  //   };
  //   reset(resetValues);
  //   //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [reset]);

  const onSubmit = async (data) => {
    const bookingRef = new Date().getTime();
    try {
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      console.log('DATA', data, bookingRef);
      // await addDoco(`bookings`, bookingRef , data);
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: 'Your details have been saved, we will be in touch shortly',
          duration: 4000,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledRootResponsive>
      <Box sx={{ px: 2 }} rowGap={3} columnGap={0} display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: '3fr 2fr', md: 'repeat(2, 1fr)' }}>
        <Stack>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h3">Book your next party now!!</Typography>

            <Typography variant="body2" color="text.secondary" mb={2}>
              Your details please, check availability below. Submit and we&apos;ll be back to you ASAP!
            </Typography>

            <Stack spacing={1.5}>
              <Box rowGap={1.5} columnGap={1} display="grid" gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }}>
                <RHFTextField name="fullName" label="Name" />
                <RHFTextField name="phoneNumber" label="Mobile" />
              </Box>
              <Box rowGap={1.5} columnGap={1} display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
                <RHFTextField name="email" label="Email" />
                <RHFTextField name="occasion" label="Occasion" />
              </Box>
            </Stack>

            <Typography paragraph variant="h5" sx={{ my: 2 }}>
              Booking Date
            </Typography>
            <Box rowGap={2.5} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' }}>
              <RHFDatePicker name="bookingDate" label="Booking Date" disablePast />
              <RHFSelect native name="bookingType" label="Booking Type">
                {bookingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </RHFSelect>
            </Box>
            <Stack alignItems="center">
              <LoadingButton sx={{ my: 4 }} color="primary" size="large" type="submit" variant="contained" loading={isSubmitting} loadingIndicator={<CircularProgress color="primary" size={24} />}>
                Submit Request
              </LoadingButton>
            </Stack>
          </FormProvider>
          <Divider sx={{ mb: 2 }}>Or Contact Us</Divider>
          <Stack alignItems="center">
            <Typography variant="body2" color="text.secondary" px={2}>
              email: scccaretaker@gmail.com or mobile: 0432066292.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </StyledRootResponsive>
  );
};
export default VenueHireBooking;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography>{label}</Typography>
        <Typography color="text.secondary" variant="body2">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
