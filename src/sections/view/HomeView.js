// ----------------------------------------------------------------------
import HomeLanding from 'src/sections/home/HomeLanding';
import Posts from '../posts/Posts';
import RecentPosts from '../posts/RecentPosts';
import HomeMembership from 'src/sections//home/HomeMembership';
import HomeTender from 'src/sections//home/HomeTender';
// ----------------------------------------------------------------------

// recent uses fist 6
export default function HomeView({ staticPosts }) {
  return (
    <>
      <HomeLanding />
      <HomeTender />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
      <HomeMembership />
      <Posts staticPosts={staticPosts.slice(6)} />
    </>
  );
}
