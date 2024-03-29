import { Box, Fade, Typography, alpha, styled } from '@mui/material';
// import Options from './Options';
// import PostExpandCard from './PostExpandCard';
import SinglePostCard from './SinglePostCard';
import { useEffect, useState } from 'react';
import PostsLightBox from './PostsLightBox';
import { useSettingsContext } from 'src/components/settings';
import { bgGradient } from 'src/lib/cssStyles';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.95),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

const SinglePostShare = ({ post }) => {
  const [realtimePost, setRealtimePost] = useState(post);

  const { user, posts } = useSettingsContext();
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!posts) {
      setRealtimePost(post);
      return;
    } else {
      setRealtimePost(posts.filter((doc) => doc.id === post?.id)[0]);
    }
  }, [posts, post]);

  if (!post?.id)
    return (
      <Box sx={{ pt: 10 }}>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          It seems this post no longer exists
        </Typography>
      </Box>
    );

  return (
    <StyledRoot>
      <Box component="section" sx={{ display: 'flex', justifyContent: 'center', pt: 10, pb: 6, mx: 0 }}>
        <Fade timeout={750} in={true}>
          <Box sx={{ width: { xs: '99vw', sm: '55vw', md: '50vw' } }}>
            <SinglePostCard user={user} doc={realtimePost} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} maxWidth={1500} />
            {/* <PostExpandCard user={user} doc={post} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} maxWidth={1000} /> */}
          </Box>
        </Fade>
        <PostsLightBox open={open} setOpen={setOpen} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} images={images} />
      </Box>
    </StyledRoot>
  );
};
export default SinglePostShare;
