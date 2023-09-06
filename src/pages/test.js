import EmailTest from 'src/components/email/EmailTest';

const test = () => (
  <EmailTest
    name="Bob"
    email="Bob@this.com"
    link="https://scc-prod.vercel.app"
    booking={{
      bookingType: 'Evening',
      bookingDate: 'Wed Sep 06 2023 19:18:17 GMT+1000 (Australian Eastern Standard Time)',
      occasion: '21st',
      phoneNumber: '+61407945789',
      email: 'terry.durnin@yahoo.com',
      fullName: 'Terence Durnin',
    }}
  />
);

export default test;
