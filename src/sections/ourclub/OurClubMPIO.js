import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
// components
import Iconify from 'src/components/iconify/Iconify';
import Markdown from 'src/components/markdown/Markdown';
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
    imgUrl: '/assets/images/Club-Photo-2-1024x428.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0.4)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/Club-Photo-2-1024x428.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const mpioContent = [
  {
    icon: 'mdi:umbrella-beach',
    label: 'Our Members Protection Team',
    text: `<p >
    Our club has a group of dedicated volunteers who look after member protection practices and issues. These are as follows;
</p>
<p >
    Member Protection Information Officer (MPIO): Dave Alldis <a href="mailto:MPIO@southcurlcurlslsc.com.au">MPIO@southcurlcurlslsc.com.au</a>
</p>
<p >
    Complaints Manager: Michele Verwey <a href="mailto:complaints@southcurlcurlslsc.com.au">complaints@southcurlcurlslsc.com.au</a>
</p>
<p >
    Child Safe Coordinator: Lisa Settree <a href="mailto:childsafecoordinator@southcurlcurlslsc.com.au">childsafecoordinator@southcurlcurlslsc.com.au</a>
</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Complaint Management',
    text: `<p >
    An MPIO is available to provide information to members who may have an issue or grievance at the club. The MPIO may be a first point of contact for any member wishing to raise a concern. To contact the MPIO, please email Dave Alldis <a href="mailto:MPIO@southcurlcurlslsc.com.au">MPIO@southcurlcurlslsc.com.au</a> to arrange a call back. After contacting the MPIO, should a member wish to proceed with a formal complaint, this can be lodged via the online complaints portal: <a target="_blank" rel="noopener noreferrer" href="https://complaints.sls.com.au/"> https://complaints.sls.com.au/</a>
</p>
<p >
    All formal complaints are handled by a Complaints Manager, who will take action to resolve complaints after they are lodged via the portal. We understand that in a community organisation where everyone knows each other, conflicts of interest can arise. We want members to feel they are able to raise any concerns they have, and if there is a conflict of interest and members would prefer to speak to someone else within the club regarding their concern, please email <a href="mailto:president@southcurlcurlslsc.com.au">president@southcurlcurlslsc.com.au</a></i>. Alternatively, you can contact the MPIO at your branch or any SLS MPIO.
</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Child Safety',
    text: `
<p >
    Our Club is committed to the safety and wellbeing of every child and young person who takes part in our activities, programs, events or services and will work to create an environment in which children and young people are safe and feel safe at all times.
</p>
<p >
    SCC SLSC recognises the importance of protecting young people under the age of 18 from abuse, harm and exploitation.&nbsp; It is everyone’s responsibility to treat children and young people respectfully and follow child safe legislation and the SLSA Child Safe Policy. The Child Safe Code of Conduct applies to all members and associated parties as outlined in the <a target="_blank" rel="noopener noreferrer" href="https://www.surflifesaving.com.au/members/policies/slsa-policy-6-04-child-safe/">Child Safe Policy</a>.
</p>
<p >
    Resources, webinars and online training courses are available to all members, providing clear guidelines of appropriate behaviour when engaging with children and young people.&nbsp; All members are encouraged to complete the <a target="_blank" rel="noopener noreferrer" href="https://members.sls.com.au/SLSA_Online/modules/login/index.php">Child Safe Awareness online course</a> found in the e-learning section of your members portal.
</p>`,
  },
];
const OurClubCafe = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="mpio" style={{ position: 'absolute', top: '-80px' }} />
      </div>

      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3" component="h2">
              Member Protection, Privacy and Child Safety
            </Typography>
            <Markdown
              content='<p>SLSC is committed to the protection, welfare and well-being of all members and is dedicated to providing a positive and safe environment in line with the <a target="_blank" rel="noopener noreferrer" href="https://www.surflifesaving.com.au/members/policies/slsa-policy-6-05-member-protection/" SLSA Member Protection Policy</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.surflifesaving.com.au/members/policies/slsa-policy-6-04-child-safe/">SLSA Child Safe Policy.</a>
              We take an inclusive approach, dedicated to being open to all members of the Australian community and providing a safe environment, ensuring all members are treated with respect and dignity and are protected from discrimination, harassment and abuse. Our aim is to create a safe and nurturing environment for all members participating in surf lifesaving by following the <a target="_blank" rel="noopener noreferrer" href="https://www.surflifesaving.com.au/members/policies/slsa-policy-6-05-member-protection-code-of-conduct-extracted/">Member Protection Code of Conduct.</a>
</p>'
            />
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {mpioContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        {/* <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2, maxWidth: '400px' }}>
            <Markdown content={`<p>Follow us on Insta: <a target='_blank' rel='noopener noreffer' href=" https://www.instagram.com/thebeacheatery/">@thebeacheatery</a></p>`} />
          </Stack>
        </Box> */}
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubCafe;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography>{label}</Typography>
        <Markdown content={text} />
      </Stack>
    </Stack>
  );
}
