// ----------------------------------------------------------------------
import VenueHireLanding from '../venuehire/VenueHireLanding';
import VenueHireDetails from '../venuehire/VenueHireDetails';
import VenueHireBooking from '../venuehire/VenueHireBooking';
import VenueHireCalendar from '../venuehire/VenueHireCalendar';
import RecentPosts from '../posts/RecentPosts';
// ----------------------------------------------------------------------

export default function VenueHireView({ staticPosts }) {
  return (
    <>
      <VenueHireLanding />
      <VenueHireDetails />
      <VenueHireBooking />
      <VenueHireCalendar />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
