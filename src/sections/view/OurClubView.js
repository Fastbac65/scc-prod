// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
import OurClubMembership from '../ourclub/OurClubMembership';
import OurClubTest from '../ourclub/OurClubTest';
// ----------------------------------------------------------------------

export default function OurClubView({ staticPosts }) {
  return (
    <>
      <OurClubLanding />
      <OurClubMembership />
      {/* <OurClubTest /> */}
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
