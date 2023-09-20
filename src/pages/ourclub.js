// next
// layouts
import MainLayout from 'src/layouts/main';
// sections
// import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { OurClubView } from 'src/sections/view';
import { getPosts } from 'src/lib/getStaticDocs';

// ----------------------------------------------------------------------

OurClub.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const posts = await getPosts();
  // const members = await getMembers();
  return {
    props: {
      staticPosts: posts,
      title: 'SCC - Our Club',
      description:
        'South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise.',
      canonical: 'https:southcurlcurlslsc.com.au/ourclub',

      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function OurClub({ staticPosts }) {
  // if (loading) {
  //   return <LoadingScreen />;
  // }
  return <OurClubView staticPosts={staticPosts} />;
}
