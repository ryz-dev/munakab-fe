import React from "react"
import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    return { ...page }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, shrink-to-fit=no, user-scalable=no"
          />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
