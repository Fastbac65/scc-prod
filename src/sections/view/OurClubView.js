// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
import OurClubMembership from '../ourclub/OurClubMembership';
import OurClubSponsor from '../ourclub/OurClubSponsor';
import OurClubCommitee from '../ourclub/OurClubCommittee';
import OurClubDocs from '../ourclub/OurClubDocs';
import OurClubLifeMembers from '../ourclub/OurClubLifeMembers';
import OurClubCafe from '../ourclub/OurClubCafe';
import OurClubMPIO from '../ourclub/OurClubMPIO';
import OurClubTraining from '../ourclub/OurClubTraining';
// ----------------------------------------------------------------------

export default function OurClubView({ staticPosts }) {
  return (
    <>
      <OurClubLanding />
      <OurClubSponsor />
      <OurClubMembership />
      {/* <OurClubMPIO /> */}
      <OurClubTraining />
      <OurClubCafe />
      <OurClubCommitee />
      <OurClubDocs />
      <OurClubLifeMembers />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
