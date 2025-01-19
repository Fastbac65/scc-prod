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
<td>Alldis, David</td>
<td>Atkins, Steve</td>
</tr>
<tr>
<td>Backhouse*, Clive N.</td>
<td>Barlow, Rodney</td>
<td>Bland*, Jim</td>
</tr>
<tr>
<td>Brown, Andy</td>
<td>Brown*, Len A.</td>
<td>Brown, Mark E.</td>
</tr>
<tr>
<td>Brown, Roper ‘Buster’ L. S.</td>
<td>Buckingham*, Bruce</td>
<td>Buckingham, Robert (Bob)</td>
</tr>
<tr>
<td>Cassidy, John ‘Casso’</td>
<td>Cuneo, Anthony</td>
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
<td>Jones*, Mervyn H.</td>
</tr>
<tr>
<td>Jones, Darren</td>
<td>Joyce*, Denzil [O.A.M.]</td>
<td>Kuhn, Charles ‘Chicka’</td>
</tr>
<tr>
<td>Leggett*, Charles</td>
<td>Longley, Charles</td>
<td>Lowery,&nbsp;Michelle</td>
</tr>
<tr>
<td>Lowther, Peter</td>
<td>MacPherson*, William (Bill) J.C.</td>
<td>MacPherson*, Robert (Bob) G.</td>
</tr>
<tr>
<td>McColm*, John G.</td>
<td>McErlane*, David</td>
<td>McKay, Elton</td>
</tr>
<tr>
<td>Marvin, Ron L.</td>
<td>Middleton*, Tom A.</td>
<td>Moffat, Kevin ‘Spook’ A.</td>
</tr>
<tr>
<td>Mulvey, Anthony ‘Champ’</td>
<td>Newman*, Sam H.</td>
<td>O’Keefe*, Lindsay</td>
</tr>
<tr>
<td>Olsen*, Arthur O.</td>
<td>Olsen*, Clive E.</td>
<td>Olivey*, David</td>
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
<tr>
<td>Woodward, Michael</td>
<td>Dominish, Graeme</td>
<td>Lowery, Robert</td>
</tr>
</tr>
<tr>
<td>Blake, C.E.</td>
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
