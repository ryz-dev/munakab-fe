import styled from "@emotion/styled"
import { Row, Col } from "antd"
import Container from "Components/container"
import { GlobalTitle, maxSM } from "Components/components"
import { Carousel } from 'antd'

const GalleryWrap = styled.div`
  position: relative;
  padding: 100px 0;
  .ant-carousel {
    ${maxSM} {
      margin-top: 30px;
    }
    .slick-slide {
      height: 450px;
      ${maxSM} {
        height: 240px;
      }
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
    background: #fff;
    left: 0;
    width: 50%;
    top: 0;
    bottom: 0;
    content: " ";
    z-index: -1;
    ${maxSM} {
      width: 100%;
    }
  }
`
const GalleryItemInner = styled.img`
  object-fit: cover;
  height: 500;
  width: 100%;
`
const GalleryItemWrap = styled.div`
  
`
const StyledCol = styled(Col)`
  ${maxSM} {
    max-width: 100%;
    width: 100%;
  }
`
const GalleryItem = () => (
  <GalleryItemWrap>
    <GalleryItemInner src="/static/mekanisme-sop.jpg"/>
  </GalleryItemWrap>
)

const Video = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      }
    ]
  }
  return (
    <GalleryWrap>
      <Container xl>
        <Row type="flex" align="middle" gutter={20}>
          <StyledCol sm={24} md={16}>
            <div>
            <iframe className="player" type="text/html" width="100%" height="400px"
              src={`https://www.youtube.com/embed/cmKVS4PKp3o`}
              frameborder="0"/>
            </div>
          </StyledCol>
          <Col sm={24} md={8}>
            <div>
              <GlobalTitle
                title="Video"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
                button={{
                  border: `1px solid #1d9fff`,
                  color: `#1d9fff`
                }}
                color="#333"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </GalleryWrap>
  )
}

export default Video