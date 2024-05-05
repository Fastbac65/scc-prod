import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
import { ST } from 'next/dist/shared/lib/utils';
// components
import Iconify from 'src/components/iconify/Iconify';
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
    imgUrl: '/assets/images/cafetender.jpeg',
  }),
  [theme.breakpoints.up('sm')]: {
    ...bgGradient({
      direction: 'to left',
      startColor: `${alpha(theme.palette.background.neutral, 0)} 5%`,
      endColor: `${alpha(theme.palette.background.neutral, 1)} 50%`,
      // startColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 0)} 0%`,
      // endColor: `${alpha(theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800], 1)} 55%`,
      imgUrl: '/assets/images/tenderCafe.jpeg',
    }),
    backgroundPosition: 'center, right',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

const tenderContent = [
  {
    icon: 'mdi:flag-variant-outline',
    label: 'SCC Cafe RFP Process',
    text: 'A rigorous assessment process for both non-price and price components resulted in a cohesive ranking of the proposals including benefits to the local community and SLSC club, with the shortlisted candidates being recommended to interview for final selection. The quality of the submissions was very strong and also provided us with current market insights including recommendations for improvement at such an iconic location as South Curl Curl beach.',
  },
  {
    icon: 'mdi:flag-variant-outline',
    label: 'Beach Eatery at South Curl Curl',
    text: 'The successful management operators of the new Beach Eatery at South Curl Curl are Shahid & Anna Rahman. They are local business people with a range of experience (including ups and downs during COVID) and currently run the successful Fish Face Cafe in Balgowlah. We thank Lisa and Brendan, the previous managers, for their commitment to the SCC Cafe over the past years and wish them the best in their new endeavours.',
  },
  {
    icon: 'mdi:flag-variant-outline',
    label: 'Commitment to the Community',
    text: 'To demonstrate their commitment to the community, Shahid and his chef have been working preparing and serving food at the cafe this past week with the previous managers to help facilitate a smooth transition (including working at no charge as well as helping to purchase current stock). In addition, they have been working with current staff and offering them a position going forward.',
  },
  {
    icon: 'mdi:flag-variant-outline',
    label: 'A New Era Begins',
    text: 'We are excited about the new Beach Eatery on South Curl Curl Beach with Shahid & Anna already talking to regulars and locals as well as SLSC club members about how they can best serve the community moving forward.  Please come down and support the SLS club and enjoy a coffee or a meal at South Curly.',
  },
];
const HomeTender = () => {
  return (
    <StyledRootResponsive>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3" component="h2">
              SCC Cafe RFP successfully completed.
            </Typography>
            <Typography variant="body2">
              The SCC Cafe Request for Proposal was triggered from the previous cafe operator giving formal notice combined with new Northern Beaches council lease for the surf club. To ensure a formal fair and
              equitable process was followed for the RFP, the club followed ICAC guidelines and received a great response with almost 30 interested parties and 21 formal submissions. Thank you to Manly Observer
              for keeping the local community informed and getting the message out!
            </Typography>
          </Stack>
        </Box>

        <Stack sx={{ px: 1, py: 2, textAlign: 'left' }} columnGap={0} display="grid" gridTemplateColumns={{ xs: '1fr', sm: '3fr 1fr' }}>
          <Stack>
            <Stack spacing={1}>
              {tenderContent.map((item) => (
                <OverviewItem key={item.label} icon={item.icon} label={item.label} text={item.text} />
              ))}
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>
        {/* <Stack spacing={2} direction="row" display="flex" alignItems="center"> */}
        {/* <Link sx={{ mr: 1 }} target="_blank" rel="noopener" href="https://southcurlcurlslsc.com.au/assets/docs/SouthCurlCurlCafeRFP-6March2024.pdf">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            SCC RFP Document
          </Button>
        </Link>
        <Link target="_blank" rel="noopener" href="https://southcurlcurlslsc.com.au/assets/docs/SCC-CafeRFP-Questions&Response-19March24.pdf">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            SCC RFP Q&A
          </Button>
        </Link> */}
        {/* </Stack> */}

        <Box display="flex" justifyContent="center">
          <Stack sx={{ pt: 2, maxWidth: '800px' }}>
            <Typography variant="caption">For any further clarifications plese email scc_cafe_rfp@southcurlcurlslsc.com.au.</Typography>
          </Stack>
        </Box>
      </Container>
    </StyledRootResponsive>
  );
};
export default HomeTender;

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Stack spacing={2.5} direction="row" alignItems="flex-start">
      <Box sx={{ width: 24, height: 24 }}>
        <Iconify icon={icon} />
      </Box>
      <Stack spacing={0.5}>
        <Typography>{label}</Typography>
        <Typography color="text.secondary" variant="body2">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
