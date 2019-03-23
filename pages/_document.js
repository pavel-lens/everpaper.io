import Document, { Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css?family=Dancing+Script|EB+Garamond:400,500,600|Source+Sans+Pro"
            rel="stylesheet"
          /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700&amp;subset=latin-ext"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Tinos:400,400i,700,700i&amp;subset=latin-ext"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700&amp;subset=latin-ext"
            rel="stylesheet"
          />

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />

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
