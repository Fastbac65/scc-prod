// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { useSettingsContext } from 'src/components/settings';
// import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { PatrolView } from 'src/sections/view';
import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

Patrol.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const posts = await getPosts();
  // const members = await getMembers();
  return {
    props: {
      staticPosts: posts,
      title: 'SCC - Patrols',
      description:
        'The South Curl Curl Surf Life Saving Patrols are provided by a volunteer organisation whose basic objective is to provide the highest possible level of water safety for our locals, visitors and nippers.',
      canonical: 'https:southcurlcurlslsc.com.au/patrol',
      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Patrol({ staticPosts }) {
  const { host } = useSettingsContext();
  // if (loading) {
  //   return <LoadingScreen />;

  // }
  return (
    <>
      <Head>
        <title>SCC SLSC - Our Club</title>
        <link rel="canonical" href={host} />
        <link rel="alternate" media="only screen and (max-width: 640px)" href={host} />
      </Head>

      <PatrolView staticPosts={staticPosts} />
    </>
  );
}
