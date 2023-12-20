// layouts
import MainLayout from 'src/layouts/main';
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
      canonical: 'https://southcurlcurlslsc.com.au/venuehire',
      // staticMembers: members,
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function VenueHire({ staticPosts }) {
  return <VenueHireView staticPosts={staticPosts} />;
}
