import React, { useState, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col, Carousel, Pagination } from "antd"
import { globalFetch, host } from "Config/api"

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
  color: #525252;
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
            12 December 2019
          </NewsDate>
          <Title>
            {item.title}
          </Title>
          {
            item.excerpt && (
              <Desc>
                {item.excerpt}
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
            12 December 2019
          </NewsDate>
          <Title fontSize={38} lineHeight={1.2} marginTop={20}>
            {item.title}
          </Title>
          {
            item.excerpt ? (
              <Desc fontSize={18} marginTop={35}>
                {item.excerpt}
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

const Artikel = ({data}) => {
  const [heroNews, setHeroNews] = useState(null)
  const [itemNews, setItemNews] = useState(null)
  const [dataState] = useState(data)
  const heroNewsRef = useRef(null)
  const itemNewsRef = useRef(null)
  
  useEffect(() => {
    setHeroNews(heroNewsRef.current)
    setItemNews(itemNewsRef.current)
  })

  const car2 = data[0].data.map(item => (
    <div>
      <HeroGalleryItem>
        <BackgroundImage src="/static/mekanisme-sop.jpg" height={200}/>
      </HeroGalleryItem>
    </div>
  ))
  const car1 = data[0].data.map(item => (
    <HeroItemWrap item={item} />
  ))
  
  return (
    <DetailWrap>
      <GlobalBanner bg="/static/mekanisme-sop.jpg">
        adsf
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
              data[1].data.map(item => (
                <NewsItem item={item}/>
              ))
            }
          </PopularNews>
          <PaginationWrap>
            <Pagination defaultCurrent={1} total={50} />
          </PaginationWrap>
        </Container>
      </div>
    </DetailWrap>
  )
}

Artikel.getInitialProps = async () => {
  let data = null
  const fetchFeatured = fetch(`${host}/api/post/featured`)
  const fetchAll = fetch(`${host}/api/post`)
  await globalFetch([
    fetchFeatured,
    fetchAll
  ])
    .then(_data => {
      data = _data
    })
  return {data: data}
}


export default Artikel
