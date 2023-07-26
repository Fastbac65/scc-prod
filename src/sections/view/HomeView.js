// ----------------------------------------------------------------------
import HomeLanding from 'src/sections/home/HomeLanding';
import { useSettingsContext } from 'src/components/settings';
import Posts from '../posts/Posts';
import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

export default function HomeView({ staticPosts }) {
  const { posts } = useSettingsContext();
  const [allPosts, setAllPosts] = useState([...staticPosts]);

  useEffect(() => {
    if (!posts) {
      console.log('no posts');
      return;
    } else {
      setAllPosts([...posts]);
      console.log('posts loaded', posts);
    }
  }, [posts]);

  return (
    <>
      <HomeLanding />
      <Posts posts={allPosts} />
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
