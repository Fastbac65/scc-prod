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
import palette from 'src/theme/palette';

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

const Meta = () => (
  <>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    {/* PWA primary color */}
    <meta name="theme-color" content={palette('dark').primary.main} />
    {/* <meta name="description" content="South Curl Curl Surf Life Saving Club" /> */}
    <meta name="keywords" content="surf lifesaving first aid patrol membership south curly" />
    <meta name="author" content="TezD" />
    {/* stop iOS causing hydration issues */}
    <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
  </>
);

const Favicon = () => (
  <>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any"></link>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
  </>
);

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <Favicon />
        <Meta />
      </Head>

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
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
