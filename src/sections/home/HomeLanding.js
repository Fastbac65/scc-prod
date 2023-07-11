import Image from 'next/image';

import Carousel from 'react-material-ui-carousel';
import { CardMedia, Box, Typography } from '@mui/material';
import { bgGradient } from 'src/utils/cssStyles';
import { styled, alpha, useTheme } from '@mui/material/styles';

import scc1 from 'src/assets/images/scc-fb-grp.jpeg';

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
      src: '/assets/images/header2.jpeg',
      description: 'What ever!',
    },
    {
      src: '/assets/images/header3.jpeg',
      description: 'Hello World!',
    },
    {
      src: '/assets/images/header4.jpeg',
      description: 'Hello Terry!',
    },
    {
      src: '/assets/images/header5.jpeg',
      description: 'Hello Terry!',
    },
    {
      src: '/assets/images/header7.jpeg',
      description: 'Hello Terry!',
    },
    {
      src: '/assets/images/header8.jpeg',
      description: 'Hello Terry!',
    },
  ];
  console.log(theme.palette.mode === 'dark');

  return (
    <>
      <StyledRoot>
        <Box mx={2} pt={10}>
          <Typography textAlign="center" variant="h4" m={2}>
            South Curl Curl Surf Life Saving Club
          </Typography>
          <Typography textAlign="center" variant="body1" color="text" m={2} mb={4}>
            Summer is here, Nippers are on and the sand is back on our beautiful beach!!
          </Typography>
          {/* <PreloadImg /> */}

          <Carousel interval={6000} duration={4000} height={250} autoPlay={true} sx={{ borderRadius: 2 }}>
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
    </>
  );
}

function Item({ item }) {
  return (
    <Box sx={{ height: '250', overflow: 'hidden' }}>
      <Image alt={item.description} src={item.src} fill objectFit="cover" />
      {/* <CardMedia height={250} component="img" alt="" src={props.item.src} /> */}
    </Box>
  );
}
