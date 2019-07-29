import styled from "@emotion/styled"
import { Row, Col } from "antd"
import Container from "Components/container"
import { GlobalTitle } from "Components/components"
import { Carousel } from 'antd'

const GalleryWrap = styled.div`
  position: relative;
<<<<<<< HEAD
  padding: 80px 0;
=======
  padding: 100px 0;
>>>>>>> 67f1d786f16b2dbb80f415573f1037d8d97bc0e4
  .ant-carousel {
    .slick-slide {
      height: 450px;
    }
    .slick-dots-bottom {
      bottom: -30px;
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
  &:after {
    position: absolute;
    background: #091a43;
    left: 0;
    width: 50%;
    top: 0;
    bottom: 0;
    content: " ";
    z-index: -1;
  }
`
const GalleryItemInner = styled.img`
  object-fit: cover;
  height: 500;
  width: 100%;
`
const GalleryItemWrap = styled.div`
  
`
const GalleryItem = () => (
  <GalleryItemWrap>
    <GalleryItemInner src="/static/mekanisme-sop.jpg"/>
  </GalleryItemWrap>
)

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  }
  return (
    <GalleryWrap>
      <Container xl>
        <Row type="flex" align="middle">
          <Col md={8}>
            <div>
              <GlobalTitle
                title="Gallery"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
                button={{
                  border: `1px solid #f5b723`,
                  color: `#f5b723`
                }}
                color="#fff"
              />
            </div>
          </Col>
          <Col md={16}>
            <div>
              <Carousel {...settings}>
                <GalleryItem/>
                <GalleryItem/>
                <GalleryItem/>
                <GalleryItem/>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </GalleryWrap>
  )
}

export default Gallery