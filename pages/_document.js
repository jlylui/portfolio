import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/static/css/style.css`}
          />
          <link
            rel="stylesheet"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/static/css/material-kit.css`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
