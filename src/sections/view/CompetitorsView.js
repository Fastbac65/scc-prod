// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import CompetitorsLanding from 'src/sections/competitors/CompetitorsLanding';
// ----------------------------------------------------------------------

export default function VenueHireView({ staticPosts }) {
  return (
    <>
      <CompetitorsLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
