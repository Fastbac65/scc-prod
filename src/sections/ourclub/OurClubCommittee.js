import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
// components
import Iconify from 'src/components/iconify/Iconify';
import Markdown from 'src/components/markdown/Markdown';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------
const StyledRootResponsive = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  ...bgGradient({
    direction: 'to top',

    startColor: `${alpha(theme.palette.background.neutral, 0.7)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 1)} 90%`,
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

// ------------------------Data Grid Setup----------------------------------------------
const committee = [
  {
    id: 1,
    role: 'President',
    name: 'Matthew Campbell',
    email: 'President@southcurlcurlslsc.com.au',
  },
  {
    id: 2,
    role: 'Deputy President',
    name: 'Dave Alldis',
    email: 'Deputypresident@southcurlcurlslsc.com.au',
  },
  {
    id: 3,
    role: 'Secretary',
    name: 'Jono Beavon',
    email: 'Secretary@southcurlcurlslsc.com.au',
  },
  {
    id: 4,
    role: 'Treasurer',
    name: 'Paul Brittain',
    email: 'Treasurer@southcurlcurlslsc.com.au',
  },
  {
    id: 5,
    role: 'Club Captain',
    name: 'Kevin Moffat',
    email: 'Captain@southcurlcurlslsc.com.au',
  },
  {
    id: 6,
    role: 'Nippers President',
    name: 'Frank Tol',
    email: 'Nippers@southcurlcurlslsc.com.au',
  },
  {
    id: 7,
    role: 'Nippers Deputy',
    name: 'Steve Rudd',
    email: 'Nippers@southcurlcurlslsc.com.au',
  },
  {
    id: 8,
    role: 'Patrol Supervisor',
    name: "David O'Reilly",
    email: 'PatrolSup@southcurlcurlslsc.com.au',
  },
  {
    id: 9,
    role: 'Chief Instructor',
    name: 'Natalie Neary',
    email: 'Chiefinstructor@southcurlcurlslsc.com.au',
  },
  {
    id: 10,
    role: 'Boat Captain 1',
    name: 'Julian McKay',
    email: 'Boatcaptain@southcurlcurlslsc.com.au',
  },
  {
    id: 12,
    role: 'Boat Captain 2',
    name: 'Mali Warneford',
    email: 'Boatcaptain@southcurlcurlslsc.com.au',
  },
  {
    id: 13,
    role: 'First Aid Officer',
    name: 'Lisa Holland',
    email: 'Firstaid@southcurlcurlslsc.com.au',
  },
  {
    id: 14,
    role: 'Safety Officer',
    name: 'Guy Waddilove',
    email: 'OHS@southcurlcurlslsc.com.au',
  },
  {
    id: 15,
    role: 'Gym Officer',
    name: 'Bjorn Shearer',
    email: 'Gym@southcurlcurlslsc.com.au',
  },
  {
    id: 16,
    role: 'Powercraft Captain',
    name: 'Michael Berry',
    email: 'IRB@southcurlcurlslsc.com.au',
  },
  {
    id: 17,
    role: 'IRB Engineer',
    name: 'Terry Durnin',
    email: 'IRB@southcurlcurlslsc.com.au',
  },
  {
    id: 18,
    role: 'Craft Captain',
    name: 'Peter Allen',
    email: 'Craft@southcurlcurlslsc.com.au',
  },
  {
    id: 19,
    role: 'Social Secretary',
    name: 'Trish Byrne',
    email: 'Social@southcurlcurlslsc.com.au',
  },
  {
    id: 20,
    role: 'Cadets',
    name: 'Saul Carroll',
    email: 'Cadets@southcurlcurlslsc.com.au',
  },
  {
    id: 21,
    role: 'Sponsor Coordinator',
    name: 'Graeme Dominish',
    email: 'Sponsorship@southcurlcurlslsc.com.au',
  },
  {
    id: 22,
    role: 'Club Admin',
    name: 'Lisa Settree',
    email: 'Mail@southcurlcurlslsc.org',
  },
  {
    id: 23,
    role: 'Technology Officer',
    name: 'Graham Smith',
    email: 'ICT@southcurlcurlslsc.com.au',
  },
  {
    id: 24,
    role: 'Gear Steward',
    name: 'Steve Birch',
    email: 'Gear@southcurlcurlslsc.com.au',
  },
  {
    id: 25,
    role: 'Handicapper',
    name: 'Dave Platter',
    email: 'Handicapper@southcurlcurlslsc.com.au',
  },
  {
    id: 26,
    role: 'Tour Manager',
    name: 'Michelle Lowery',
    email: 'TourManager@southcurlcurlslsc.com.au',
  },
  {
    id: 27,
    role: 'Competition Manager',
    name: 'Michela Verwey',
    email: 'Competition@southcurlcurlslsc.com.au',
  },
  {
    id: 28,
    role: 'Complaints or Grievances',
    name: 'Jenny Drury',
    email: 'Complaints@southcurlcurlslsc.com.au',
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
      <Container maxWidth="lg" sx={{ textAlign: 'center', px: 0 }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '700px' }}>
            <Typography variant="h3">South Curl Curl Committee</Typography>
            <Typography variant="body2">A massive Thank You to all our volunteer Nippers Committee members and Age managers. Nippers is just not possible without you</Typography>
          </Stack>
        </Box>
        <Stack sx={{ width: { xs: '98vw', sm: 'auto' }, overflow: 'scroll', alignItems: { xs: 'left', sm: 'center' } }}>
          <DataGrid
            rows={committee}
            columns={columns}
            density="compact"
            pageSizeOptions={[14, 28]}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 14 },
              },
            }}
          />
        </Stack>

        {/* <Stack sx={{ px: 0, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {nippersContactsContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack> */}
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubCommitee;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    // <Stack spacing={2.5} direction="row" alignItems="flex-start">

    <Stack spacing={0.5} sx={{ width: { xs: '98vw', sm: 'auto' }, overflow: 'scroll', alignItems: { xs: 'left', sm: 'center' } }}>
      {/* <Typography>{label}</Typography> */}
      <Markdown content={text} />
    </Stack>
    // </Stack>
  );
}
