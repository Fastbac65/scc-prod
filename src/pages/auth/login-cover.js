// next
import Head from 'next/head';
import { useSettingsContext } from 'src/components/settings';
// sections
import { LoginCoverView } from 'src/sections/auth/view';
import { useRouter } from 'next/router';
import LoadingScreen from 'src/components/loading-screen/LoadingScreen';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

export default function LoginCoverPage() {
  const { loading, user, holdRouter } = useSettingsContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && !holdRouter) {
      router.push('/');
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
        <title>Login | South Curl Curl SLSC</title>
      </Head>

      <LoginCoverView />
    </>
  );
}
