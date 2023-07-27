import { Box, Fab, Stack, Tooltip, Typography, alpha, styled } from '@mui/material';

import PostsList from './PostsList';

import { bgGradient } from 'src/lib/cssStyles';
import { useSettingsContext } from 'src/components/settings';
import { useEffect, useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';
import NewPost from './NewPost';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.98),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

export default function RecentPosts({ staticPosts }) {
  const {
    user,
    posts,
    dispatch,
    state: { modal },
  } = useSettingsContext();
  const [allRecent, setAllRecent] = useState(staticPosts);

  useEffect(() => {
    if (!posts) {
      console.log('no posts');
      return;
    } else {
      setAllRecent([...posts.slice(0, 6)]);
      console.log('recent realtime posts loaded', posts.slice(0, 6));
    }
  }, [posts]);

  const handleCreatePost = () => {
    dispatch({ type: 'MODAL', payload: { ...modal, open: true, title: 'Create Post', content: <NewPost /> } });
  };

  return (
    <div>
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
            </Stack>
          )}
        </Box>
        <Typography variant="h4" py={3} mx={2}>
          Recent News
        </Typography>
        <PostsList posts={allRecent} />
      </StyledRoot>
    </div>
  );
}
