// ----------------------------------------------------------------------
import HomeLanding from 'src/sections/home/HomeLanding';
import Posts from '../posts/Posts';
import RecentPosts from '../posts/RecentPosts';
import HomeMembership from '../home/HomeMembership';
// ----------------------------------------------------------------------

// recent uses fist 6
export default function HomeView({ staticPosts }) {
  return (
    <>
      <HomeLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
      <HomeMembership />
      <Posts staticPosts={staticPosts.slice(6)} />
    </>
  );
}
