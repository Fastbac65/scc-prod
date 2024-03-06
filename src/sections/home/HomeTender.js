import { Box, Typography, Stack, styled, alpha, Container, Button, Link } from '@mui/material';
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
    text: 'The Club is seeking proposals from parties who believe they have the necessary skills and experience to operate the facility for the benefit of the Surf Club, the local community and visitors to Curl Curl. All submissions have to be received via email no later than 5.00pm on Wednesday 27th March 2024.',
  },
  {
    icon: 'mdi:flag-variant-outline',
    label: 'The Opportunity To Be Awesome',
    text: 'Over the past five years, from 2019 to 2023, the café has averaged a turnover of $1,524,000 per annum. The café is fully equipped and furnished. It offers both indoor and outdoor dining plus take-away food and drinks.',
  },
  {
    icon: 'mdi:flag-variant-outline',
    label: 'Current SCC Cafe Operations',
    text: 'Current trading hours are 6:30am – 2:30pm, however longer trading hours are welcome. The Club premises are located on Crown land and the Surf Club holds a new 20 year lease with Northern Beaches Council. If you are interested in responding please see the link below to download our RFP document.',
  },
];
const HomeTender = () => {
  return (
    <StyledRootResponsive>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ maxWidth: '800px' }}>
            <Typography variant="h3" component="h2">
              SCC Cafe Request For Proposal
            </Typography>
            <Typography variant="body2">
              South Curl Curl SLSC is engaging the market to appoint a suitably qualified respondent to take over operations of the beach café at South Curl Curl. South Curl Curl Surf Life Saving Club
              Incorporated is located at the southern end of Curl Curl Beach on Carrington Parade, Curl Curl. The café is an integral part of the Club, is busy year round and has been operating continuously for
              20 years.
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
        <Link target="_blank" rel="noopener" href="https://southcurlcurlslsc.com.au/assets/docs/SouthCurlCurlCafeRFP-6March2024.pdf">
          <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
            SCC RFP Document
          </Button>
        </Link>
        <Box display="flex" justifyContent="center">
          <Stack sx={{ pt: 2, maxWidth: '800px' }}>
            <Typography variant="caption">
              All communication including any further clarifications or requests for information must be via scc_cafe_rfp@southcurlcurlslsc.com.au. No direct contact is to be made with any South Curl Curl
              Committee member, employee or contractor.
            </Typography>
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
