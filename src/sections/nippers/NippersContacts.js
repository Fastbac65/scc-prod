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
    imgUrl: '/assets/images/gusto4.jpeg',
  }),
  // [theme.breakpoints.up('sm')]: {
  //   ...bgGradient({
  //     direction: 'to right',
  //     startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
  //     endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
  //     // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
  //     // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
  //     imgUrl: '/assets/images/gusto4.jpeg',
  //   }),
  //   backgroundPosition: 'center, left',
  //   backgroundSize: 'cover, auto 100%',
  // },
}));

// ----------------------------------------------------------------------

const nippersContactsContent = [
  {
    icon: 'mdi:umbrella-beach',
    label: 'Family Focus',
    text: `<table>
	<thead>
		<tr>
			<td><strong>Position</strong></td>
			<td><strong>Name</strong></td>
			<td><strong>Email / TeamApp Access Group</strong></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Junior Activity Chair</td>
			<td>Rachael Gaynes</td>
			<td><a href="mailto:president@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">nippers@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Junior Activity Deputy</td>
			<td>Charley Bailey</td>
			<td><a href="mailto:president@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">nippers@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Secretary/Registrar</td>
			<td>Kirsten Quinn</td>
			<td><a href="mailto:rippers@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">rippers@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Information Officer</td>
			<td>Graham Smith</td>
			<td><a href="mailto:ict@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">ict@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Water Safety Supervisor</td>
			<td>Bennet Waller</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Clothing</td>
			<td>Alison Donnan</td>
			<td><a href="mailto:clothing@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">clothing@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Competition Registrar</td>
			<td>TBD</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Competition Mgr &ndash; Beach</td>
			<td>TBD</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Competition Mgr &ndash; Water</td>
			<td>TBD</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Social Secretary</td>
			<td>Trish Byrne</td>
			<td>&nbsp;<a href="mailto:social@southcurlcurlslsc.com.au" rel="noopener noreferrer" target="_blank">social@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>&lsquo;Rippers&rsquo;: Additional Needs Nippers</td>
			<td>Kirsten Quinn, Gordon Carroll</td>
			<td>&quot;Rippers-Special Needs Group&quot;</td>
		</tr>
	</tbody>
</table>
`,
  },
];
const NippersContacts = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="nipperscommittee" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ textAlign: 'center', px: 0 }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '700px' }}>
            <Typography variant="h3" component="h2">
              Nippers Committee & Age Managers
            </Typography>
            <Typography variant="body2">A massive Thank You to all our volunteer Nippers Committee members and Age managers. Nippers is just not possible without you</Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 0, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {nippersContactsContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </StyledRootResponsive>
  );
};
export default NippersContacts;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    // <Stack spacing={2.5} direction="row" alignItems="flex-start">

    <Stack spacing={0.5} sx={{ width: { xs: '100vw', sm: 'auto' }, overflow: 'scroll', alignItems: { xs: 'left', sm: 'center' } }}>
      {/* <Typography>{label}</Typography> */}
      <Markdown content={text} />
    </Stack>
    // </Stack>
  );
}
