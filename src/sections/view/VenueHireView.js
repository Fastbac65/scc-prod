// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import VenueHireBooking from '../venuehire/VenueHireBooking';
import VenueHireLanding from '../venuehire/VenueHireLanding';
// ----------------------------------------------------------------------

export default function VenueHireView({ staticPosts }) {
  return (
    <>
      <VenueHireLanding />
      <VenueHireBooking />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
