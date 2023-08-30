// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import NippersLanding from '../nippers/NippersLanding';
import NippersIntro from '../nippers/NippersIntro';
import NippersInformation from '../nippers/NippersInformation';
import NippersTopImgLrg from '../nippers/NippersTopImgLrg';
// ----------------------------------------------------------------------

export default function NippersView({ staticPosts }) {
  return (
    <>
      <NippersLanding />
      <NippersIntro />
      <NippersInformation />
      <NippersTopImgLrg />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
