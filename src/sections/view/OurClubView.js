// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
import OurClubMembership from '../ourclub/OurClubMembership';
// import OurClubTest from '../ourclub/OurClubTest';
import OurClubCommitee from '../ourclub/OurClubCommittee';
import OurClubCafe from '../ourclub/OurClubCafe';
import OurClubTraining from '../ourclub/OurClubTraining';
// ----------------------------------------------------------------------

export default function OurClubView({ staticPosts }) {
  return (
    <>
      <OurClubLanding />
      <OurClubMembership />
      <OurClubTraining />
      <OurClubCafe />
      <OurClubCommitee />
      {/* <OurClubTest /> */}
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
