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
      title: 'SCC - Nippers',
      description:
        'For over a century South Curly SLSC has excelled in providing excellence in life saving services. Our Nippers programs continue this legacy whilst having fun, every Sunday morning with over 400 little caps adorning our glorious beach.',
      canonical: 'https:southcurlcurlslsc.com.au/nippers',
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Nippers({ staticPosts }) {
  const { loading, host } = useSettingsContext();
  // if (loading) {
  //   return <LoadingScreen />;
  // }
  return <NippersView staticPosts={staticPosts} />;
}
