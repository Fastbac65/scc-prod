// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import TrainingLanding from 'src/sections/training/TrainingLanding';
// ----------------------------------------------------------------------

export default function PatrolView({ staticPosts }) {
  return (
    <>
      <TrainingLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
