// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
// ----------------------------------------------------------------------

export default function OurClubView({ staticPosts }) {
  return (
    <>
      <OurClubLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
