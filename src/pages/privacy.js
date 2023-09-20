// layouts
import MainLayout from 'src/layouts/main';
// sections
import { PrivacyTermsOfUseView } from 'src/sections/view';

// ----------------------------------------------------------------------

Privacy.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  // const members = await getMembers();
  return {
    props: {
      title: 'SCC Privacy & Terms of Use',
      description: 'South Curl Curl Surf Life Saving Club Website Privacy and Terms & Conditions of Use',
      canonical: 'https:southcurlcurlslsc.com.au/privacy',
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Privacy() {
  return <PrivacyTermsOfUseView />;
}
