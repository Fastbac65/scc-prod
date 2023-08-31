// ----------------------------------------------------------------------
import CompetitorsBoaties from '../competitors/CompetitorsBoaties';
import CompetitorsChamps from '../competitors/CompetitorsChamps';
import RecentPosts from '../posts/RecentPosts';
import CompetitorsLanding from 'src/sections/competitors/CompetitorsLanding';
// ----------------------------------------------------------------------

export default function VenueHireView({ staticPosts }) {
  return (
    <>
      <CompetitorsLanding />
      <CompetitorsBoaties />
      <CompetitorsChamps />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
