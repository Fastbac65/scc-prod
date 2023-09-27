import { Body, Button, Container, Head, Html, Hr, Img, Link, Preview, Section, Text } from '@react-email/components';

// const image = 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fscc-logo-blue-sm.jpg?alt=media&token=d84a55ab-848a-4798-b111-d7d614da797a';
const image = 'https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/images%2Fscc-logo-blue-sm2.png?alt=media&token=4ac16294-1a4e-44e5-a71b-ad6c25b18f07';
const host = process.env.NODE_ENV === 'development' ? 'http://192.168.0.220:5002' : 'https://southcurlcurlslsc.com.au';

export const EmailTest = ({ name, email, link, booking }) => {
  const { fullName, phoneNumber, bookingType, bookingDate, occasion } = booking;
  const date = new Date(bookingDate).toDateString();
  return (
    // <Html>
    // <Head />
    // <Preview>Welcome to SCC SLSC</Preview>
    // <Body style={main}>

    <div>
      <Container style={container}>
        <Link href={host}>
          <Img style={img} src={image} height="80" alt="South Curl Curl SLSC" />
        </Link>
        <Hr style={hr} />
        <Section>
          <Text style={text}>Hi {fullName.split(/[ ]+/)[0]},</Text>
          <Text style={text}>Your booking request has been received. Thank you for your interest in booking our beautiful South Curl Curl venue. Confirming your request details are as follows:</Text>
          <Hr style={hr} />
          <Text style={text}>
            Full name: {fullName} <br />
            Email: {email} <br />
            Mobile: {phoneNumber} <br />
            The big occasion: {occasion} <br />
            Requested date: {date} <br />
            Booking type: {bookingType}
          </Text>
          <Hr style={hr} />
          {/* <Button pY={10} style={button} href={link}>
                Finalise SCC SLSC Website Account
              </Button> */}
          {/* <Text style={text}>If you didn&apos;t initwant to change your password or didn&apos;t request this, just ignore and delete this message.</Text> */}

          <Text style={text}>
            We will be in touch shortly to finalise everything. Have a great day!,
            <br />
            The South Curly Venue Management team
          </Text>
          <Text style={text}></Text>
          <Link style={anchor} href={host}>
            @ South Curl Curl SLSC
          </Link>
          <Hr style={hr} />
          <Text style={subtext}>
            This email was originally sent to {email}.<br />
            If you need update your details please reach us at caretaker@southcurlcurlslsc.com.au or 0432066292
          </Text>
        </Section>
      </Container>
      <div>
        <Container style={container}>
          <Link href={host}>
            <Img style={img} src={image} height="80" alt="South Curl Curl SLSC logo" />
          </Link>
          <Hr style={hr} />
          <Section>
            <Text style={text}>Hi {name},</Text>
            <Text style={text}>Welcome to South Curl Curl SLSC. To finalise your members access to the South Curl Curl SLSC website please continue here:</Text>
            <Button pY={10} style={button} href={link}>
              Finalise SCC SLSC Website Account
            </Button>
            {/* <Text style={text}>If you didn&apos;t initwant to change your password or didn&apos;t request this, just ignore and delete this message.</Text> */}
            <Text style={text}>
              To keep your account secure, please do not forward this email to anyone.{' '}
              {/* Head over to our Support page for{' '}
              <Link style={anchor} href={`${host}/support`}>
                more security tips.
              </Link> */}
            </Text>
            <Text style={text}>Have a great day!</Text>
            <Text style={text}>The web team</Text>
            <Link style={anchor} href={host}>
              @ South Curl Curl SLSC
            </Link>
            <Hr style={hr} />
            <Text style={subtext}>
              This email was originally sent to {email}. Please do not click on any links you cannot verify. All links should have origin {host}
            </Text>
            <Text style={subtext}>If you need further assistance: reply or reach us at webadmin@southcurlcurlslsc.com.au</Text>
          </Section>
        </Container>
        <Container style={container}>
          <Link href={host}>
            <Img style={img} src={image} height="80" alt="South Curl Curl SLSC logo" />
          </Link>
          <Section>
            <Text style={text}>Hi {name},</Text>
            <Text style={text}>Someone recently requested a password change for your South Curl Curl website members account. If this was you, you can set a new password here:</Text>
            <Button pX={10} pY={10} style={button} href={link}>
              Reset password
            </Button>
            <Text style={text}>If you do not want to change your password or didn&apos;t request this, just ignore and delete this message.</Text>
            <Text style={text}>
              To keep your account secure, please do not forward this email to anyone.{' '}
              {/* Head over to our Support page for{' '}
              <Link style={anchor} href={`${host}/support`}>
                more security tips.
              </Link> */}
            </Text>
            <Text style={text}>Have a great day!</Text>
            <Text style={text}>The web team</Text>
            <Link style={anchor} href={host}>
              @ South Curl Curl SLSC
            </Link>
            <Hr style={hr} />
            <Text style={subtext}>
              This email was originally sent to {email}. Please do not click on any links you cannot verify. All links should have origin {host}
            </Text>
            <Text style={subtext}>If you need further assistance: reply or reach us at webadmin@southcurlcurlslsc.com.au</Text>
          </Section>
        </Container>
      </div>
      <Container style={container}>
        <Link href={host}>
          <Img style={img} src={image} height="80" alt="South Curl Curl SLSC logo" />
        </Link>
        <Hr style={hr} />
        <Section>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>Someone recently requested a password change for your South Curl Curl website members account. If this was you, you can set a new password here:</Text>
          <Button pX={10} pY={10} style={button} href={link}>
            Reset password
          </Button>
          <Text style={text}>If you do not want to change your password or didn&apos;t request this, just ignore and delete this message.</Text>
          <Text style={text}>
            To keep your account secure, please do not forward this email to anyone.{' '}
            {/* Head over to our Support page for{' '}
              <Link style={anchor} href={`${host}/support`}>
                more security tips.
              </Link> */}
          </Text>
          <Text style={text}>Have a great day!</Text>
          <Text style={text}>The web team</Text>
          <Link style={anchor} href={host}>
            @ South Curl Curl SLSC
          </Link>
          <Hr style={hr} />
          <Text style={subtext}>
            This email was originally sent to {email}. Please do not click on any links you cannot verify. All links should have origin {host}
          </Text>
          <Text style={subtext}>If you need further assistance: reply or reach us at webadmin@southcurlcurlslsc.com.au</Text>
        </Section>
      </Container>
      <Container style={container}>
        <Link href={host}>
          <Img style={img} src={image} height="80" alt="South Curl Curl SLSC logo" />
        </Link>
        <Hr style={hr} />
        <Section>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>Welcome to South Curl Curl SLSC. To finalise your members access to the South Curl Curl SLSC website please continue here:</Text>
          <Button pY={10} style={button} href={link}>
            Finalise SCC SLSC Website Account
          </Button>
          {/* <Text style={text}>If you didn&apos;t initwant to change your password or didn&apos;t request this, just ignore and delete this message.</Text> */}
          <Text style={text}>
            To keep your account secure, please do not forward this email to anyone.{' '}
            {/* Head over to our Support page for{' '}
          <Link style={anchor} href={`${host}/support`}>
            more security tips.
          </Link> */}
          </Text>
          <Text style={text}>Have a great day!</Text>
          <Text style={text}>The web team</Text>
          <Link style={anchor} href={host}>
            @ South Curl Curl SLSC
          </Link>
          <Hr style={hr} />
          <Text style={subtext}>
            This email was originally sent to {email}. Please do not click on any links you cannot verify. All links should have origin {host}
          </Text>
          <Text style={subtext}>If you need further assistance: reply or reach us at webadmin@southcurlcurlslsc.com.au</Text>
        </Section>
      </Container>
    </div>

    // </Body>
    // </Html>
  );
};

export default EmailTest;

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily: "'Roboto', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};
const subtext = {
  fontSize: '12px',
  fontFamily: "'Roboto', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};

const img = {
  border: 'none',
};

const button = {
  backgroundColor: '#004c98',
  borderRadius: '5px',
  color: '#fff',
  fontFamily: "'Roboto', 'Helvetica Neue', Arial",
  fontSize: '15px',
  fontWeight: '500',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  alignItems: 'center',
  width: '100%',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const anchor = {
  textDecoration: 'none',
};
