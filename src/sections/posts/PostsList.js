import { Box, Fade, Stack, Grid2 as Grid } from '@mui/material';
// import Options from './Options';
import PostExpandCard from './PostExpandCard';
import { Masonry } from '@mui/lab';
import { useState } from 'react';
import PostsLightBox from './PostsLightBox';
import { useSettingsContext } from 'src/components/settings';

const PostsList = ({ posts }) => {
  const { user } = useSettingsContext();
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (!posts) return;

  return (
    <Box component="section" sx={{ mx: 0 }}>
      <Fade timeout={750} in={true}>
        <Box pr={{ xs: 0, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={{ xs: 1 }}>
            {posts.map((doc, indx) => (
              <PostExpandCard key={doc.id} user={user} doc={doc} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} />
            ))}
          </Masonry>
          <PostsLightBox open={open} setOpen={setOpen} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} images={images} />
        </Box>
      </Fade>
    </Box>
  );
};
export default PostsList;
