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
    imgUrl: '/assets/images/gusto2.jpeg',
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

const ourDocs = [
  {
    text: `<table>
<thead>
<tr>
<th>Event</th>
<th>Description</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>SCC Club Constitution</td>
<td>SCC SLSC Club Constitution Adopted 7 August 2022</td>
<td>The club constitution can be viewed <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSCC-Annual-Report-2022-Complete-Compressed.pdf?alt=media&token=1dcccc1d-8f73-41ca-8035-4c1605eb819c" target="_blank" rel="noopener">here</a></td>
</tr>
<tr>
<td>SCC Club By-Laws</td>
<td>SCC SLSC Club By-Laws Adopted 24 June 2024</td>
<td>The club By-Laws can be viewed <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSCC-By-Laws-d240617.pdf?alt=media&token=ac8a0b61-80bb-428f-b07c-4736a5b0a5df" target="_blank" rel="noopener">here</a></td>
</tr>
<tr>
<td>75th Anniversary Book 1993</td>
<td>The history of South Curly as captured in our 75th anniversary year.</td>
<td>A scanned image of the book can be found <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSouth-Curl-Curl-75th-Anniversary-2nd-october-1993.pdf?alt=media&token=3d0be10e-d4a1-44c7-8dea-571be241bcab" target="_blank" rel="noopener noreferrer">here</a> .</td>
</tr>
<tr>
<td>50th Anniversary Book 1968</td>
<td>The history of South Curly as captured in our 50th anniversary year.</td>
<td>A scanned image of the book can be found <a href="The-History-of-South-Curl-Curl-Surf-Life-Saving-Club-1918-1968.pdf" target="_blank" rel="noopener noreferrer">here</a> .</td>
</tr><tr>
<td>2022 Annual General Meeting (AGM)</td>
<td>The 104th Annual General Meeting was held at 10:00am, on Sunday 7th August 2022.</td>
<td>The 2022 Annual Report can be viewed <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSCC-Annual-Report-2022-Complete-Compressed.pdf?alt=media&token=1dcccc1d-8f73-41ca-8035-4c1605eb819c" target="_blank" rel="noopener">here</a></td>
</tr>
<tr>
<td>2021 Annual General Meeting (AGM)</td>
<td>The 103rd Annual General Meeting was held at 10:00am, on Sunday 1st August 2021 via Zoom.</td>
<td>The 103rd AGM minutes can be viewed <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FAGM-Minutes-d210801.pdf?alt=media&token=bae4e24f-ea6e-4e55-b3d7-62eb303692f1" target="_blank" rel="noopener">here</a>, and the 2021 Annual Report can be viewed <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSCC-Annual-Report-2021-Final.pdf?alt=media&token=cf4688e4-8b3e-41e1-b941-ff14c0dc2c36" target="_blank" rel="noopener">here</a></td>
</tr>
<tr>
<td>2020 Annual General Meeting (AGM)</td>
<td>The 102nd Annual General Meeting was held at 10:00am, on Sunday 2nd August 2020 at the Surf Club.</td>
<td>102nd AGM Minutes can be viewed <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSCC-Minutes-102nd-AGM-2020.pdf?alt=media&token=def38f89-e20d-4bad-ad72-fcb1df06e542" target="_blank" rel="noopener">here</a><br>
The 2020 Annual Report can be <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSCC-Annual-Report-2019-Audited-Financials-0820-min-compressed.pdf?alt=media&token=94d4e9d6-61df-464c-823c-115e0169eceb" target="_blank" rel="noopener noreferrer">downloaded here</a>.</td>
</tr>
<tr>
<td>2019 Annual Report</td>
<td>The 2019 Annual Report with draft accounts.<br>
The final financial report for the season</td>
<td>Can be <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSCC-Annual-Report-2019-Final-3.pdf?alt=media&token=d54c38e0-0865-4708-a808-18d9f1ce6a43" target="_blank" rel="noopener noreferrer">downloaded here</a>.<br>
Can be downloaded <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSigned-Financial-Report-for-30-April-2019-with-Audit-Statements.pdf?alt=media&token=20bd7bd2-0241-420c-b982-3eb797157034" target="_blank" rel="noopener noreferrer">here</a></td>
</tr>
<tr>
<td>101st Annual General Meeting (AGM) 2019</td>
<td>The 101st Annual General Meeting was held at 10:00am, on Sunday 4th August 2019 at the Surf Club.</td>
<td>101st AGM Minutes can be&nbsp;<a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2F20190804-AGM-Minutes.pdf?alt=media&token=c1db706a-df91-4b97-9c4a-2d7029370850" target="_blank" rel="noopener noreferrer">downloaded here</a>.</td>
</tr>
<tr>
<td>100th Annual General Meeting (AGM) 2018</td>
<td>The 100th Annual General Meeting was held at 10:00am, on Sunday&nbsp;5th August 2018 at the Surf Club.</td>
<td>The minutes of the 100th AGM can be <a href="https://firebasestorage.googleapis.com/v0/b/scc-proto.appspot.com/o/sccdocs%2FSCC-Minutes-100th-AGM-2018.pdf?alt=media&token=d0a63468-4bd4-4802-8a97-8a27ecc90d7f" target="_blank" rel="noopener noreferrer">downloaded here</a>.</td>
</tr>
</tbody>
</table>`,
  },
];

const columns = [
  { field: 'role', headerName: 'Role', width: 140 },
  { field: 'name', headerName: 'Name', width: 155 },
  { field: 'email', headerName: 'Email', width: 320 },
];
// ----------------------------------------------------------------------
const OurClubDocs = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="sccdocs" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ textAlign: 'center', px: 0 }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '1000px' }}>
            <Typography variant="h3" component="h2">
              South Curl Curl SLSC Documentation
            </Typography>
            {/* <Typography variant="body2">Important South Curl Curl documentation</Typography> */}
          </Stack>
        </Box>
        <Stack sx={{ px: 0, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {ourDocs.map((item) => (
                <OverviewItem key={item.text} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubDocs;

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
