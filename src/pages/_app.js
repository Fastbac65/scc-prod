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

  const defaultTitle = 'South Curl Curl Surf Life Saving Club';
  const defaultDescription =
    'South Curl Curl Surf Life Saving Club is dedicated to its core mission of delivering optimal water safety. Our club places significant focus on equipping its members with the highest level of lifesaving expertise.';
  const defaultUrl = 'https://southcurlcurlslsc.com.au';
  const defaultImage = 'https://southcurlcurlslsc.com.au/assets/images/scc-fb-grp.jpeg';

  const { title, description, image, canonical } = pageProps;

  const openGraphData = [
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: title || defaultTitle },
    { property: 'og:description', content: description || defaultDescription },
    { property: 'og:title', content: title || defaultTitle },
    { property: 'og:url', content: canonical || defaultUrl },
    { property: 'og:image', content: image || defaultImage },
    { property: 'og:image:alt', content: defaultTitle },
    { property: 'og:image:width', content: '960' },
    { property: 'og:image:height', content: '675' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title || defaultTitle },
    { name: 'twitter:description', content: description || defaultDescription },
    { name: 'twitter:image', content: image || defaultImage },
    { property: 'twitter:url', content: canonical || defaultUrl },
    { property: 'twitter:domain', content: 'southcurlcurlslsc.com.au' },
    { property: 'twitter:image', content: image || defaultImage },
  ];

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        {openGraphData.map((og) => (
          <meta key={og.property || og.name} {...og} />
        ))}
        <link rel="canonical" href={canonical || defaultUrl} />
        <link rel="alternate" media="only screen and (max-width: 640px)" href={canonical || defaultUrl} />
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
