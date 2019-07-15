import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col } from "antd"

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
`
const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`
const Desc = styled.p`
  color: #797979;
  margin-top: 15px;
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


const Detail = () => {
  return (
    <DetailWrap>
      <GlobalBanner>
        adsf
      </GlobalBanner>
      <GlobalContent>
        adfadf
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