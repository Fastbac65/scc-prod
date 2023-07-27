// ----------------------------------------------------------------------
import HomeLanding from 'src/sections/home/HomeLanding';
import Posts from '../posts/Posts';
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
// ----------------------------------------------------------------------

export default function HomeView({ staticPosts }) {
  return (
    <>
      {/* <OurClubLanding /> */}
      <HomeLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
      <Posts staticPosts={staticPosts.slice(6)} />
    </>
  );
}
