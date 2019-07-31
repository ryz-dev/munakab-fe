import { Button } from 'antd'
import About from "Components/home/about"
import React, { useEffect } from "react"
import Banner from "Components/home/banner"
import BeritaPopuler from "Components/home/berita-populer"
import Berita from "Components/home/berita"
import Announcement from "Components/home/pengumuman"
import Gallery from "Components/home/gallery"
import Pengaduan from "Components/home/pengaduan"
import { globalFetch, host } from "Config/api"

const Home = ({data}) => {
  // useEffect(() => {
  //   const fetchBanner = fetch(`${host}/api/slider`)
  //   globalFetch([
  //     fetchBanner
  //   ])
  //     .then(_data => {
  //       console.log(_data)
  //     })
  // }, [])
  return (
    <>
      <Banner data={data[0]}/>
      <About/>
      <BeritaPopuler/>
      <Berita/>
      <Announcement/>
      <Gallery/>
      <Pengaduan/>
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  let data = null
  const fetchBanner = fetch(`${host}/api/slider`)
  await globalFetch([
    fetchBanner
  ])
    .then(_data => {
      data = _data
    })
  return {data: data}
}

export default Home
