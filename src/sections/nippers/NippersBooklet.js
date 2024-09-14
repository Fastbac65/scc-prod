import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import NextLink from 'next/link';
// components
import Iconify from 'src/components/iconify/Iconify';
import Markdown from 'src/components/markdown/Markdown';
import { bgGradient } from 'src/lib/cssStyles';

// ----------------------------------------------------------------------
const StyledRootResponsive = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0, 4),
  ...bgGradient({
    direction: 'to bottom',

    startColor: `${alpha(theme.palette.background.neutral, 0.7)} 0%`,
    endColor: `${alpha(theme.palette.background.neutral, 0.95)} 80%`,
    // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.7)} 0%`,
    // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0.95)} 70%`,
    imgUrl: '/assets/images/gusto1.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    // padding: theme.spacing(6, 0, 4),
    ...bgGradient({
      direction: 'to bottom',
      startColor: `${alpha(theme.palette.background.neutral, 0.6)} 20%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 98%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/gusto1.jpeg',
    }),
    backgroundPosition: 'center, top',
    // backgroundSize: 'cover',
  },
}));

// ----------------------------------------------------------------------

const nippersBookletContent = [
  {
    icon: 'mdi:umbrella-beach',
    label: 'Uniform & Gear Sales',
    text: `<p>For safety reasons ALL children MUST wear a cap during Nippers activities. Different cap colours are assigned for each age group, see booklet. The caps are also reversible as SCC caps for competition or assessment. ALL participants in aquatic activities must also wear a high visibility vest. Children are also encouraged to wear club costumes and club swimsuits. Club caps are to be removed once Nippers has finished.</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Age Group Calculation',
    text: `<p>The age group for your child is calculated from the age they are on or prior to 30th Sept. For example, if your child is 11 on the 30th September they will be in the Under 12 age group for the season. Whilst we understand that the kids like to participate with their mates, Surf Life Saving states that each child should participate and compete in their correct age category.</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Hey Parents... Bronze Medallion Anyone?',
    text: `<p>At the beginning and mid season SCC runs training for those interested in obtaining their Bronze Medallion. The Bronze Medallion course can be one of the most rewarding courses you can attempt and a great personal achievement. Once qualified it helps us meet our water safety requirements as SLSA mandates that nippers water safety must be performed by proficient Bronze Medallion holders.</p>`,
  },
  {
    icon: 'mdi:umbrella-beach',
    label: 'Working With Children',
    text: `<p>Any parent assisting on the beach should be registered as an associate member to cover insurance issues. Age Managers and Water Safety (where outside your own child’s age group) also need to apply for and show proof of approval for “Working With Children Check” for child protection. Please complete the registration process at: <a target='_blank' rel='noopener' href='https://www.service.nsw.gov.au/transaction/apply-for-a-working-with-children-check' >Working With Children Check</a></p>`,
  },
];
const NippersBooklet = () => {
  return (
    <StyledRootResponsive>
      <div style={{ position: 'relative' }}>
        <div id="booklet" style={{ position: 'absolute', top: '-80px' }} />
      </div>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Typography variant="h3" component="h2">
              Nippers Information Booklet
            </Typography>
            <Typography variant="body2">
              A couple of other keys points below. For everything else we have created the ultimate Nippers Information Booklet, link below. We also use TeamApp to provide members up to date information on
              carnivals and events. Instructions to install TeamApp also provided within the booklet.
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {nippersBookletContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ py: 2 }}>
            <Typography variant="body2">
              Details on Nippers SurfEd programs, Nippers calendar for 2024/2025, Carnivals, Proficiencies required per age group, Age group manager details and TeamApp setup instructions are all found in the
              Nippers Information Booklet
            </Typography>
          </Stack>
        </Box>
        <Link target="_blank" rel="noopener" href="https://southcurlcurlslsc.com.au/assets/docs/SCCNippersInfoBooklet2024-25.pdf">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            SCC Nippers Information Booklet
          </Button>
        </Link>
      </Container>
    </StyledRootResponsive>
  );
};
export default NippersBooklet;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      {/* <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box> */}
      <Stack spacing={0}>
        <Typography variant="h5">{label}</Typography>
        {/* <Typography color="text.secondary" variant="body2">
          {text}
        </Typography> */}
        <Markdown content={text} />
      </Stack>
    </Stack>
  );
}
