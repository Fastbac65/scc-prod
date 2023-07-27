import { Box, Typography } from '@mui/material';
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
    <div>
      <Box component="section" mx={1}>
        <Typography variant="h4" pt={1} mx={2}>
          Latest News & Activities
        </Typography>
        {/* <Typography variant="h6" color="text" m={2} mb={4}>
          ..from our members, boaties and nippers
        </Typography> */}
        <Box pr={{ xs: 0, sm: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Masonry /* sx={{ border: '1px dotted red' }} */ columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={{ xs: 1 }}>
            {posts.map((doc, indx) => (
              <PostExpandCard key={doc.id} user={user} doc={doc} setOpen={setOpen} setCurrentImageIndex={setCurrentImageIndex} setImages={setImages} />
            ))}
          </Masonry>
          <PostsLightBox open={open} setOpen={setOpen} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} images={images} />
        </Box>
      </Box>
    </div>
  );
};
export default PostsList;
