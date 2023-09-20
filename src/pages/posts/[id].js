// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { PostsView } from 'src/sections/view/';
import { useSettingsContext } from 'src/components/settings';
import LoadingScreen from 'src/components/loading-screen/LoadingScreen';

import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

SinglePost.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps(context) {
  const posts = await getPosts();
  const post = posts.filter((post) => post.id === context.params.id);
  return {
    props: {
      staticPosts: posts,
      staticPost: post.length ? post[0] : {},
      // staticPost: post.length ? posts.filter((post) => post.id === context.params.id)[0] : {},
      title: post[0].data.title,
      description: 'South Curl Curl Surf Life Saving Club shared post',
      canonical: `https:southcurlcurlslsc.com.au/posts/${post[0].id}`,
      image: post[0].data.images[0].src,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  // const members = await getMembers();
  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    fallback: true,
  };
}

// ----------------------------------------------------------------------

// Entry point to website content

export default function SinglePost({ staticPosts, staticPost }) {
  const { loading, host } = useSettingsContext();
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <Head>
        <title>South Curl Curl Surf Life Saving Club</title>
        <link rel="canonical" href={host} />
        <link rel="alternate" media="only screen and (max-width: 640px)" href={host} />
      </Head>
      <PostsView staticPosts={staticPosts} staticPost={staticPost} />
    </>
  );
}
