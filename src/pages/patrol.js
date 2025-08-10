// layouts
import MainLayout from 'src/layouts/main';
// sections
import { PatrolView } from 'src/sections/view';
import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

Patrol.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const posts = await getPosts();
  // const members = await getMembers();
  return {
    props: {
      staticPosts: posts.slice(0, 6),
      title: 'SCC - Patrol',
      description:
        'The South Curl Curl Surf Life Saving Patrols are provided by a volunteer organisation whose basic objective is to provide the highest possible level of water safety for our locals, visitors and nippers.',
      canonical: 'https://southcurlcurlslsc.com.au/patrol',
      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Patrol({ staticPosts }) {
  return <PatrolView staticPosts={staticPosts} />;
}
