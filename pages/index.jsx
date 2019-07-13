import { Button } from 'antd'
import About from "Components/home/about"
import Banner from "Components/home/banner"
import BeritaPopuler from "Components/home/berita-populer"
import Berita from "Components/home/berita"
import Announcement from "Components/home/pengumuman"
import Gallery from "Components/home/gallery"
import Pengaduan from "Components/home/pengaduan"

const Home = () => (
  <>
    <Banner/>
    <About/>
    <BeritaPopuler/>
    <Berita/>
    <Announcement/>
    <Gallery/>
    <Pengaduan/>
  </>
)

export default Home
