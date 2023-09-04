// ----------------------------------------------------------------------
import CompetitorsCadets from '../competitors/CompetitorsCadets';
import PatrolInformation from '../patrol/PatrolInfomation';
import RecentPosts from '../posts/RecentPosts';
import PatrolLanding from 'src/sections/patrol/PatrolLanding';
// ----------------------------------------------------------------------

export default function PatrolView({ staticPosts }) {
  return (
    <>
      <PatrolLanding />
      <PatrolInformation />
      <CompetitorsCadets />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
