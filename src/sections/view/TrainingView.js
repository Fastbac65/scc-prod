// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import TrainingLanding from 'src/sections/training/TrainingLanding';
import TrainingCalendar from 'src/sections/training/TrainingCalendar';
import TrainingARTFirstAid from 'src/sections/training/TrainingARTFirstAid';
import TrainingSRC from '../training/TrainingSRCBronze';
import TrainingIRB from '../training/TrainingIRB';
// ----------------------------------------------------------------------

export default function PatrolView({ staticPosts }) {
  return (
    <>
      <TrainingLanding />
      <TrainingSRC />
      <TrainingIRB />
      <TrainingARTFirstAid />
      <TrainingCalendar />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
