import styled from "@emotion/styled"
import { Row, Col } from "antd"
import Container from "Components/container"
import { GlobalTitle } from "Components/components"
import { Carousel } from 'antd'

const BertiaPopulerWrap = styled.div`
  padding-bottom: 60px;
`
const BertiaPopulerWrapInner = styled.div`
  .ant-carousel {
    .slick-slide {
      height: 480px;
    }
    .slick-dots-bottom {
      bottom: 0;
    }
    .slick-dots {
      li {
        button {
          height: 4px;
          width: 44px;
          background: #005594;
        }
      }
    }
  }
  
`
const H3 = styled.h3`
  font-size: 38px;
  font-weight: bold;
`
const Desc = styled.p`

`
const RowStyled = styled(Row)`
  height: 550px;
`
const Img = styled.img`
  object-fit: cover;
  height: 284px;
  width: 100%;
`
const ItemWrap = styled.div`
  
`
const Item = styled.div`
  padding: 20px;
`
const TitleItem = styled.h4`
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
`
const Date = styled.p`
  color: #727272;
  margin-top: 10px;
  text-transform: uppercase;
`
const BeritaItem = () => (
  <ItemWrap>
    <Item>
      <div>
        <div>
          <Img src="/static/mekanisme-sop.jpg"/>
        </div>
        <div>
          <TitleItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </TitleItem>
          <Date>
            12 Desember 2018
          </Date>
        </div>
      </div>
    </Item>
  </ItemWrap>
)

const BeritaPopuler = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (
    <BertiaPopulerWrap>
      <Container xl>
        <BertiaPopulerWrapInner>
          <RowStyled type="flex" align="middle" height={420}>
            <Col md={8}>
              <div>
                <GlobalTitle
                  title="Berita Populer"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
              </div>
            </Col>
            <Col md={16}>
              <div>
                <Carousel {...settings}>
                  <BeritaItem/>
                  <BeritaItem/>
                  <BeritaItem/>
                  <BeritaItem/>
                </Carousel>
              </div>
            </Col>
          </RowStyled>
        </BertiaPopulerWrapInner>
      </Container>
    </BertiaPopulerWrap>
  )
}

export default BeritaPopuler