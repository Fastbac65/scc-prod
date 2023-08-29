// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import NippersLanding from '../nippers/NippersLanding';
import NippersIntro from '../nippers/NippersIntro';
// ----------------------------------------------------------------------

export default function NippersView({ staticPosts }) {
  return (
    <>
      <NippersLanding />
      <NippersIntro />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
