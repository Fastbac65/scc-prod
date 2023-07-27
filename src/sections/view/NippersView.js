// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import NippersLanding from '../nippers/NippersLanding';
// ----------------------------------------------------------------------

export default function NippersView({ staticPosts }) {
  return (
    <>
      <NippersLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
