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
      // staticMembers: members,
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
  return (
    <>
      <Head>
        <title>Home - South Curl Curl Surf Life Saving</title>
        <meta
          name="desription"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <link rel="canonical" href={host} />
        <link rel="alternate" media="only screen and (max-width: 640px)" href={host} />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Home - Surf Life Saving"></meta>
        <meta
          property="og:description"
          content="Home - South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        ></meta>
        <meta property="og:url" content="https://southcurlcurlslsc.com.au/"></meta>
        <meta property="og:site_name" content="South Curl Curl Surf Life Saving"></meta>
        <meta property="og:image" content="https://southcurlcurlslsc.com.au/assets/images/scc-fb-grp.jpeg"></meta>
      </Head>
      <HomeView staticPosts={staticPosts} />
    </>
  );
}
