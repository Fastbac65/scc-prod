// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { HomeView } from 'src/sections/view/';
import { useSettingsContext } from 'src/components/settings';
import LoadingScreen from 'src/components/loading-screen/LoadingScreen';

import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const posts = await getPosts();
  // const members = await getMembers();
  return {
    props: {
      staticPosts: posts,
      title: 'South Curl Curl Surf Life Saving Home Page',
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

// Entry point to website content

export default function HomePage({ staticPosts, title }) {
  const { loading, host } = useSettingsContext();
  if (loading) {
    return <LoadingScreen />;
  }
  return <HomeView staticPosts={staticPosts} />;
}
