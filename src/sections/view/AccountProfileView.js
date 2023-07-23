import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Typography, Stack, Container, Avatar, IconButton, CircularProgress, Input } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField, RHFSelect } from 'src/components/hook-form';
//
import { useSettingsContext } from 'src/components/settings';

import { AccountLayout } from '../layout';
import { updateDoco } from 'src/lib/firestoreDocument';
import resizeImage from 'src/lib/resizeImage';
import uploadFile from 'src/lib/uploadFile';

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
    user,
    dispatch,
    state: { alert },
  } = useSettingsContext();

  // const [needPassword, setNeedPassword] = useState(true);
  const [photoURL, setPhotoURL] = useState(null);
  var resizedImg = useRef({});
  const fileRef = useRef();

  const AccountProfileSchema = Yup.object().shape({
    profileName: Yup.string(),
    patrol: Yup.string(),
  });
  // safe defaults and necessary so that useEffect works properly to reset
  const defaultValues = {
    profileName: '',
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
  // init form and needPassword once 'member' is loaded
  useEffect(() => {
    if (!member) {
      console.log('no member yet!');
      return;
    }
    const resetValues = {
      profileName: member?.profileName || member.displayName,
      patrol: member?.patrol || '',
    };
    reset(resetValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member]);

  const handleLuckyPic = async () => {
    // pick a profile pic from /assets/images/avatar/avatar_x
    setPhotoURL(null); // displays member.photoURL
    const pic = Math.floor(Math.random() * 25);
    await updateDoco('members', member.uid, { photoURL: `/assets/images/avatar/avatar_${pic}.jpg` });
  };

  // getting the new profile image file if one is selected
  const handleChange = async (e) => {
    const img = e.target.files[0];
    if (img) {
      resizedImg.current = await resizeImage(img, 90, 300);
      setPhotoURL(URL.createObjectURL(img)); // updates the screen
    }
  };

  const handleClick = () => {
    fileRef.current.value = null; //  reset input so same file can be picked after lucky pic
  };

  const onSubmit = async (data) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 500));
      const memberProfile = { profileName: data.profileName, patrol: data.patrol, photoURL: member.photoURL, socialURL: '' };
      if (photoURL) {
        const url = await uploadFile(resizedImg.current.blob, `members/${member.uid}/profile.jpeg`);
        memberProfile.photoURL = url;
        if (user.providerData[0].providerId !== 'password') memberProfile.socialURL = url; // de-sync social login with social URL etc
        // <Avatar/> preference socialURL if it exists
      }
      await updateDoco(`members`, member.uid, memberProfile);
      setTimeout(() => setPhotoURL(null), 4000); // clear so we dont keep uploading after first upload
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          ...alert,
          open: true,
          severity: 'success',
          message: 'Your details have been updated.',
          duration: 1500,
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
          {user.providerData[0].providerId !== 'password' && (
            <Typography variant="body2" sx={{ pb: 3 }}>
              Click on photo to update
            </Typography>
          )}
          {user.providerData[0].providerId === 'password' && (
            <Typography variant="body2" sx={{ pb: 3 }}>
              Click on avatar/photo to update or go with a quik pic
            </Typography>
          )}
          <Stack spacing={2.5}>
            <Box rowGap={2.5} columnGap={2} alignItems="center" display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}>
              <Stack direction="row" alignItems="center">
                <label htmlFor="profilePhoto">
                  <Input inputRef={fileRef} inputProps={{ accept: 'image/*' }} id="profilePhoto" type="file" style={{ display: 'none' }} onClick={handleClick} onChange={handleChange} />
                  <Avatar src={photoURL || member?.socialURL || member?.photoURL} sx={{ width: 80, height: 80, cursor: 'pointer' }} />
                </label>

                {user?.providerData[0].providerId === 'password' && (
                  <Stack direction="row" alignItems="center" sx={{ typography: 'caption', '&:hover': { opacity: 0.65 } }}>
                    <IconButton onClick={handleLuckyPic} sx={{ color: 'inherit', mx: 1 }}>
                      <Iconify icon="mdi:edit" />
                    </IconButton>
                    quik pic
                  </Stack>
                )}
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
            {/* {needPassword && <RHFTextField name="password" label="Password" />} */}
          </Stack>

          <LoadingButton sx={{ my: 4 }} color="primary" size="large" type="submit" variant="contained" loading={isSubmitting} loadingIndicator={<CircularProgress color="primary" size={24} />}>
            Update Profile
          </LoadingButton>
          {user?.providerData[0].providerId !== 'password' && (
            <>
              <Typography variant="body2">Updates South Curl Curl website profile only.</Typography>
              <Typography variant="body2" sx={{ pb: 3 }}>
                Overrides sync with social profile photo if you update photo.
              </Typography>
            </>
          )}
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
