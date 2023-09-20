// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { useSettingsContext } from 'src/components/settings';
// import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { VenueHireView } from 'src/sections/view';
import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

VenueHire.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const posts = await getPosts();
  // const members = await getMembers();
  return {
    props: {
      staticPosts: posts,
      title: 'SCC - Venue Hire',
      description:
        'Amazing location, stunning panoramic views of Curl Curl beach. We offer a unique venue, right on the beach, for parties, weddings, conferences, business meetings and other similar functions.',
      canonical: 'https:southcurlcurlslsc.com.au/venuehire',
      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function VenueHire({ staticPosts }) {
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

      <VenueHireView staticPosts={staticPosts} />
    </>
  );
}
