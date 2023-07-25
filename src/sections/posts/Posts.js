import { Box, Fab, Stack, Tooltip, useTheme } from '@mui/material';
import { useState } from 'react';
import NewPost from './NewPost';
import PostsList from './PostsList';
// import { Add, FacebookOutlined, Instagram } from '@mui/icons-material';
// import NewSocialPost from './uploadPost/NewSocialPost';
import scc1 from 'src/assets/images/scc-fb-grp.jpeg';
import Iconify from 'src/components/iconify/Iconify';
import { useSettingsContext } from 'src/components/settings';

export default function Posts({ posts }) {
  const theme = useTheme();
  const {
    user,
    dispatch,
    state: { modal },
  } = useSettingsContext();

  // const [files, setFiles] = useState([]);
  const [like, setLike] = useState('');
  const [likePostDocs, setLikePostDocs] = useState([]);

  // useEffect(() => {
  //   //
  // }, [user?.uPostLikes?.length]);

  const handleFavsClick = () => {
    if (like === 'red') setLike('');
    else setLike('red');

    console.log(user?.uPostLikes);
    if (user?.uPostLikes?.length > 0) {
      let likes = [];
      posts.forEach((doc) => {
        if (user?.uPostLikes.indexOf(doc.id) >= 0) {
          likes.push(doc);
        }
      });
      setLikePostDocs(likes);
      console.log('liked posts', likes);
    }
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
    <div>
      {/* <Box sx={{ backgroundImage: `url(${scc1}) `, backgroundSize: 'cover' }}>
        <Box sx={{ background: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)' }}>
          <Box>
            <Outlet context={[posts]} />
          </Box>
        </Box>
      </Box> */}
      <Box sx={{ backgroundImage: `url(${scc1}) `, backgroundSize: 'cover', minHeight: 800 }}>
        <Box
          sx={{
            background: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.5)',
            minHeight: 800,
          }}
        >
          <Box sx={{ pt: 1 }}>
            {user && (
              <Stack spacing={1} direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tooltip arrow placement="top-start" title="home" enterDelay={2000}>
                  <Fab size="small" color="primary" aria-label="add">
                    {/* <HomeIcon /> */}
                    <Iconify icon="mdi:home" />
                  </Fab>
                </Tooltip>
                <Tooltip arrow placement="top-start" title="add post" enterDelay={2000}>
                  <Fab size="small" color="secondary" aria-label="edit" onClick={handleCreatePost}>
                    {/* <Add /> */}
                    <Iconify icon="mdi:plus" />
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
                {/* <Tooltip arrow placement="top-start" title="favourites" enterDelay={2000}>
                  <Fab color="secondary" id="favourite" size="small" aria-label="like" onClick={handleFavsClick}>
                    <FavoriteIcon sx={{ color: like }} />
                  </Fab>
                </Tooltip> */}
              </Stack>
            )}
            <PostsList
              posts={like === '' ? posts : likePostDocs}
              // posts={posts}
            />

            {/* <ContentCardMasonryPosts /> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
