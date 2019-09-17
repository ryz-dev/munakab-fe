import React, { useState, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col, Carousel, Pagination } from "antd"
import { globalFetch, host } from "Config/api"
import Link from "next/link"
import { convertDate } from "Utils"
import Dotdotdot from 'react-dotdotdot'
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

const DetailWrap = styled.div`

`
const PopularNews = styled.div`
  background: #fff;
  padding: 20px 40px;
  margin-top: 20px;
`
const NewsDate = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #58afff;
  ${({children, ...props}) => ({...props})}
`
const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  ${({children, ...props}) => ({...props})}
`
const Desc = styled.p`
  color: #797979;
  margin-top: 15px;
  ${({children, ...props}) => ({...props})}
`
const NewsItemWrap = styled.div`
  padding: 30px 0;
`
const NewsItem = ({item}) => (
  <NewsItemWrap>
    <Row type="flex" gutter={40} align="middle">
      <Col md={8}>
        <div>
          <BackgroundImage src={item.image} height={200}/>
        </div>
      </Col>
      <Col md={16}>
        <div>
          <NewsDate>
            {convertDate(item.created_at)}
          </NewsDate>
          <Link href="informasi/[id]" as={`informasi/${item.slug}`}>
            <a>
              <Title>
                <Dotdotdot clamp={3}>
                  {item.title}
                </Dotdotdot>
              </Title>
            </a>
          </Link>
          {
            item.excerpt && (
              <Desc>
                <Dotdotdot clamp={3}>
                  {item.excerpt}
                </Dotdotdot>
              </Desc>
            ) 
          }
        </div>
      </Col>
    </Row>
  </NewsItemWrap>
)

const HeroItem = styled.div`
  padding: 10px;
`
const HeroItemWrap = ({item}) => (
  <HeroItem>
    <Row type="flex" align="middle" gutter={40}>
      <Col md={12}>
        <div>
          <BackgroundImage src={item.image} height={400}/>
        </div>
      </Col>
      <Col md={12}>
        <div>
          <NewsDate fontSize={18}>
            {convertDate(item.created_at)}
          </NewsDate>
          <Link href="informasi/[id]" as={`informasi/${item.slug}`}>
            <a>
              <Title fontSize={38} lineHeight={1.2} marginTop={20}>
                <Dotdotdot clamp={3}>
                  {item.title}
                </Dotdotdot>
              </Title>
            </a>
          </Link>
          {
            item.excerpt ? (
              <Desc fontSize={18} marginTop={35}>
                <Dotdotdot clamp={3}>
                  {item.excerpt}
                </Dotdotdot>
              </Desc>
            ) : null
          }
        </div>
      </Col>
    </Row>
  </HeroItem>
)
const HeroGalleryItem = styled.div`
  padding: 10px;
`
const PaginationWrap = styled.div`
  padding: 60px 0;
  text-align: center;
`

const BannerContent = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
  position: relative;
  justify-content: center;
  text-align: center;
  span {
    font-size: 25px;
    color: #fff;
    margin-top: 20px;
    display: block;
  }
  h2 {
    font-size: 40px;
    color: #fff;
    margin-top: 10px;
    font-weight: bold;
  }
`

const Artikel = () => {
  const [heroNews, setHeroNews] = useState(null)
  const [itemNews, setItemNews] = useState(null)
  const [dataState, setDataState] = useState(null)
  const [page, setPage] = useState(1)
  const { query } = useRouter()

  const heroNewsRef = useRef(null)
  const itemNewsRef = useRef(null)
  
  useEffect(() => {
    setHeroNews(heroNewsRef.current)
    setItemNews(itemNewsRef.current)
  }, [])

  useEffect(() => {
    const fetchFeatured = fetch(`${host}/api/post/featured`)
    const fetchAll = fetch(`${host}/api/post/category?category=${query.id}&page=${page}&limit=6`)

    globalFetch([
      fetchFeatured,
      fetchAll
    ])
      .then(_data => {
        setDataState(_data)
      })
  }, [page, query])

  const car2 = dataState && dataState[0].data.map(item => (
    <div>
      <HeroGalleryItem>
        <BackgroundImage src={item.image} height={200}/>
      </HeroGalleryItem>
    </div>
  ))

  const car1 = dataState && dataState[0].data.map(item => (
    <HeroItemWrap item={item} />
  ))

  const handleChangePage = value => {
    setPage(value)
  }

  const berita = dataState && dataState[1]
  
  return (
    <DetailWrap>
      <NextSeo
        title="Informasi"
        titleTemplate='%s - Kab. Muna'
        description="Informasi seputar kab. Muna"
        openGraph={{
          type: 'website',
          url: 'https://www.example.com',
          title: 'Kab. Muna',
          description: "Informasi seputar kab. Muna",
          images: [
            {
              url: '/static/muna.png',
              alt: 'Kab. Muna',
            },
          ],
        }}
      />
      <GlobalBanner bg="/static/mekanisme-sop.jpg" height={600}>
        <BannerContent>
          <div>
            <h2>Informasi</h2>
            <span>Informasi seputar kab. Muna</span>
          </div>
        </BannerContent>
      </GlobalBanner>
      <GlobalContent>
        <Carousel
          asNavFor={itemNews}
          dots={false}
          ref={heroNewsRef}
        >
          {
            car1
          }
        </Carousel>
        <Carousel
          asNavFor={heroNews}
          ref={itemNewsRef}
          dots={false}
          slidesToShow={3}
          swipeToSlide={true}
          autoplay={true}
          focusOnSelect={true}
          responsive={ [
            {
              breakpoint: 576,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
              }
            }
          ]}
        >
          {
            car2
          }
        </Carousel>
      </GlobalContent>
      <div>
        <Container>
          <PopularNews>
            {
              berita && berita.data.map(item => (
                <NewsItem item={item}/>
              ))
            }
          </PopularNews>
          {
            berita ? berita.pagination && (
              <PaginationWrap>
                <Pagination onChange={handleChangePage} defaultCurrent={page} pageSize={6} total={berita.pagination.total}/>
              </PaginationWrap>
            ) : null
          }
        </Container>
      </div>
    </DetailWrap>
  )
}

// Artikel.getInitialProps = async () => {
//   let data = null
//   const fetchFeatured = fetch(`${host}/api/post/featured`)
//   const fetchAll = fetch(`${host}/api/post`)
//   await globalFetch([
//     fetchFeatured,
//     fetchAll
//   ])
//     .then(_data => {
//       data = _data
//     })
//   return {data: data}
// }


export default Artikel
