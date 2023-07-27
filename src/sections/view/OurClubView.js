// ----------------------------------------------------------------------
import { useSettingsContext } from 'src/components/settings';
import RecentPosts from '../posts/RecentPosts';
import OurClubLanding from '../ourclub/OurClubLanding';
import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

export default function OurClubLandingView({ staticPosts }) {
  const { posts } = useSettingsContext();
  const [allPosts, setAllPosts] = useState(staticPosts);

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
      <OurClubLanding />
      <RecentPosts posts={allPosts.slice(0, 6)} />
    </>
  );
}
