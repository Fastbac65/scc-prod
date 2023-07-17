// next
import Head from 'next/head';
import { useRouter } from 'next/router';

// sections
import { RegisterCoverView } from 'src/sections/auth/view';
import { useSettingsContext } from 'src/components/settings';
import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

export default function RegisterCoverPage() {
  const { loading, user, holdRouter } = useSettingsContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && !holdRouter) {
      router.back();
    }
  }, [user, loading, holdRouter]);

  if (!holdRouter) {
    if (user || loading) {
      return <LoadingScreen />;
    }
  }

  // !loading !user
  return (
    <>
      <Head>
        <title>Register | South Curl Curl SLSC</title>
      </Head>

      <RegisterCoverView />
    </>
  );
}
