// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
// ----------------------------------------------------------------------

export default function OurClubLandingView({ staticPosts }) {
  return (
    <>
      <OurClubLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
