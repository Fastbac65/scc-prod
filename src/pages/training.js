// next
import Head from 'next/head';

// layouts
import MainLayout from 'src/layouts/main';
// sections
import { useSettingsContext } from 'src/components/settings';
// import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { TrainingView } from 'src/sections/view';
import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

Training.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const posts = await getPosts();
  // const members = await getMembers();
  return {
    props: {
      staticPosts: posts,
      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Training({ staticPosts }) {
  const { host } = useSettingsContext();
  // if (loading) {
  //   return <LoadingScreen />;
  // }
  return (
    <>
      <Head>
        <title>SCC SLSC - Our Club</title>
        <link rel="canonical" href={`${host}/training`} />
        <link rel="alternate" media="only screen and (max-width: 640px)" href={`${host}/training`} />
      </Head>

      <TrainingView staticPosts={staticPosts} />
    </>
  );
}
