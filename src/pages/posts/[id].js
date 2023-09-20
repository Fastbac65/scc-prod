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
  var tempDiv = document.createElement('div');
  tempDiv.innerHTML = post.data?.content;
  var firstPara;
  var firstEl = tempDiv.querySelector('p, h6');
  if (firstEl) {
    firstPara = firstEl.innerText;
  }
  return {
    props: {
      staticPosts: posts,
      staticPost: post.length ? post[0] : {},
      // staticPost: post.length ? posts.filter((post) => post.id === context.params.id)[0] : {},
      title: post[0].data.title,
      description: firstPara,
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
  return <PostsView staticPosts={staticPosts} staticPost={staticPost} />;
}
