// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import PatrolLanding from 'src/sections/patrol/PatrolLanding';
// ----------------------------------------------------------------------

export default function PatrolView({ staticPosts }) {
  return (
    <>
      <PatrolLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
