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
      // const fetchHeader = fetch(`${host}/api/menu/header`)
      // const fetchFooter = fetch(`${host}/api/menu/footer`)
      // const beritaNav = fetch(`${host}/api/post?page=1&limit=3`)
      // const pengumumanNav = fetch(`${host}/api/pengumuman?limit=3&page=1`)

      // await globalFetch([
      //   fetchHeader,
      //   fetchFooter,
      //   beritaNav,
      //   pengumumanNav
      // ])
      //   .then(_data => {
      //     data = _data
      //   })
      //   .catch(() => {
      //     const { res } = ctx
      //     errCode = res.statusCode
      //   })
    }

    return { pageProps, data, errCode }
  }
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    const fetchHeader = fetch(`${host}/api/menu/header`)
      const fetchFooter = fetch(`${host}/api/menu/footer`)
      const beritaNav = fetch(`${host}/api/post?page=1&limit=3`)
      const pengumumanNav = fetch(`${host}/api/pengumuman?limit=3&page=1`)

      globalFetch([
        fetchHeader,
        fetchFooter,
        beritaNav,
        pengumumanNav
      ])
        .then(_data => {
          this.setState({data: _data});
        })
        .catch(() => {
          
        })

    Router.events.on('routeChangeStart', () => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', () => {
      NProgress.done()
    })
  }

  render() {
    const { Component, pageProps, errCode } = this.props
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
