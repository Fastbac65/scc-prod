// next
import Head from 'next/head';

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
    },
    // revalidate: 10,
  };
}

// ----------------------------------------------------------------------

export default function Privacy() {
  return (
    <>
      <Head>
        <link rel="canonical" href={`https://southcurlcurlslsc.com.au/training`} />
        <link rel="alternate" media="only screen and (max-width: 640px)" href={`https://southcurlcurlslsc.com.au/training`} />
      </Head>

      <PrivacyTermsOfUseView />
    </>
  );
}
