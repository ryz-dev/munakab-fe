import React, { useState, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col, Carousel } from "antd"

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
const NewsItem = () => (
  <NewsItemWrap>
    <Row type="flex" gutter={40} align="middle">
      <Col md={8}>
        <div>
          <BackgroundImage src="/static/mekanisme-sop.jpg" height={200}/>
        </div>
      </Col>
      <Col md={16}>
        <div>
          <NewsDate>
            12 December 2019
          </NewsDate>
          <Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </Desc>
        </div>
      </Col>
    </Row>
  </NewsItemWrap>
)

const HeroItem = styled.div`

`


const Detail = () => {
  const [heroNews, setHeroNews] = useState(null)
  const [itemNews, setItemNews] = useState(null)
  const heroNewsRef = useRef(null)
  const itemNewsRef = useRef(null)
  
  useEffect(() => {
    setHeroNews(heroNewsRef.current)
    setItemNews(itemNewsRef.current)
  }, [])
  return (
    <DetailWrap>
      <GlobalBanner>
        adsf
      </GlobalBanner>
      <GlobalContent>
        <Carousel
            asNavFor={itemNews}
            ref={heroNewsRef}
          >
            <HeroItem>
              <Row type="flex" align="middle" gutter={40}>
                <Col md={12}>
                  <div>
                    <BackgroundImage src="/static/mekanisme-sop.jpg" height={400}/>
                  </div>
                </Col>
                <Col md={12}>
                  <div>
                    <NewsDate fontSize={18}>
                      12 December 2019
                    </NewsDate>
                    <Title fontSize={38} lineHeight={1.2} marginTop={20}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Title>
                    <Desc fontSize={22} marginTop={35}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Desc>
                  </div>
                </Col>
              </Row>
            </HeroItem>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Carousel>
          <Carousel
            asNavFor={heroNews}
            ref={itemNewsRef}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div>
              <Row type="flex">
                <Col md={12}>
                  <div>
                    <BackgroundImage src="/static/mekanisme-sop.jpg" height={200}/>
                  </div>
                </Col>
                <Col md={12}>
                  <div>
                    test
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Carousel>
      </GlobalContent>
      <div>
        <Container>
          <PopularNews>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
          </PopularNews>
        </Container>
      </div>
    </DetailWrap>
  )
}

export default Detail