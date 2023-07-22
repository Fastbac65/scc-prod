import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
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
  const [needPassword, setNeedPassword] = useState(true);

  const {
    member,
    dispatch,
    state: { alert },
  } = useSettingsContext();

  const AccountProfileSchema = Yup.object().shape({
    profileName: Yup.string(),
    patrol: Yup.string(),
    password: Yup.string().required('Password is required to update your profile'),
  });
  // safe defaults and necessary so that useEffect works properly to reset
  const defaultValues = {
    profileName: '',
    password: '',
    patrol: '',
  };
  const methods = useForm({
    resolver: yupResolver(AccountProfileSchema),
    defaultValues,
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (!member) {
      console.log('no member yet!');
      return;
    }
    const resetValues = {
      profileName: member?.profileName || member.displayName || '',
      password: '',
      patrol: member?.patrol || '',
    };
    reset(resetValues);
    console.log('member useEffect', member);
    if (member.providerData[0].providerId !== 'password') setNeedPassword(false);
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
          <Typography variant="h3" sx={{ mb: 0, mt: { xs: 2, md: 0 } }}>
            Update Profile
          </Typography>
          <Typography variant="body2" sx={{ pb: 3 }}>
            Ckick on avatar/photo to upload a photo or go with a lucky pic
          </Typography>
          <Stack spacing={2.5}>
            <Box rowGap={2.5} columnGap={2} alignItems="center" display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}>
              <Stack direction="row" alignItems="center">
                <Avatar src={member?.photoURL} sx={{ width: 80, height: 80 }} />
                <Stack direction="row" alignItems="center" sx={{ typography: 'caption', '&:hover': { opacity: 0.65 } }}>
                  <IconButton onClick={handleProfile} sx={{ color: 'inherit', mx: 1 }}>
                    <Iconify icon="mdi:edit" />
                  </IconButton>
                  lucky pic
                </Stack>
              </Stack>
            </Box>
            <Box rowGap={2.5} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' }}>
              <RHFTextField name="profileName" label="Preferred Name" />
              <RHFSelect native name="patrol" label="Your Patrol">
                {patrol.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </RHFSelect>
            </Box>
            {needPassword && <RHFTextField name="password" label="Password" />}
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
