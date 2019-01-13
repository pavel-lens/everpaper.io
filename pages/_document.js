import Document, { Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Dancing+Script|EB+Garamond:400,500,600|Source+Sans+Pro"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          {this.props.styleTags}
        </Head>
        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
