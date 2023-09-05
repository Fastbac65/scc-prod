import { Box, Fade } from '@mui/material';
// import Options from './Options';
import PostExpandCard from './PostExpandCard';
import { useState } from 'react';
import PostsLightBox from './PostsLightBox';
import { useSettingsContext } from 'src/components/settings';

const SinglePostShare = ({ post }) => {
  const { user } = useSettingsContext();
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (!post) return;

  return (
    <Box component="section" sx={{ display: 'flex', justifyContent: 'center', pt: 10, mx: 0 }}>
      <Fade timeout={750} in={true}>
        <Box>
          <PostExpandCard user={user} doc={post} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} maxWidth={1000} />
        </Box>
      </Fade>
      <PostsLightBox open={open} setOpen={setOpen} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} images={images} />
    </Box>
  );
};
export default SinglePostShare;
