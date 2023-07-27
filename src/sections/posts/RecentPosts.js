import { Typography, alpha, styled } from '@mui/material';

import PostsList from './PostsList';

import { bgGradient } from 'src/lib/cssStyles';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.95),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

export default function RecentPosts({ staticPosts }) {
  return (
    <div>
      <StyledRoot>
        <Typography variant="h4" py={3} mx={2}>
          Recent News
        </Typography>
        <PostsList posts={staticPosts} />
      </StyledRoot>
    </div>
  );
}
