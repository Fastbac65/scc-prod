// ----------------------------------------------------------------------

import PrivacyPolicy from '../privacy/PrivacyPolicy';
import PrivacyTermsOfUseLanding from '../privacy/PrivacyTermsOfUseLanding';
import TermOfUsePolicy from '../privacy/TermOfUsePolicy';

// ----------------------------------------------------------------------

export default function PrivacyTermsOfUseView() {
  return (
    <>
      <PrivacyTermsOfUseLanding />
      <PrivacyPolicy />
      <TermOfUsePolicy />
      {/* <RecentPosts staticPosts={staticPosts.slice(0, 6)} /> */}
    </>
  );
}
