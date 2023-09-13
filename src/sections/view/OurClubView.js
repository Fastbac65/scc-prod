// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
import OurClubMembership from '../ourclub/OurClubMembership';
// import OurClubTest from '../ourclub/OurClubTest';
import OurClubCommitee from '../ourclub/OurClubCommittee';
// ----------------------------------------------------------------------

export default function OurClubView({ staticPosts }) {
  return (
    <>
      <OurClubLanding />
      <OurClubMembership />
      <OurClubCommitee />
      {/* <OurClubTest /> */}
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
