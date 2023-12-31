// ----------------------------------------------------------------------
import PatrolCalendar from '../patrol/PatrolCalendar';
import PatrolInformation from '../patrol/PatrolInfomation';
import RecentPosts from '../posts/RecentPosts';
import PatrolLanding from 'src/sections/patrol/PatrolLanding';
// ----------------------------------------------------------------------

export default function PatrolView({ staticPosts }) {
  return (
    <>
      <PatrolLanding />
      <PatrolInformation />
      <PatrolCalendar />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
