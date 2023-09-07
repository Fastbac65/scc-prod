// next
import Head from 'next/head';
// fb
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from 'src/lib/createFirebaseApp';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { useSettingsContext } from 'src/components/settings';
// import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { NippersView } from 'src/sections/view';
import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

Nippers.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const posts = await getPosts();
  // const members = await getMembers();

  return {
    props: {
      staticPosts: posts,
    },
    revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Nippers({ staticPosts }) {
  const { loading, host } = useSettingsContext();
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

      <NippersView staticPosts={staticPosts} />
    </>
  );
}
