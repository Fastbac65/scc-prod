// next
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { useSettingsContext } from 'src/components/settings';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { AccountProfileView } from 'src/sections/view';

// ----------------------------------------------------------------------

AccountProfilePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function AccountProfilePage() {
  const { loading, user } = useSettingsContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading]);

  if (!user) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>SCC Account Profile</title>
      </Head>

      <AccountProfileView />
    </>
  );
}
