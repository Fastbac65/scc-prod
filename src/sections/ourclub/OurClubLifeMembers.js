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
<td>Blake, C.E.</td>
</tr>
<tr>
<td>Bland*, Jim</td>
<td>Brown, Andy</td>
<td>Brown*, Len A.</td>
</tr>
<tr>
<td>Brown, Mark E.</td>
<td>Brown, Roper ‘Buster’ L. S.</td>
<td>Buckingham*, Bruce</td>
</tr>
<tr>
<td>Buckingham, Robert (Bob)</td>
<td>Cassidy, John ‘Casso’</td>
<td>Cuneo, Anthony</td>
</tr>
<tr>
<td>Dominish, Graeme</td>
<td>Dossetor, Graeme</td>
<td>Drury, Jenny</td>
</tr>
<tr>
<td>Flemming, Christopher ‘Ribs’</td>
<td>Flemming,&nbsp;Lyndall</td>
<td>Flower*, Campbell</td>
</tr>
<tr>
<td>Gloag, Mick</td>
<td>Good, William (Billy)</td>
<td>Harbron*,&nbsp;Kenneth</td>
</tr>
<tr>
<td>Harradine, Kevin</td>
<td>Hewitt, Jeffrey</td>
<td>Hogan*, Mick</td>
</tr>
<tr>
<td>Hourigan*, Cecil A.</td>
<td>Jones, Darren</td>
<td>Jones*, Mervyn H.</td>
</tr>
<tr>
<td>Joyce*, Denzil [O.A.M.]</td>
<td>Kuhn, Charles ‘Chicka’</td>
<td>Leggett*, Charles</td>
</tr>
<tr>
<td>Longley, Charles</td>
<td>Lowery,&nbsp;Michelle</td>
<td>Lowery, Robert</td>
</tr>
<tr>
<td>Lowther, Peter</td>
<td>MacPherson*, Robert (Bob) G.</td>
<td>MacPherson*, William (Bill) J.C.</td>
</tr>
<tr>
<td>Marvin, Ron L.</td>
<td>McColm*, John G.</td>
<td>McErlane*, David</td>
</tr>
<tr>
<td>McKay, Elton</td>
<td>Middleton*, Tom A.</td>
<td>Moffat, Kevin ‘Spook’ A.</td>
</tr>
<tr>
<td>Mulvey, Anthony ‘Champ’</td>
<td>Newman*, Sam H.</td>
<td>O’Keefe*, Lindsay</td>
</tr>
<tr>
<td>Olivey*, David</td>
<td>Olsen*, Arthur O.</td>
<td>Olsen*, Clive E.</td>
</tr>
<tr>
<td>Picard*, Robert (Bob)</td>
<td>Raymond*, Ernie</td>
<td>Rees, Raymond ‘Raz’</td>
</tr>
<tr>
<td>Roberts*, A. ‘Ritchie’</td>
<td>Routh*, Jim</td>
<td>Russell, Bryn</td>
</tr>
<tr>
<td>Russell, Janice</td>
<td>Settree, Lisa</td>
<td>Settree, Wayne ‘Zulu’</td>
</tr>
<tr>
<td>Skelton, Jordi</td>
<td>Spiteri, Mark ‘Angus’</td>
<td>Stacey*, Tom</td>
</tr>
<tr>
<td>Stephens*, G. (Reg)</td>
<td>Still*, Arthur</td>
<td>Stoker, Darrin</td>
</tr>
<tr>
<td>Taylor*, Norm R.</td>
<td>Thompson, Martin</td>
<td>White, John</td>
</tr>
<tr>
<td>Woodward, Michael</td>
<td></td>
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
