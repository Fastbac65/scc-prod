import NextLink from 'next/link';

import { Link, Paper, Typography, Box, useTheme } from '@mui/material';
import CarouselBasic1 from './CarouselBasic1';

const Footer = () => {
  const theme = useTheme();

  const sponsors = [
    {
      href: 'https://sydneybeachhomes.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/sbh-dark.webp' : '/assets/sponsors/sbh-white.jpeg',
    },
    {
      href: 'http://www.bendigobank.com.au/about_us/locate_us/locator_detail.asp?BranchNumber=9238',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/light-bendigo.jpeg' : '/assets/sponsors/light-bendigo.jpeg',
    },
    {
      href: 'https://www.communicloud.com/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/comcloud.jpeg' : '/assets/sponsors/comcloud.jpeg',
    },
    {
      href: 'https://okanui.com/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/OKA_PRIMARYLOGO-1.jpeg' : '/assets/sponsors/OKA_PRIMARYLOGO-1.jpeg',
    },
    {
      href: 'https://www.thebeacheatery.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/beacheatery.jpeg' : '/assets/sponsors/beacheatery.jpeg',
    },
    {
      href: 'https://deewhyrsl.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/deewhyrsl.jpeg' : '/assets/sponsors/deewhyrsl.jpeg.jpeg',
    },
    {
      href: 'https://solitonnetworkconsulting.com/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/solitonnetworkconsulting.jpeg' : '/assets/sponsors/solitonnetworkconsulting.jpeg',
    },
    {
      href: 'https://www.manlyleagues.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/manlyleagues.jpeg' : '/assets/sponsors/manlyleagues.jpeg',
    },
    {
      href: 'https://www.balgowlahrsl.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/balgowlahrsl.jpeg' : '/assets/sponsors/balgowlahrsl.jpeg',
    },
    {
      href: 'https://arkoenergy.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/arkoenergy.jpeg' : '/assets/sponsors/arkoenergy.jpeg',
    },
    {
      href: 'https://localvet.com.au/Harbord/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/harbordvet.jpeg' : '/assets/sponsors/harbordvet.jpeg',
    },
    {
      href: 'https://www.humel.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/humel-dark1.jpeg' : '/assets/sponsors/humel-light.jpeg',
    },
    {
      href: 'https://www.afis.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/afis.jpeg' : '/assets/sponsors/afis.jpeg',
    },
    {
      href: 'https://www.chrisflemmingbuilding.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/chrisflemmingbuilding.jpeg' : '/assets/sponsors/chrisflemmingbuilding.jpeg',
    },
    {
      href: 'https://www.cooksplumbing.com.au/',
      src: theme.palette.mode === 'dark' ? '/assets/sponsors/cooks.jpeg' : '/assets/sponsors/cooks.jpeg',
    },
  ];

  return (
    //sponsors
    <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
      {/* <Paper sx={{ background: theme.palette.mode === 'dark' ? '#000' : 'white', boxShadow: 0, borderRadius: 0 }}>
        <Grid container sx={{ px: 0, display: 'flex', alignItems: 'center' }}>
          {sponsors.map((sponsor) => (
            <Grid item key={sponsor.src} xs={12} sm={4}>
              <Link href={sponsor.href} target="_blank" rel="noopener">
                <CardMedia height="200px" href={sponsors.href} component="img" alt="" src={sponsor.src} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper> */}
      <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: 2 }}>
        <CarouselBasic1 data={sponsors} />
      </Box>
      <Paper sx={{ boxShadow: 0, borderRadius: 0 }}>
        <Typography pt={1} mb={1} paragraph color="text-primary" variant="caption">
          Email:{' '}
          <Link color={theme.palette.mode === 'dark' ? 'secondary.lighter' : 'secondary'} href="mailto:mail@southcurlcurlslsc.org">
            mail@southcurlcurlslsc.org
          </Link>
          &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; Tel: +61-2-99385430&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; Mail: P.O. Box 18, Freshwater NSW 2096
        </Typography>
        <Typography color="text-primary" pb={1} paragraph variant="caption">
          © Copyright 2026 | South Curl Curl Surf Life Saving club &nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <Link component={NextLink} color={theme.palette.mode === 'dark' ? 'secondary.lighter' : 'secondary'} href="/privacy">
            Terms & Conditions
          </Link>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <Link component={NextLink} color={theme.palette.mode === 'dark' ? 'secondary.lighter' : 'secondary'} href="/privacy">
            Privacy
          </Link>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Site by TezD
        </Typography>
      </Paper>
    </Box>
  );
};
export default Footer;
