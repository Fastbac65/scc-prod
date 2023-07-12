// next
import Head from 'next/head';
// sections
import { RegisterCoverView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

export default function RegisterCoverPage() {
  return (
    <>
      <Head>
        <title>Register | South Curl Curl SLSC</title>
      </Head>

      <RegisterCoverView />
    </>
  );
}
