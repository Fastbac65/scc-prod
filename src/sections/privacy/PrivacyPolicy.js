import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
// components
import Iconify from 'src/components/iconify/Iconify';
import Markdown from 'src/components/markdown/Markdown';
import useResponsive from 'src/hooks/useResponsive';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------
const StyledRootResponsive = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  ...bgGradient({
    direction: 'to top',

    startColor: `${alpha(theme.palette.background.neutral, 0.6)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.8)} 90%`,
    // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.7)} 0%`,
    // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.95)} 70%`,
    imgUrl: '/assets/images/irbtrain.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to right',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 35%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/irbtrain.jpeg',
    }),
    backgroundPosition: 'center, left',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const privacyContent = [
  {
    icon: 'fontisto:propeller-1',
    label: 'Privacy Policy',
    text: `<p><strong>Privacy Policy for <em>South Curl Curl Surf Life Saving Club</em>&nbsp;Website</strong></p>

    <p>Effective Date: [1/Sep/2023]</p>

    <p><strong>Introduction</strong></p>

    <p><em><strong>South Curl Curl Surf Life Saving Club</strong></em>&nbsp;is committed to protecting the privacy and personal information of our members, visitors, and other users of our website. This privacy policy outlines how we collect, use, and protect personal information collected through our website, and explains your rights and choices with respect to your personal information.</p>

    <p><strong>Information We Collect</strong></p>

    <p>We may collect personal information from you when you visit our website, sign up for our newsletter, register for events, or fill out forms. The types of personal information we may collect include:</p>

    <ul>
      <li>Name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Mailing address</li>
      <li>Date of birth</li>
      <li>Gender</li>
      <li>Surfing experience and skill level</li>
      <li>Other information relevant to your participation in club events and activities.</li>
    </ul>

    <p><strong>Use of Information</strong></p>

    <p>We may use your personal information for the following purposes:</p>

    <ul>
      <li>To provide you with information and services related to South Curl Curl SLSC</li>
      <li>To process your registration for events and activities</li>
      <li>To communicate with you regarding club events and activities</li>
      <li>To improve our website and services</li>
      <li>To comply with legal obligations.</li>
    </ul>

    <p>We may also use photographs taken at club events, competitions, and training sessions for promotional and marketing purposes, including on our website and social media accounts. By participating in these events, you consent to the use of your likeness in these photographs.</p>

    <p>Use of Photos Featuring Kids Participating in Nippers, Training, Competitions and other South Curl Curl SLSC related events</p>
    <p><br></p>
    <p>South Curl Curl SLSC is committed to protecting the privacy and safety of all individuals, especially children. We recognize that the participation of kids in South Curl Curl events, competitions and training activities is a special and important aspect of our club. This section outlines our policies regarding the use of photographs featuring children participating in club events, competitions, and training sessions.</p>

    <ol>
      <li>
      <p><strong>Consent</strong>: By allowing your child to participate in club activities and events, you, as a parent or guardian, provide your consent for us to capture and use photographs or images of your child for club-related purposes, including but not limited to promotional materials, our website, social media accounts, and newsletters.</p>
      </li>
      <li>
      <p><strong>Privacy</strong>: We respect the privacy of our young members and their families. We will not publicly disclose any personal information about children without the explicit consent of their parents or guardians.</p>
      </li>
      <li>
      <p><strong>Safety</strong>: We take the safety and security of children seriously. We will not knowingly use, post, or share photographs that could compromise the safety or well-being of any child. If you have concerns about a specific photograph or image, please contact us immediately, and we will take appropriate action.</p>
      </li>
      <li>
      <p><strong>Requests for Removal</strong>: If, as a parent or guardian, you wish to have a photograph or image of your child removed from our website, social media accounts, or other promotional materials, please contact us at <a href="mailto:mail@southcurlcurlslsc.com.au?subject=Photo%20removal">mail@southcurlcurlslsc.com.au</a>, and we will promptly address your request.</p>
      </li>
      <li>
      <p><strong>Third-Party Use</strong>: While we take precautions to protect the privacy and safety of children, we cannot control the actions of individuals or entities who may access or use photographs posted online. We strongly advise parents and guardians to educate their children about online safety and privacy.</p>
      </li>
      <li>
      <p><strong>Education and Awareness</strong>: We are committed to educating our members, parents, and volunteers about the importance of protecting the privacy and safety of children. We will provide guidelines and training to our volunteers and members on the responsible use of photographs featuring children.</p>
      </li>
    </ol>

    <p>By allowing your child to participate in South Curl Curl SLSC events, competitions, and training sessions, you acknowledge that you have read, understood, and agree to the policies outlined in this section regarding the use of photographs of children participating in club events, competitions, and training sessions.</p>

    <p><strong>Disclosure of Information</strong></p>

    <p>We may disclose your personal information to third parties, such as service providers who assist us with our website and event registration, and to regulatory authorities if required by law.</p>

    <p>We do not sell or rent your personal information to third parties for marketing purposes.</p>

    <p><strong>Security of Information</strong></p>

    <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. We implement appropriate physical, electronic, and procedural safeguards to protect the confidentiality and integrity of personal information in our possession.</p>

    <p><strong>Your Rights and Choices</strong></p>

    <p>You have the right to access and correct your personal information held by us. You may also request that we delete your personal information, subject to any legal obligations that require us to retain certain information. To exercise these rights, please contact us at [Insert contact information].</p>

    <p><strong>Changes to Policy</strong></p>

    <p>We reserve the right to update or modify this privacy policy at any time, without prior notice. We encourage you to review this policy periodically for any changes.</p>

    <p><strong>Contact Us</strong></p>

    <p>If you have any questions or concerns about our privacy policy, our photography policies or the use of photographs featuring children&nbsp;or the handling of your personal information, please contact us at <a href="mailto:complaints@southcurlcurlslsc.com.au">complaints@southcurlcurlslsc.com.au</a>.</p>`,
  },
];
const PrivacyPolicy = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="irb" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ mx: 0, px: { xs: 0.5, sm: 3 }, textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '700px' }}>
            <Typography variant="h3">SCC Website Privacy Policy</Typography>
            {/* <Typography variant="body2">
              When the surf gets &quot;more demanding&quot; and things get more complicated our IRB teams are called upon. Take your life saving skills up another level, join our amazing IRB crew and drivers
              and learn how to deal with and navigate probably some of the most challenging surf conditions on the northern beaches
            </Typography> */}
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 3fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {privacyContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        {/* <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '900px' }}>
            <Typography variant="body2"></Typography>
          </Stack>
        </Box> */}
        {/* <Link component={NextLink} href="/ourclub">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            SCC Membership
          </Button>
        </Link> */}
      </Container>
    </StyledRootResponsive>
  );
};
export default PrivacyPolicy;

function OverviewItem({ icon, label, text = '-' }) {
  const isSmUp = useResponsive('up', 'sm');

  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      {/* {isSmUp && (
        <Box sx={{ width: 24, height: 24 }}>
          <Iconify icon={icon} />
        </Box>
      )} */}
      <Stack spacing={0.5}>
        <Typography sx={{ fontWeight: 600 }}>{label}</Typography>
        <Markdown content={text} />
        {/* <Typography color="text.secondary" variant="body2">
          {text}
        </Typography> */}
      </Stack>
    </Stack>
  );
}
