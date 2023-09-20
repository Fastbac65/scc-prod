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
      title: 'South Curl Curl Surf Life Saving Club',
      description:
        'South Curl Curl Surf Life Saving Club has been in existence since 1918 and no lives have been lost whilst the beach has been patrolled. The Club places great emphasis on training club members in life saving skills to ensure this tradition is maintained. The South Curl Curl Surf Life Saving Club is a volunteer organisation whose basic objective is to provide the highest possible level of water safety for our locals, visitors and nippers.',
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

// Entry point to website content

export default function HomePage({ staticPosts }) {
  const { loading, host } = useSettingsContext();
  if (loading) {
    return <LoadingScreen />;
  }
  return <HomeView staticPosts={staticPosts} />;
}
