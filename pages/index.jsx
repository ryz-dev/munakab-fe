import React, { useEffect, useState } from "react"
import { Button } from 'antd'
import About from "Components/home/about"
import Banner from "Components/home/banner"
import BeritaPopuler from "Components/home/berita-populer"
import Berita from "Components/home/berita"
import Announcement from "Components/home/pengumuman"
import Gallery from "Components/home/gallery"
import Video from "Components/home/video"
import Pengaduan from "Components/home/pengaduan"
import { globalFetch, host } from "Config/api"

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchBanner = fetch(`${host}/api/slider`)
    const fetchBeritaFeatured = fetch(`${host}/api/post/featured?page=1&limit=5`)
    const fetchBerita = fetch(`${host}/api/post?page=1&limit=5`)
    const fetchTentang = fetch(`${host}/api/pages/read?slug=tentang`)

    globalFetch([
      fetchBanner,
      fetchBeritaFeatured,
      fetchBerita,
      fetchTentang
    ])
    .then(data => {
      setData(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <Banner data={data && data[0]}/>
      <About data={data && data[3]}/>
      <BeritaPopuler data={data && data[1]}/>
      <Berita data={data && data[2]}/>
      <Video/>
      <Announcement/>
      <Gallery/>
      <Pengaduan/>
    </>
  )
}

// Home.getInitialProps = async () => {
  // const fetchBanner = fetch(`${host}/api/slider`)
  // const fetchBeritaFeatured = fetch(`${host}/api/post/featured?page=1&limit=5`)
  // const fetchBerita = fetch(`${host}/api/post?page=1&limit=5`)
  // const fetchTentang = fetch(`${host}/api/pages/read?slug=tentang`)

  // let datas = null
  // await globalFetch([
  //   fetchBanner,
  //   fetchBeritaFeatured,
  //   fetchBerita,
  //   fetchTentang
  // ])
  // .then(data => {
  //   datas = data
  // })
  // .catch(err => {
  //   console.log(err)
  // })

  // return {data: datas}
// }

export default Home
