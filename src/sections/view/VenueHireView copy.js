// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import VenueHireLanding from '../venuehire/VenueHireLanding';
// ----------------------------------------------------------------------

export default function VenueHireView({ staticPosts }) {
  return (
    <>
      <VenueHireLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
