import Image from 'next/image';

import Carousel from 'react-material-ui-carousel';
import { CardMedia, Box, Typography } from '@mui/material';
import { bgGradient } from 'src/lib/cssStyles';
import { styled, alpha, useTheme } from '@mui/material/styles';

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

    <StyledRoot>
      <Box sx={{ mx: { xs: 0, sm: 2 } }} pt={10} pb={2}>
        <Typography textAlign="center" variant="h2" m={2}>
          South Curl Curl Surf Life Saving Club
        </Typography>
        <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
          Summer is here, Nippers are on and the sand is back on our beautiful beach!!
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
          {items.map((item, i) => (
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
      </Box>
    </StyledRoot>
  );
}

function Item({ item }) {
  return (
    <Box sx={{ height: '275', overflow: 'hidden' }}>
      {/* <Image alt={item.description} src={item.src} fill objectFit="cover" /> */}
      <CardMedia height={275} component="img" alt={item.description} src={item.src} />
    </Box>
  );
}
