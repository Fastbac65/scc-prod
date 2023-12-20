// layouts
import MainLayout from 'src/layouts/main';
// sections
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
      canonical: 'https://southcurlcurlslsc.com.au/competitors',
      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Competitors({ staticPosts }) {
  return <CompetitorsView staticPosts={staticPosts} />;
}
