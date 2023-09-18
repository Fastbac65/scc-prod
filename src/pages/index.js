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
        {/* <title>South Curl Curl Surf Life Saving Club</title>
        <meta
          name="desription"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="South Curl Curl Surf Life Saving Club" />
        <meta
          property="og:description"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <meta property="og:url" content="https://southcurlcurlslsc.com.au/" />
        <meta property="og:site_name" content="South Curl Curl Surf Life Saving" />
        <meta property="og:image" content="https://southcurlcurlslsc.com.au/assets/images/scc-fb-grp.jpeg" />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="southcurlcurlslsc.com.au" />
        <meta property="twitter:url" content="https://southcurlcurlslsc.com.au" />
        <meta name="twitter:title" content="South Curl Curl Surf Life Saving Club" />
        <meta
          name="twitter:description"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <meta name="twitter:image" content="https://southcurlcurlslsc.com.au/assets/images/scc-fb-grp.jpeg" /> */}

        <title>South Curl Curl Surf Life Saving Club</title>
        <meta
          name="description"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />

        <meta property="og:url" content="https://southcurlcurlslsc.com.au" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="South Curl Curl Surf Life Saving Club" />
        <meta
          property="og:description"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <meta property="og:image" content="https://southcurlcurlslsc.com.au/assets/images/scc-fb-grp.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="southcurlcurlslsc.com.au" />
        <meta property="twitter:url" content="https://southcurlcurlslsc.com.au" />
        <meta name="twitter:title" content="South Curl Curl Surf Life Saving Club" />
        <meta
          name="twitter:description"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <meta name="twitter:image" content="https://southcurlcurlslsc.com.au/assets/images/scc-fb-grp.jpeg" />

        <link rel="canonical" href={host} />
        <link rel="alternate" media="only screen and (max-width: 640px)" href={host} />
      </Head>
      <HomeView staticPosts={staticPosts} />
    </>
  );
}
