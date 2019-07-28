import { Button } from 'antd'
import About from "Components/home/about"
import Banner from "Components/home/banner"
import BeritaPopuler from "Components/home/berita-populer"
import Berita from "Components/home/berita"
import Announcement from "Components/home/pengumuman"
import Gallery from "Components/home/gallery"
import Pengaduan from "Components/home/pengaduan"
import { globalFetch, host } from "Config/api"

const Home = ({data}) => (
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

Home.getInitialProps = async () => {
  const fetchBanner = fetch(`${host}/api/slider`)
  let data = null
  await globalFetch([
    fetchBanner
  ])
    .then(_data => {
      data = _data
    })
  return {data}
}

export default Home
