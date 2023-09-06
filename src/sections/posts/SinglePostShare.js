import { Box, Fade, Typography } from '@mui/material';
// import Options from './Options';
// import PostExpandCard from './PostExpandCard';
import SinglePostCard from './SinglePostCard';
import { useEffect, useState } from 'react';
import PostsLightBox from './PostsLightBox';
import { useSettingsContext } from 'src/components/settings';

const SinglePostShare = ({ post }) => {
  const [realtimePost, setRealtimePost] = useState(post);

  const { user, posts } = useSettingsContext();
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!posts) {
      console.log('SinglePostShare - no posts');
      return;
    } else {
      setRealtimePost(posts.filter((doc) => doc.id === post.id)[0]);
      console.log('SinglePostShare - set', posts.filter((doc) => doc.id === post.id)[0]);
    }
  }, [posts, post.id]);

  if (!post.id)
    return (
      <Box sx={{ pt: 10 }}>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          It seems this post no longer exists
        </Typography>
      </Box>
    );

  return (
    <Box component="section" sx={{ display: 'flex', justifyContent: 'center', pt: 10, mx: 0 }}>
      <Fade timeout={750} in={true}>
        <Box sx={{ width: { xs: '99vw', sm: '55vw', md: '45vw' } }}>
          <SinglePostCard user={user} doc={realtimePost} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} maxWidth={1000} />
          {/* <PostExpandCard user={user} doc={post} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} maxWidth={1000} /> */}
        </Box>
      </Fade>
      <PostsLightBox open={open} setOpen={setOpen} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} images={images} />
    </Box>
  );
};
export default SinglePostShare;
