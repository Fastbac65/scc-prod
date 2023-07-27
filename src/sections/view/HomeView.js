// ----------------------------------------------------------------------
import HomeLanding from 'src/sections/home/HomeLanding';
import { useSettingsContext } from 'src/components/settings';
import Posts from '../posts/Posts';
import RecentPosts from '../posts/RecentPosts';
import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

export default function HomeView({ staticPosts }) {
  return (
    <>
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
      <HomeLanding />
      <RecentPosts staticPosts={staticPosts.slice(0, 6)} />
      <Posts staticPosts={staticPosts.slice(6)} />
      {/* <HomeHero />
      <HomeGuidedMeditation />
      <HomeBanner />
      <HomeFamous />
      <HomeFAQs />
      <LatestPosts posts={insights} /> */}
      {/* <LatestPosts posts={insights.slice(0, 4)} /> */}
      {/* <TestFooter /> */}
    </>
  );
}
