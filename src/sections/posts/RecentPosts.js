import { Typography, alpha, styled } from '@mui/material';

import PostsList from './PostsList';

import { bgGradient } from 'src/lib/cssStyles';
import { useSettingsContext } from 'src/components/settings';
import { useState } from 'react';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.95),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

export default function RecentPosts({ staticPosts }) {
  const { posts } = useSettingsContext();
  const [allRecent, setAllRecent] = useState(staticPosts);

  useEffect(() => {
    if (!posts) {
      console.log('no posts');
      return;
    } else {
      setAllRecent([...posts.slice(0, 6)]);
      console.log('recent realtime posts loaded', posts);
    }
  }, [posts]);

  return (
    <div>
      <StyledRoot>
        <Typography variant="h4" py={3} mx={2}>
          Recent News
        </Typography>
        <PostsList posts={allRecent} />
      </StyledRoot>
    </div>
  );
}
