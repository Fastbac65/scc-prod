// layouts
import MainLayout from 'src/layouts/main';
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
      staticPosts: posts.slice(0, 6),
      title: 'SCC - Training',
      description:
        'At South Curl Curl we aim to provide training that is relevant to the needs of our lifesaving community but also ensure that it is current and of the highest standard. Our trainers have a great passion for keeping our very dynamic beach safe and giving all patrollers the skills to do so. South Curly often provides extra excitement and being comfortable in our surf, whilst keeping your family & friends safe can be an asset for life.',
      canonical: 'https://southcurlcurlslsc.com.au/training',
      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Training({ staticPosts }) {
  return <TrainingView staticPosts={staticPosts} />;
}
