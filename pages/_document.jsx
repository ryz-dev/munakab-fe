import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, shrink-to-fit=no, user-scalable=no"
          />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.min.css" rel="stylesheet" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/muna.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'id', includedLanguages: 'id,en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element')
            }

          `}}/>
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </body>
      </Html>
    )
  }
}
