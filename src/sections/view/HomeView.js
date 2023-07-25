// ----------------------------------------------------------------------
import HomeLanding from 'src/sections/home/HomeLanding';
import { useSettingsContext } from 'src/components/settings';
import Posts from '../posts/Posts';
// ----------------------------------------------------------------------

export default function HomeView({ staticPosts }) {
  const { posts } = useSettingsContext();

  console.log(staticPosts);

  return (
    <>
      <Posts posts={staticPosts} />
      <HomeLanding />
      <Posts posts={staticPosts} />
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
