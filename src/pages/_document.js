import PropTypes from 'prop-types';
import * as React from 'react';
// next
import Document, { Html, Head, Main, NextScript } from 'next/document';
// emotion
import createEmotionServer from '@emotion/server/create-instance';
// utils
import createEmotionCache from 'src/lib/createEmotionCache';
// theme
import { primaryFont } from 'src/theme/typography';
import palette from 'src/theme/palette';

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
// ----------------------------------------------------------------------
export default function MyDocument({ emotionStyleTags }) {
  return (
    <Html lang="en" className={primaryFont.className}>
      <Head>
        <Favicon />
        <Meta />
        {/* Emotion */}
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.propTypes = {
  emotionStyleTags: PropTypes.array.isRequired,
};

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
