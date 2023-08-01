// ----------------------------------------------------------------------
import RecentPosts from '../posts/RecentPosts';
import VenueHireBooking from '../venuehire/VenueHireBooking';
import VenueHireLanding from '../venuehire/VenueHireLanding';
import VenueHireCalendar from '../venuehire/VenueHireCalendar';
// ----------------------------------------------------------------------

export default function VenueHireView({ staticPosts }) {
  return (
    <>
      <VenueHireLanding />
      <VenueHireBooking />
      <VenueHireCalendar />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
