import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale} title={AppConfig.title}>
        <Head>
          <title>{AppConfig.title}</title>
          <link
            rel="icon"
            type="image/x-icon"
            href="https://res.cloudinary.com/dgpuwpmjk/image/upload/v1706151839/mailtoshi/favicon_pp55xt.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
