// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { useSettingsContext } from 'src/components/settings';
// import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { CompetitorsView } from 'src/sections/view';
import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

Competitors.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const posts = await getPosts();
  // const members = await getMembers();
  return {
    props: {
      staticPosts: posts,
      title: 'SCC - Competitors',
      description:
        'Our competitors at South Curl Curl SLSC share a unified mission: To excel in the waters, on the sand, and beyond. We commit to relentless training, unwavering dedication, and embodying the values of lifesaving.',
      canonical: 'https:southcurlcurlslsc.com.au/competitors',
      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Competitors({ staticPosts }) {
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

      <CompetitorsView staticPosts={staticPosts} />
    </>
  );
}
