// ----------------------------------------------------------------------
import HomeLanding from 'src/sections/home/HomeLanding';
import Posts from '../posts/Posts';
import RecentPosts from '../posts/RecentPosts';
// ----------------------------------------------------------------------

// recent uses fist 6
export default function HomeView({ staticPosts }) {
  return (
    <>
      <HomeLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
      <Posts staticPosts={staticPosts.slice(6)} />
    </>
  );
}
