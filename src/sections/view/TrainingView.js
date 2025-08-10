// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import TrainingLanding from 'src/sections/training/TrainingLanding';
import TrainingCalendar from 'src/sections/training/TrainingCalendar';
import TrainingARTFirstAid from 'src/sections/training/TrainingARTFirstAid';
import TrainingSRCBronze from '../training/TrainingSRCBronze';
import TrainingIRB from '../training/TrainingIRB';

import useOffSetTop from 'src/hooks/useOffSetTop';

// ----------------------------------------------------------------------

export default function TrainingView({ staticPosts }) {
  // const loadRecentPosts = useOffSetTop(700);
  console.log(loadRecentPosts);
  console.log(staticPosts);
  return (
    <>
      <TrainingLanding />
      <TrainingSRCBronze />
      <TrainingIRB />
      <TrainingARTFirstAid />
      <TrainingCalendar />
      {/* {loadRecentPosts && <RecentPosts staticPosts={staticPosts.slice(0, 6)} />} */}
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
