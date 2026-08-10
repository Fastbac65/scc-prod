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
    imgUrl: '/assets/images/gusto3.jpeg',
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

const ourLifeMembers = [
  {
    text: `<table>
<tbody>
<tr>
<td>Flora Roberts* – Patron Life Member</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Alldis, David</td>
<td>Atkins, Steve</td>
<td>Backhouse*, Clive N.</td>
</tr>
<tr>
<td>Barlow, Rodney</td>
<td>Beavon, Jono</td>
<td>Berry, Michael</td>
</tr>
<tr>
<td>Blake, C.E.</td>
<td>Bland*, Jim</td>
<td>Brown, Andy</td>
</tr>
<tr>
<td>Brown*, Len A.</td>
<td>Brown, Mark E.</td>
<td>Brown, Roper ‘Buster’ L. S.</td>
</tr>
<tr>
<td>Buckingham*, Bruce</td>
<td>Buckingham, Robert (Bob)</td>
<td>Cassidy, John ‘Casso’</td>
</tr>
<tr>
<td>Cuneo, Anthony</td>
<td>Dominish, Graeme</td>
<td>Dossetor, Graeme</td>
</tr>
<tr>
<td>Drury, Jenny</td>
<td>Flemming, Christopher ‘Ribs’</td>
<td>Flemming,&nbsp;Lyndall</td>
</tr>
<tr>
<td>Flower*, Campbell</td>
<td>Gloag, Mick</td>
<td>Good, William (Billy)</td>
</tr>
<tr>
<td>Harbron*,&nbsp;Kenneth</td>
<td>Harradine, Kevin</td>
<td>Hewitt, Jeffrey</td>
</tr>
<tr>
<td>Hogan*, Mick</td>
<td>Hourigan*, Cecil A.</td>
<td>Jones, Darren</td>
</tr>
<tr>
<td>Jones*, Mervyn H.</td>
<td>Joyce*, Denzil [O.A.M.]</td>
<td>Kuhn, Charles ‘Chicka’</td>
</tr>
<tr>
<td>Leggett*, Charles</td>
<td>Longley, Charles</td>
<td>Lowery,&nbsp;Michelle</td>
</tr>
<tr>
<td>Lowery, Robert</td>
<td>Lowther, Peter</td>
<td>MacPherson*, Robert (Bob) G.</td>
</tr>
<tr>
<td>MacPherson*, William (Bill) J.C.</td>
<td>Marvin, Ron L.</td>
<td>McColm*, John G.</td>
</tr>
<tr>
<td>McErlane*, David</td>
<td>McKay, Elton</td>
<td>Middleton*, Tom A.</td>
</tr>
<tr>
<td>Moffat, Kevin ‘Spook’ A.</td>
<td>Mulvey, Anthony ‘Champ’</td>
<td>Newman*, Sam H.</td>
</tr>
<tr>
<td>O’Keefe*, Lindsay</td>
<td>Olivey*, David</td>
<td>Olsen*, Arthur O.</td>
</tr>
<tr>
<td>Olsen*, Clive E.</td>
<td>Picard*, Robert (Bob)</td>
<td>Raymond*, Ernie</td>
</tr>
<tr>
<td>Rees, Raymond ‘Raz’</td>
<td>Roberts*, A. ‘Ritchie’</td>
<td>Routh*, Jim</td>
</tr>
<tr>
<td>Russell, Bryn</td>
<td>Russell, Janice</td>
<td>Settree, Lisa</td>
</tr>
<tr>
<td>Settree, Wayne ‘Zulu’</td>
<td>Skelton, Jordi</td>
<td>Spiteri, Mark ‘Angus’</td>
</tr>
<tr>
<td>Stacey*, Tom</td>
<td>Stephens*, G. (Reg)</td>
<td>Still*, Arthur</td>
</tr>
<tr>
<td>Stoker, Darrin</td>
<td>Taylor*, Norm R.</td>
<td>Thompson, Martin</td>
</tr>
<tr>
<td>White, John</td>
<td>Woodward, Michael</td>
<td></td>
</tr>
<tr>
<td>* Deceased</td>
<td></td>
<td></td>
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
const OurClubLifeMembers = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="lifemembers" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ textAlign: 'center', px: 0 }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '1000px' }}>
            <Typography variant="h3" component="h2">
              South Curl Curl SLSC Life Members
            </Typography>
            {/* <Typography variant="body2">Important South Curl Curl documentation</Typography> */}
          </Stack>
        </Box>
        <Stack sx={{ px: 0, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr' }}>
          <Stack></Stack>
          <Stack>
            <Stack spacing={1}>
              {ourLifeMembers.map((item) => (
                <OverviewItem key={item.text} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </StyledRootResponsive>
  );
};
export default OurClubLifeMembers;

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
