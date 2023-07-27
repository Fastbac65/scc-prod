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
import { VenueHireView } from 'src/sections/view';

// ----------------------------------------------------------------------

VenueHire.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const q = query(collection(db, 'Posts'), orderBy('timestamp', 'desc'));
  const snapshot = await getDocs(q);
  const docs = [];

  // const datax = snapshot.docs.map((doc) => ({
  //   ...doc.data(),
  //   id: doc.id,
  //   timestamp: doc.data().timestamp?.toDate().getTime(),
  // }));

  snapshot.forEach((doc) => {
    docs.push({ id: doc.id, data: { ...doc.data(), timestamp: doc.data().timestamp?.toDate().getTime() } });
  });

  return {
    props: {
      staticPosts: docs,
    },
    revalidate: 2,
  };
}

// ----------------------------------------------------------------------

export default function VenueHire({ staticPosts }) {
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

      <VenueHireView staticPosts={staticPosts} />
    </>
  );
}
