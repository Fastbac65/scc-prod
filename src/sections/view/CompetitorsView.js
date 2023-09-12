// ----------------------------------------------------------------------
import CompetitorsLanding from 'src/sections/competitors/CompetitorsLanding';
import CompetitorsBoaties from '../competitors/CompetitorsBoaties';
import CompetitorsBoatiesCrews from '../competitors/CompetitorsBoatiesCrews';
import CompetitorsChamps from '../competitors/CompetitorsChamps';
import CompetitorsCadets from '../competitors/CompetitorsCadets';
import RecentPosts from '../posts/RecentPosts';
// ----------------------------------------------------------------------

export default function VenueHireView({ staticPosts }) {
  return (
    <>
      <CompetitorsLanding />
      <CompetitorsBoaties />
      <CompetitorsBoatiesCrews />
      <CompetitorsChamps />
      <CompetitorsCadets />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
