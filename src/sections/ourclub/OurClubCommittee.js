import { Box, Typography, Stack, styled, alpha, Container } from '@mui/material';

// components
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

const ourCommittee = [
  {
    text: `<table>
	<tbody>
		<tr>
			<td><strong>Role</strong></td>
			<td><strong>Name</strong></td>
			<td><strong>Contact Details</strong></td>
		</tr>
		<tr>
			<td>President</td>
			<td>Matthew Campbell</td>
			<td><a href="mailto:President@southcurlcurlslsc.com.au">President@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Deputy President</td>
			<td>Dave Alldis</td>
			<td><a href="mailto:Deputypresident@southcurlcurlslsc.com.au">Deputypresident@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Secretary</td>
			<td>Jono Beavon</td>
			<td><a href="mailto:Secretary@southcurlcurlslsc.com.au">Secretary@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Treasurer</td>
			<td>Paul Brittain</td>
			<td><a href="mailto:Treasurer@southcurlcurlslsc.com.au">Treasurer@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Club Captain</td>
			<td>Kevin Moffat</td>
			<td><a href="mailto:Captain@southcurlcurlslsc.com.au">Captain@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Nippers President</td>
			<td>Frank Tol</td>
			<td><a href="mailto:Nippers@southcurlcurlslsc.com.au">Nippers@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Patrol Supervisor</td>
			<td>David O&rsquo;Reilly</td>
			<td><a href="mailto:PatrolSup@southcurlcurlslsc.com.au">PatrolSup@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Chief Instructor</td>
			<td>Natalie Neary</td>
			<td><a href="mailto:Chiefinstructor@southcurlcurlslsc.com.au">Chiefinstructor@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Boat Captain 1</td>
			<td>Julian McKay</td>
			<td><a href="mailto:Boatcaptain@southcurlcurlslsc.com.au">Boatcaptain@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Boat Captain 2</td>
			<td>Mali Warneford</td>
			<td><a href="mailto:Boatcaptain@southcurlcurlslsc.com.au">Boatcaptain@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>First Aid Officer</td>
			<td>Lisa Holland</td>
			<td><a href="mailto:Firstaid@southcurlcurlslsc.com.au">Firstaid@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Safety Officer</td>
			<td>Guy Waddilove</td>
			<td><a href="mailto:OHS@southcurlcurlslsc.com.au">OHS@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Gym Officer</td>
			<td>Bjorn Shearer</td>
			<td><a href="mailto:gym@southcurlcurlslsc.com.au">gym@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Powercraft Captain</td>
			<td>Michael Berry</td>
			<td><a href="mailto:IRB@southcurlcurlslsc.com.au">IRB@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>IRB Engineer</td>
			<td>Terry Durnin</td>
			<td><a href="mailto:IRB@southcurlcurlslsc.com.au">IRB@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Craft Captain</td>
			<td>Peter Allen</td>
			<td><a href="mailto:Craft@southcurlcurlslsc.com.au">Craft@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Social Secretary</td>
			<td>Trish Byrne</td>
			<td><a href="mailto:Social@southcurlcurlslsc.com.au">Social@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Cadets</td>
			<td>Saul Carroll</td>
			<td><a href="mailto:Cadets@southcurlcurlslsc.com.au">Cadets@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Sponsor Coordinator</td>
			<td>Graeme Dominish</td>
			<td><a href="mailto:Sponsorship@southcurlcurlslsc.com.au">Sponsorship@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Club Admin</td>
			<td>Lisa Settree</td>
			<td><a href="mailto:Mail@southcurlcurlslsc.org">Mail@southcurlcurlslsc.org</a></td>
		</tr>
		<tr>
			<td>Technology Officer</td>
			<td>Graham Smith</td>
			<td><a href="mailto:ICT@southcurlcurlslsc.com.au">ICT@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Gear Steward</td>
			<td>Steve Birch</td>
			<td><a href="mailto:Gear@southcurlcurlslsc.com.au">Gear@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Handicapper</td>
			<td>Dave Platter</td>
			<td><a href="mailto:Handicapper@southcurlcurlslsc.com.au">Handicapper@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Tour Manager</td>
			<td>Michelle Lowery</td>
			<td><a href="mailto:TourManager@southcurlcurlslsc.com.au">TourManager@southcurlcurlslsc.com.au</a></td>
		</tr>
		<tr>
			<td>Complaints or Grievances</td>
			<td>Jenny Drury</td>
			<td><a href="mailto:Complaints@southcurlcurlslsc.com.au">Complaints@southcurlcurlslsc.com.au</a></td>
		</tr>
	</tbody>
</table>
`,
  },
];

const columns = [
  { field: 'role', headerName: 'Role', width: 140 },
  { field: 'name', headerName: 'Name', width: 155 },
  { field: 'email', headerName: 'Email', width: 320 },
];
// ----------------------------------------------------------------------
const OurClubCommitee = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="clubcommittee" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ textAlign: 'center', px: 0 }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '1000px' }}>
            <Typography variant="h3">South Curl Curl Committee</Typography>
            <Typography variant="body2">
              A massive Thank You to all our volunteer South Curl Curl SLSC Committee members. SCC SLSC is a volunteer organisation with a large member base and we could not exit without the amazing hard work
              put in by all involved in running the club
            </Typography>
          </Stack>
        </Box>
        <Stack sx={{ px: 0, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {ourCommittee.map((item) => (
                <OverviewItem key={item.text} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubCommitee;

function OverviewItem({ text = '-' }) {
  return (
    // <Stack spacing={2.5} direction="row" alignItems="flex-start">

    <Stack spacing={0.5} sx={{ width: { xs: '98vw', sm: 'auto' }, overflow: 'scroll', alignItems: { xs: 'left', sm: 'center' } }}>
      {/* <Typography>{label}</Typography> */}
      <Markdown content={text} />
    </Stack>
    // </Stack>
  );
}
