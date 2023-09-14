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

  const odd = posts.filter((post, indx) => {
    if (indx % 2) return false;
    return true;
  });
  console.log(odd, posts.length);

  return (
    <Box component="section" sx={{ mx: 0 }}>
      <Fade timeout={750} in={true}>
        <Box>
          {/* <Box sx={{ p: 1 }} columnGap={1} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}>
            <Stack>
              {posts
                .filter((post, indx) => {
                  if (indx % 2) return false;
                  return true;
                })
                .map((doc, indx) => (
                  <Box key={doc.id} sx={{ py: 0.5 }}>
                    <PostExpandCard key={doc.id} user={user} doc={doc} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} />
                  </Box>
                ))}
            </Stack>
            <Stack>
              {posts
                .filter((post, indx) => {
                  if (indx % 2) return true;
                  return false;
                })
                .map((doc, indx) => (
                  <Box key={doc.id} sx={{ py: 0.5 }}>
                    <PostExpandCard key={doc.id} user={user} doc={doc} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} />
                  </Box>
                ))}
            </Stack>
          </Box> */}
          <Box pr={{ xs: 0, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={{ xs: 1 }}>
              {posts.map((doc, indx) => (
                <PostExpandCard key={doc.id} user={user} doc={doc} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} />
              ))}
            </Masonry>
            <PostsLightBox open={open} setOpen={setOpen} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} images={images} />
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};
export default PostsList;
