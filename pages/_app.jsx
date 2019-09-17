import React from "react"
import App, { Container } from "next/app"
import Layout from "Components/layout"
import { globalFetch, host } from "Config/api"
import "isomorphic-unfetch"
import Router from "next/router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import Error from 'next/error'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let data = null
    let errCode

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
        .catch(() => {
          const { res } = ctx
          errCode = res.statusCode
        })
    }

    return { pageProps, data, errCode }
  }
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', () => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', () => {
      NProgress.done()
    })
  }

  render() {
    const { Component, pageProps, errCode } = this.props
    console.log("-->", errCode)
    if (errCode) {
      return <Error statusCode={errCode} />
    }

    return (
      <Container>
        <Layout data={this.state.data}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
