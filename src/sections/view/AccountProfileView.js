import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
// fb
import { db } from 'src/lib/createFirebaseApp';
import { ref, update } from 'firebase/database';
// @mui
import { LoadingButton } from '@mui/lab';
import { DatePicker } from '@mui/x-date-pickers';

import { Box, Typography, Stack, Container, Avatar, IconButton } from '@mui/material';
// assets
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField, RHFSelect } from 'src/components/hook-form';
//
import { useSettingsContext } from 'src/components/settings';

import { AccountLayout } from '../layout';
import { updateDoco } from 'src/lib/firestoreDocument';

// ----------------------------------------------------------------------

const patrol = [
  '',
  'Patrol 1',
  'Patrol 2',
  'Patrol 3',
  'Patrol 4',
  'Patrol 5',
  'Patrol 6',
  'Patrol 7',
  'Patrol 8',
  'Patrol 9',
  'Patrol 10',
  'Patrol 11',
  'Patrol 12',
  'Patrol 13',
  'Patrol A',
  'Patrol B',
  'Patrol C',
  'Patrol D',
  'Patrol E',
  'Patrol F',
  'Patrol G',
  'Patrol H',
  'Patrol I',
  'Patrol J',
  'Patrol L',
  'Patrol M',
  'Patrol N',
];

// ----------------------------------------------------------------------

export default function AccountPersonalView() {
  const {
    member,
    dispatch,
    state: { alert },
  } = useSettingsContext();

  const AccountPersonalSchema = Yup.object().shape({
    profileName: Yup.string(),
    patrol: Yup.string(),
    password: Yup.string(),
  });
  // safe defaults and necessary so that useEffect works properly to reset
  const defaultValues = {
    profileName: '',
    password: '',
    patrol: '',
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
    const resetValues = {
      profileName: member?.profileName || member.displayName || '',
      password: '',
      patrol: member?.patrol || '',
    };
    reset(resetValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member]);

  const handleProfile = async () => {
    // pick a profile pic from /assets/images/avatar/avatar_x
    const pic = Math.floor(Math.random() * 25);
    await updateDoco('members', member.uid, { photoURL: `/assets/images/avatar/avatar_${pic}.jpg` });
  };

  const onSubmit = async (data) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      console.log('DATA', data);
      // await updateDoco(`members`, member.uid, data);
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: 'Your details have been updated.',
          duration: 1000,
          posn: 'bottom',
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
          <Typography variant="h3" sx={{ mb: 0 }}>
            Update Profile
          </Typography>
          <Typography sx={{ pb: 3 }}>Email as per member registration</Typography>
          <Stack spacing={2.5}>
            <Box rowGap={2.5} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' }}>
              <Stack direction="row" alignItems="center">
                <Avatar src={member.photoURL} sx={{ width: 80, height: 80 }} />
                <Stack direction="row" alignItems="center" sx={{ typography: 'caption', '&:hover': { opacity: 0.65 } }}>
                  <IconButton onClick={handleProfile} sx={{ color: 'inherit' }}>
                    <Iconify icon="mdi:edit" sx={{ mr: 1 }} />
                  </IconButton>
                  lucky pic
                </Stack>
              </Stack>
              <RHFTextField name="profileName" label="Preferred Name" />
            </Box>
            <Box rowGap={2.5} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' }}></Box>
            <RHFSelect native name="patrol" label="Your Patrol">
              {patrol.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </RHFSelect>
            <RHFTextField name="password" label="Password" />
            <Typography variant="caption" sx={{ pb: 3 }}>
              Your password is required to update. If you authenticated via social then we will reauthenticate same
            </Typography>
          </Stack>

          <LoadingButton sx={{ my: 4 }} color="primary" size="large" type="submit" variant="contained" loading={isSubmitting}>
            Update Profile
          </LoadingButton>
        </FormProvider>
      </Container>
    </AccountLayout>
  );
}

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={1.5} direction="row" alignItems="flex-start">
      <Iconify icon={icon} width={24} />
      <Stack spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
        <Typography>{text}</Typography>
      </Stack>
    </Stack>
  );
}

// OverviewItem.propTypes = {
//   icon: PropTypes.node,
//   label: PropTypes.string,
//   text: PropTypes.string,
// };
