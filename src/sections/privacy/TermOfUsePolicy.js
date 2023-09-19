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
    imgUrl: '/assets/images/patrol1.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0.3)} 10%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 45%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/patrol1.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const termsOfUseContent = [
  {
    icon: 'ci:first-aid',
    label: 'SCC Website Terms and Conditions',
    text: `<p>Terms and Conditions of Use for South Curl Curl SLSC Website</p>

    <p>Effective Date: [1/Sep/2023]</p>

    <p><strong>Introduction</strong></p>

    <p>Welcome to the South Curl Curl SLSC website (the &quot;Site&quot;). The Site is owned and operated by South Curl Curl SLSC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These terms and conditions (the &quot;Terms&quot;) govern your use of the Site. By accessing or using the Site, you agree to be bound by these Terms.</p>

    <p><strong>Privacy Policy</strong></p>

    <p>Our privacy policy (the &quot;Privacy Policy&quot;) explains how we collect, use, and protect personal information collected through our website. By accessing or using the Site, you also agree to be bound by the Privacy Policy.</p>

    <p><strong>Use of the Site</strong></p>

    <p>The Site is intended for use by individuals who are at least 13 years old. If you are under 13, you may not use the Site.</p>

    <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the Site by any third party. You also agree not to:</p>

    <ul>
      <li>Use the Site in any way that could damage or disable the Site or interfere with any other party&#39;s use and enjoyment of the Site.</li>
      <li>Use any robot, spider, or other automatic device or manual process to monitor or copy any content on the Site.</li>
      <li>Use any device, software, or routine to interfere with the proper working of the Site.</li>
      <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other harmful material to the Site.</li>
      <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site or any servers, networks, or databases connected to the Site.</li>
      <li>Use the Site for any commercial purpose or to solicit others to join or become members of any other commercial online service or organization.</li>
    </ul>

    <p><strong>Intellectual Property</strong></p>

    <p>The content and materials on the Site, including but not limited to text, graphics, logos, images, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, copy, reproduce, distribute, transmit, display, sell, license, or otherwise exploit any content on the Site for any commercial purpose without our prior written consent.</p>

    <p><strong>Links to Third-Party Sites</strong></p>

    <p>The Site may contain links to third-party websites or resources. These links are provided for your convenience only and do not imply any endorsement or affiliation by us. We are not responsible for the content, products, services, or privacy practices of any third-party websites or resources.</p>

    <p><strong>Disclaimer of Warranties</strong></p>

    <p>The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, or products included on the Site. You expressly agree that your use of the Site is at your sole risk.</p>

    <p><strong>Limitation of Liability</strong></p>

    <p>To the fullest extent permitted by applicable law, we shall not be liable for any damages, including but not limited to direct, indirect, incidental, consequential, or punitive damages, arising out of or relating to your use or inability to use the Site.</p>

    <p><strong>Indemnification</strong></p>

    <p>You agree to indemnify, defend, and hold us harmless from any claims, damages, expenses, or other losses, including reasonable attorneys&#39; fees, arising out of or relating to your use of the Site or any violation of these Terms.</p>

    <p><strong>Governing Law</strong></p>

    <p>These Terms shall be governed by and construed in accordance with the laws of New South Wales, Australia, without giving effect to any principles of conflicts of law.</p>

    <p><strong>Changes to Terms</strong></p>

    <p>We reserve the right to update or modify these Terms at any time, without prior notice. Any changes to these Terms will be effective immediately upon posting on the Site. Your continued use of the Site after the posting of changes constitutes your acceptance of the updated Terms.</p>

    <p><strong>Termination</strong></p>

    <p>We reserve the right to terminate or suspend your access to the Site, in our sole discretion, for any reason, including without limitation if you violate these Terms.</p>

    <p><strong>Contact Information</strong></p>

    <p>If you have any questions or concerns about these Terms and Conditions of Use, please contact us at [insert contact information].</p>

    <p><strong>Entire Agreement</strong></p>

    <p>These Terms, along with the Privacy Policy, constitute the entire agreement between you and South Curl Curl SLSC regarding your use of the Site and supersede any prior or contemporaneous understandings and agreements.</p>

    <p>By using the South Curl Curl SLSC website, you acknowledge that you have read, understood, and agree to these Terms and the Privacy Policy. If you do not agree with these Terms or the Privacy Policy, please do not use the Site.</p>`,
  },
];
const TermOfUsePolicy = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="termsofuse" style={{ position: 'absolute', top: '-80px' }} />
      </div>

      <Container maxWidth="lg" sx={{ mx: 0, px: { xs: 0.5, sm: 3 }, textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3">SCC Website Terms of Use</Typography>
            <Typography variant="body2">
              At South Curl Curl we also provide many opportunities to enhance your First Aid capabilities through more advanced First Aid training. Why not go to the next level and join us in our Advanced
              Resus and First Aid courses.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {termsOfUseContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '400px' }}>
            <Typography variant="caption">For all training queries please send an email to chiefinstructor@southcurlcurlslsc.som.au for further information</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default TermOfUsePolicy;

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
