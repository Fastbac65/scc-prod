// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import MembersLanding from 'src/sections/members/MembersLanding';
// ----------------------------------------------------------------------

export default function PatrolView({ staticPosts }) {
  return (
    <>
      <MembersLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
