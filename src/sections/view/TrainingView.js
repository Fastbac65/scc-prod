// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import TrainingLanding from 'src/sections/training/TrainingLanding';
import TrainingInformation from 'src/sections/training/TrainingInformation';
import TrainingCalendar from 'src/sections/training/TrainingCalendar';
// ----------------------------------------------------------------------

export default function PatrolView({ staticPosts }) {
  return (
    <>
      <TrainingLanding />
      <TrainingInformation />
      <TrainingCalendar />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
