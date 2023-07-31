import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';

import { Box, Typography, Stack, Container, CircularProgress, styled, alpha } from '@mui/material';
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

const bookingOptions = ['Evening Event', 'Morning Event', 'All Day'];
const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.background.default, 1)} 0%`,
    endColor: `${alpha(theme.palette.background.default, 0.8)} 30%`,
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
    fullName: Yup.string().required(),
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
    bookingType: 'Evening Event',
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
          message: 'Your booking details have been saved, we will be in touch shortly',
          duration: 4000,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledRoot>
      <Box sx={{ px: 2, pt: 2 }} columnGap={3} display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}>
        <Stack>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Venue Details
          </Typography>
          <Stack spacing={1}>
            <OverviewItem icon="carbon:bar" label="Stylish Wooden Bar" text="Beautiful tables and stools. BYO drinks for you and your guests. Bar service also avilable." />
            <OverviewItem icon="material-symbols:soup-kitchen" label="Large Commercial Grade Kitchen" text="Available for all your entertaining requirements. " />
            <OverviewItem
              icon="carbon:music"
              label="State Of The Art Audio/Video Facilities"
              text="For your music, movies, presentations and conferencing. Everything you could possibly need and easy to setup."
            />
            <OverviewItem
              icon="material-symbols:restaurant"
              label="Large Bar Servery Area"
              text="Large private outdoor balcony adjoining the hall. Capacity for up to 120 people. Inside and outside dining with BBQs. "
            />
          </Stack>
        </Stack>
        <Stack>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h3">Book your next party now!!</Typography>

            <Typography variant="body2" color="text.secondary" mb={2}>
              Please fill out your details below and we will be back to you ASAP!
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
                Submit Booking
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Stack>
      </Box>
      <Stack alignItems="center">
        <Typography variant="body2" color="text.secondary" m={2} mb={4}>
          Otherwise feel free to drop us an email at scccaretaker@gmail.com or call us on the mobile 0432066292.
        </Typography>
      </Stack>
    </StyledRoot>
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
