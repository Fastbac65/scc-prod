import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
// fb
import { db } from 'src/lib/createFirebaseApp';
import { ref, update } from 'firebase/database';
// @mui
import { LoadingButton } from '@mui/lab';

import { Box, Typography, Stack, Container } from '@mui/material';
// assets
// components
import FormProvider, { RHFTextField, RHFSelect, RHFDatePicker } from 'src/components/hook-form';
//
import { useSettingsContext } from 'src/components/settings';

import { AccountLayout } from '../layout';
import { updateDoco } from 'src/lib/firestoreDocument';

// ----------------------------------------------------------------------

const GENDER_OPTIONS = ['Female', 'Male', 'Other'];

// ----------------------------------------------------------------------

export default function AccountPersonalView() {
  const {
    member,
    dispatch,
    state: { alert },
  } = useSettingsContext();

  const AccountPersonalSchema = Yup.object().shape({
    displayName: Yup.string(),
    email: Yup.string(),
    phoneNumber: Yup.string(),
    birthday: Yup.string(),
    gender: Yup.string().required('Gender is required'),
    address: Yup.object().shape({
      streetAddress: Yup.string().required('Required to update your address'),
      city: Yup.string().required('Required to update your address'),
      state: Yup.string().required('Required to update your address'),
      postCode: Yup.string().required('Required to update your address'),
      country: Yup.string(),
    }),
  });

  const defaultValues = {
    displayName: '',
    email: '',
    phoneNumber: '',
    birthday: null,
    gender: 'female',
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postCode: '',
      country: 'AU',
    },
  };
  const methods = useForm({
    resolver: yupResolver(AccountPersonalSchema),
    defaultValues,
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (!member) return;
    const bday = member?.birthday ? new Date(member.birthday) : new Date('01-01-2001');
    const resetValues = {
      displayName: member?.displayName || '',
      email: member?.email || '',
      phoneNumber: member?.phoneNumber || '',
      birthday: bday,
      gender: member?.gender || 'female',
      address: {
        streetAddress: member?.address?.streetAddress || '',
        city: member?.address?.city || '',
        state: member?.address?.state || '',
        postCode: member?.address?.postCode || '',
        country: member?.address?.country || 'AU',
      },
    };
    reset(resetValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member]);

  const onSubmit = async (data) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      console.log('DATA', data);
      await updateDoco(`members`, member.uid, data);
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: 'Your details have been updated.',
          duration: 1000,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AccountLayout>
      <Container>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h3" sx={{ mb: 0, mt: { xs: 2, md: 0 } }}>
            Personal Details
          </Typography>
          <Typography sx={{ pb: 0 }}>name and email as per registration</Typography>
          <Typography variant="caption" sx={{ py: 1 }}>
            set a preferred name via profile.
          </Typography>
          <Stack spacing={2.5}>
            <Box rowGap={2.5} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' }}>
              <RHFTextField name="displayName" label="Name" disabled />
              <RHFTextField name="phoneNumber" label="Mobile" />
            </Box>
            <Box rowGap={2.5} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}>
              <RHFTextField name="email" label="Email" disabled />
              <RHFTextField name="address.streetAddress" label="Address" />
            </Box>
            <Box rowGap={2.5} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' }}>
              <RHFTextField name="address.city" label="Suburb" />
              <RHFTextField name="address.state" label="State" />
              <RHFTextField name="address.postCode" label="Post Code " />
              <RHFTextField name="address.country" label="Country" disabled />
            </Box>
          </Stack>

          <Typography paragraph variant="h5" sx={{ my: 2 }}>
            Optional Details
          </Typography>
          <Box rowGap={2.5} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' }}>
            <RHFDatePicker name="birthday" label="Birthday" />
            <RHFSelect native name="gender" label="Gender">
              {GENDER_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </RHFSelect>
          </Box>

          <LoadingButton sx={{ my: 4 }} color="primary" size="large" type="submit" variant="contained" loading={isSubmitting}>
            Update Personal Details
          </LoadingButton>
        </FormProvider>
      </Container>
    </AccountLayout>
  );
}

// function OverviewItem({ icon, label, text = '-' }) {
//   return (
//     <Stack spacing={1.5} direction="row" alignItems="flex-start">
//       <Iconify icon={icon} width={24} />
//       <Stack spacing={0.5}>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           {label}
//         </Typography>
//         <Typography>{text}</Typography>
//       </Stack>
//     </Stack>
//   );
// }

// OverviewItem.propTypes = {
//   icon: PropTypes.node,
//   label: PropTypes.string,
//   text: PropTypes.string,
// };
