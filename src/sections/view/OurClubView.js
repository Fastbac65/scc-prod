// ----------------------------------------------------------------------
import { useSettingsContext } from 'src/components/settings';
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

export default function OurClubLandingView({ staticPosts }) {
  return (
    <>
      <OurClubLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
    </>
  );
}
