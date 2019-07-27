import React from "react"
import App, { Container } from "next/app"
import Layout from "Components/layout"
import { globalFetch, host } from "Config/api"
import "isomorphic-unfetch"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let data = null

    if (ctx.req) {
      const fetchHeader = fetch(`${host}/api/menu/header`)
      const fetchFooter = fetch(`${host}/api/menu/footer`)

      await globalFetch([
        fetchHeader,
        fetchFooter
      ])
        .then(_data => {
          data = _data
        })
    }

    return { pageProps, data }
  }

  render() {
    const { Component, pageProps, data } = this.props
    return (
      <Container>
        <Layout data={data}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
