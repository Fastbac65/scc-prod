import NextLink from 'next/link';

import { Box, Checkbox, Fab, Link, Stack, Tooltip, Typography, alpha, styled, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import NewPost from './NewPost';
import PostsList from './PostsList';
// import { Add, FacebookOutlined, Instagram } from '@mui/icons-material';
// import NewSocialPost from './uploadPost/NewSocialPost';
import Iconify from 'src/components/iconify/Iconify';
import { useSettingsContext } from 'src/components/settings';
import { bgGradient } from 'src/lib/cssStyles';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.65),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

export default function Posts({ posts }) {
  const theme = useTheme();
  const {
    user,
    member,
    dispatch,
    state: { modal },
  } = useSettingsContext();

  // const [files, setFiles] = useState([]);
  const [like, setLike] = useState(false);
  const [likePostDocs, setLikePostDocs] = useState([]);

  useEffect(() => {
    //
    console.log(member?.postLikes);
    if (member?.postLikes?.length > 0) {
      let likes = [];
      posts.forEach((doc) => {
        if (member?.postLikes.indexOf(doc.id) >= 0) {
          likes.push(doc);
        }
      });
      setLikePostDocs(likes);
      console.log('liked posts', likes);
    }
  }, [member, posts]);

  const handleFavsClick = () => {
    setLike(!like);
  };

  // const handleCreateSocialPost = (type) => {
  //   dispatch({
  //     type: 'MODAL',
  //     payload: { ...modal, open: true, title: 'Create Social Post', content: <NewSocialPost type={type} /> },
  //   });
  // };

  const handleCreatePost = () => {
    dispatch({ type: 'MODAL', payload: { ...modal, open: true, title: 'Create Post', content: <NewPost /> } });
  };
  // console.log(posts);

  return (
    <StyledRoot>
      <Box sx={{ pt: 2 }}>
        {user && (
          <Stack spacing={1} direction="row" sx={{ justifyContent: 'center' }}>
            <Tooltip arrow placement="top-start" title="add post" enterDelay={2000}>
              <Fab variant="extended" size="small" color="secondary" aria-label="edit" onClick={handleCreatePost}>
                {/* <Add /> */}
                <Iconify icon="mdi:plus" />
                Post
              </Fab>
            </Tooltip>
            {/* <Tooltip arrow placement="top-start" title="instagram post" enterDelay={2000}>
                  <Fab size="small" color="secondary" aria-label="edit" onClick={() => handleCreateSocialPost('Instagram')}>
                    <Instagram />
                  </Fab>
                </Tooltip>
                <Tooltip arrow placement="top-start" title="facebook post" enterDelay={2000}>
                  <Fab size="small" color="secondary" aria-label="edit" onClick={() => handleCreateSocialPost('Facebook')}>
                    <FacebookOutlined />
                  </Fab>
                </Tooltip> */}
            <Tooltip arrow placement="top-start" title="favourites" enterDelay={2000}>
              <Checkbox color="error" aria-label="add to favorites" checked={like} onChange={handleFavsClick} icon={<Iconify icon="carbon:favorite" />} checkedIcon={<Iconify icon="carbon:favorite-filled" />} />
            </Tooltip>
          </Stack>
        )}
      </Box>
      <Typography variant="h4" py={3} mx={2}>
        All News & Activities
      </Typography>
      {/* <Typography variant="h6" color="text" m={2} mb={4}>
          ..from our members, boaties and nippers
        </Typography> */}
      <PostsList posts={like ? likePostDocs : posts.slice(6)} />
    </StyledRoot>
  );
}
