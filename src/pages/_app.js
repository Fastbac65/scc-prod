// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// // lightbox
// import 'yet-another-react-lightbox/styles.css';
// import 'yet-another-react-lightbox/plugins/captions.css';
// import 'yet-another-react-lightbox/plugins/thumbnails.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// fullcalendar over-rides
import 'src/theme/fullcalendar.css';

// ----------------------------------------------------------------------

import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
// next
import Head from 'next/head';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import enAU from 'date-fns/locale/en-AU';

// theme
import ThemeProvider from 'src/theme';

// utils
import createEmotionCache from 'src/lib/createEmotionCache';
// components
import ProgressBar from 'src/components/progress-bar';
import { SettingsProvider } from 'src/components/settings';
import MotionLazyContainer from 'src/components/animate/MotionLazyContainer';
import LoadingCircular from 'src/components/loading-circular/LoadingCircular';
import Notification from 'src/components/notification/Notification';
import Modal from 'src/components/modal/Modal';

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>South Curl Curl Surf Life Saving Club</title>
        <meta
          name="description"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <meta property="og:url" content="https://www.southcurlcurlslsc.com.au" />
        <meta property="og:site_name" content="South Curl Curl Surf Life Saving" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="South Curl Curl Surf Life Saving Club" />
        <meta
          property="og:description"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <meta property="og:image" content="https://southcurlcurlslsc.com.au/assets/images/scc-fb-grp.jpeg" />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="southcurlcurlslsc.com.au" />
        <meta property="twitter:url" content="https://www.southcurlcurlslsc.com.au" />
        <meta name="twitter:title" content="South Curl Curl Surf Life Saving Club" />
        <meta
          name="twitter:description"
          content="South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise."
        />
        <meta name="twitter:image" content="https://southcurlcurlslsc.com.au/assets/images/scc-fb-grp.jpeg" />

        <link rel="canonical" href="https://www.southcurlcurlslsc.com.au" />
        <link rel="alternate" media="only screen and (max-width: 640px)" href="https://www.southcurlcurlslsc.com.au" />
      </Head>
      <CacheProvider value={emotionCache}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enAU}>
          <SettingsProvider>
            <ThemeProvider>
              <LoadingCircular />
              <Modal />
              <Notification />
              <MotionLazyContainer>
                {/* <ProgressBar /> */}
                {getLayout(<Component {...pageProps} />)}
              </MotionLazyContainer>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </CacheProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
