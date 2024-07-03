import Image from 'next/image';
import NextLink from 'next/link';

import Carousel from 'react-material-ui-carousel';
import { CardMedia, Box, Typography, Container, Stack, Link, Button } from '@mui/material';
import { bgGradient } from 'src/lib/cssStyles';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Iconify from 'src/components/iconify';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.5),
    imgUrl: '/assets/images/scc-fb-grp.jpeg',
  }),
  position: 'relative',
  overflow: 'hidden',
}));

export default function HomeLanding(props) {
  const theme = useTheme();
  let count = useRef(0);
  let countm = useRef(0);

  const [carousel, setCarousel] = useState([]);

  var items = [
    {
      src: '/assets/images/header1.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/header12.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/header13.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/header8.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/header10.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/gusto5wide.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/header11.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/header15.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/header14.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/champs6wide.jpeg',
      description: 'South Curl Curl SLSC',
    },
    {
      src: '/assets/images/gusto3.jpeg',
      description: 'South Curl Curl SLSC',
    },

    {
      src: '/assets/images/gusto2wide.jpeg',
      description: 'South Curl Curl SLSC',
    },
  ];
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  useMemo(() => {
    setCarousel(shuffle(items));
    countm.current++;
  }, []);

  return (
    <StyledRoot>
      <Stack direction="row" sx={{ mx: 0, px: 0, justifyContent: 'center' }}>
        <Box sx={{ mx: { xs: 0, sm: 1, md: 2 }, maxWidth: 1000, textAlign: 'center' }} pt={10} pb={2}>
          <Typography textAlign="center" variant="h2" component="h1" m={2}>
            South Curl Curl Surf Life Saving Club
          </Typography>
          <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
            Another season comes to an end and our beaches are no longer patrolled. Stay safe!!
          </Typography>
          {/* <PreloadImg /> */}

          <Carousel
            interval={6000}
            duration={4000}
            height={250}
            autoPlay={true}
            sx={{ borderRadius: 2 }}
            indicatorIconButtonProps={{
              style: {
                display: 'none',
                // color: 'blue', // 3
              },
            }}
          >
            {carousel.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
          <Box sx={{ background: 'rgba(0,0,0,0.3)', borderRadius: 2 }}>
            <Typography
              color="white"
              textAlign="center"
              variant="body1"
              py={3}
              mt={1}
              mx={2}
              // sx={{ background: 'rgba()' }}
            >
              South Curl Curl Surf Life Saving Club has been in existence since 1918 and no lives have been lost whilst the beach has been patrolled. The Club places great emphasis on training club members in
              life saving skills to ensure this tradition is maintained. The South Curl Curl Surf Life Saving Club is a volunteer organisation whose basic objective is to provide the highest possible level of
              water safety for our locals, visitors and nippers.
            </Typography>
          </Box>
          <Stack spacing={1} alignItems={{ xs: 'center' }} sx={{ pt: 2 }}>
            <Stack direction="row" spacing={1}>
              <Link target="_blank" rel="noopener" href="https://pnpnet.qvalent.com/OnlinePaymentServlet?cd_community=SLSA&cd_currency=AUD">
                <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
                  Payments & Donations
                </Button>
              </Link>
              <Link component={NextLink} href="/ourclub">
                <Button color="primary" variant="contained" endIcon={<Iconify icon="carbon:launch" />}>
                  SCC Sponsorship
                </Button>
              </Link>
            </Stack>
            <Typography sx={{ pt: 2 }}>South Curl Curl Socials</Typography>
            <Stack direction="row" spacing={1}>
              <Link target="_blank" rel="noopener" href="https://www.facebook.com/groups/2409768001/">
                <Button size="small" sx={{ borderRadius: 25 }} color="secondary" variant="contained" startIcon={<Iconify icon="mdi:facebook" />}>
                  SCC
                </Button>
              </Link>
              <Link target="_blank" rel="noopener" href="https://www.instagram.com/southcurlyboaties/">
                <Button size="small" sx={{ borderRadius: 25 }} color="secondary" variant="contained" startIcon={<Iconify icon="mdi:instagram" />}>
                  Boaties
                </Button>
              </Link>
              <Link target="_blank" rel="noopener" href="https://www.instagram.com/scchampionlifesavers/">
                <Button size="small" sx={{ borderRadius: 25 }} color="secondary" variant="contained" startIcon={<Iconify icon="mdi:instagram" />}>
                  Champs
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </StyledRoot>
  );
}

function Item({ item }) {
  return (
    <Box sx={{ height: '275', overflow: 'hidden' }}>
      {/* <Image alt={item.description} src={item.src} fill objectFit="cover" /> */}
      <CardMedia height={275} component="img" alt={item.description} src={item.src} sx={{ objectPosition: 'top' }} />
    </Box>
  );
}
