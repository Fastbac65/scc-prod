import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, CardMedia, Link } from '@mui/material';
// components
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function CarouselBasic1({ data }) {
  const carouselRef = useRef(null);

  // const [currentIndex, setCurrentIndex] = useState(0);

  const carouselSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],

    // beforeChange: (current, next) => setCurrentIndex(next),
  };

  // const handlePrev = () => {
  //   carouselRef.current?.slickPrev();
  // };

  // const handleNext = () => {
  //   carouselRef.current?.slickNext();
  // };

  return (
    <Card>
      <Carousel ref={carouselRef} {...carouselSettings}>
        {data.map((item) => (
          // <Grid item key={item.src} xs={12} sm={4}>
          <Link key={item.src} href={item.href} target="_blank" rel="noopener">
            <CardMedia height="200px" href={item.href} component="img" alt="" src={item.src} />
          </Link>
          // </Grid>
          // <Box key={item.href} sx={{ maxHeight: '100px' }}>
          //   <Image alt={item.title} src={item.src} height="200px" />
          // </Box>
        ))}
      </Carousel>

      {/* <CarouselArrowIndex index={currentIndex} total={data.length} onNext={handleNext} onPrev={handlePrev} /> */}
    </Card>
  );
}

CarouselBasic1.propTypes = {
  data: PropTypes.array,
};
