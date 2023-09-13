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
			<td><strong>Email</strong></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>President</td>
			<td>Steve Rudd</td>
			<td><a href="mailto:president@southcurlynippers.com" rel="noopener noreferrer" target="_blank">president@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>Vice-President</td>
			<td>&nbsp;</td>
			<td><a href="mailto:vicepresident@southcurlynippers.com" rel="noopener noreferrer" target="_blank">vicepresident@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>Secretary</td>
			<td>&nbsp;</td>
			<td><a href="mailto:secretary@southcurlynippers.com" rel="noopener noreferrer" target="_blank">secretary@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>Information Officer</td>
			<td>&nbsp;</td>
			<td><a href="mailto:ict@southcurlynippers.com" rel="noopener noreferrer" target="_blank">ict@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>Risk Assessment Officer</td>
			<td>Guy Waddilove</td>
			<td><a href="mailto:risk@southcurlynippers.com" rel="noopener noreferrer" target="_blank">risk@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>Clothing</td>
			<td>Alison Donnan</td>
			<td><a href="mailto:clothing@southcurlynippers.com" rel="noopener noreferrer" target="_blank">clothing@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>Competition Registrar</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Competition Mgr &ndash; Beach</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Competition Mgr &ndash; Water</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>BBQ Co-Ordinator</td>
			<td>&nbsp;</td>
			<td>&nbsp;<a href="mailto:BBQ@southcurlynippers.com" rel="noopener noreferrer" target="_blank">BBQ@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U6 Age Managers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u6@southcurlynippers.com" rel="noopener noreferrer" target="_blank">u6@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U7 Age Managers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u7@southcurlynippers.com" rel="noopener noreferrer" target="_blank">u7@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U8 Age Managers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u8@southcurlynippers.com" rel="noopener noreferrer" target="_blank">u8@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U9 Age Managers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u9@southcurlynippers.com" rel="noopener noreferrer" target="_blank">u9@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U10 Age Managers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u10@southcurlynippers.com" rel="noopener noreferrer" target="_blank">u10@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U11 Age Managers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u11@southcurlynippers.com" rel="noopener noreferrer" target="_blank">u11@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U12 Age Managers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u12@southcurlynippers.com" rel="noopener noreferrer" target="_blank">u12@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U13 Age Managers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u13@southcurlynippers.com" rel="noopener noreferrer" target="_blank">u13@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>U14 &ndash; The SRC Squad Age Managers-Trainers</td>
			<td>&nbsp;</td>
			<td><a href="mailto:u14@southcurlynipers.com" rel="noopener noreferrer" target="_blank">u14@southcurlynipers.com</a><br/> <a href="mailto:src@southcurlynippers.com" rel="noopener noreferrer" target="_blank">src@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>&lsquo;Rippers&rsquo;: Additional Needs Nippers Group</td>
			<td>Kirsten Quinn</td>
			<td><a href="mailto:rippers@southcurlynippers.com" rel="noopener noreferrer" target="_blank">rippers@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>Cadets (U15-17) Water Safety</td>
			<td>TBD</td>
			<td><a href="mailto:cadets@southcurlynippers.com" rel="noopener noreferrer" target="_blank">cadets@southcurlynippers.com</a></td>
		</tr>
		<tr>
			<td>All Age Managers</td>
			<td>Age Managers</td>
			<td><a href="mailto:agemanagers@southcurlynippers.com" rel="noopener noreferrer" target="_blank">agemanagers@southcurlynippers.com</a></td>
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
            <Typography variant="h3">Nippers Committee & Age Managers</Typography>
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
