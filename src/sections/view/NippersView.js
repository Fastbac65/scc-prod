// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import NippersLanding from '../nippers/NippersLanding';
import NippersIntro from '../nippers/NippersIntro';
import NippersInformation from '../nippers/NippersInformation';
import NippersBooklet from '../nippers/NippersBooklet';
import NippersRippers from '../nippers/NippersRippers';
// ----------------------------------------------------------------------

export default function NippersView({ staticPosts }) {
  return (
    <>
      <NippersLanding />
      <NippersIntro />
      <NippersInformation />
      <NippersRippers />
      <NippersBooklet />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
