import React from "react"
import App, { Container } from "next/app"
import Layout from "Components/layout"
import { globalFetch } from "Config/api"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let data = null

    await globalFetch("/api/menu/footer")
      .then(_data => {
        data = _data
      })

    return { pageProps, data }
  }

  render() {
    const { Component, pageProps, data } = this.props
    console.log(data)
    return (
      <Container>
        <Layout dataFooter={data}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
