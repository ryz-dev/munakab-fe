import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Row, Col } from "antd"
import Container from "Components/container"
import { GlobalTitle, maxSM } from "Components/components"
import { Carousel } from 'antd'
import { globalFetch } from "Config/api"

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
    background: #091a43;
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
const GalleryItem = ({item}) => (
  <GalleryItemWrap>
    <GalleryItemInner src={item.path} alt={item.name}/>
  </GalleryItemWrap>
)

const Gallery = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    globalFetch(`/api/galeri?limit=3`)
      .then(data => {
        setData(data.data)
      })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
          <Col sm={24} md={8}>
            <div>
              <GlobalTitle
                title="Gallery"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
                link="/gallery"
                button={{
                  border: `1px solid #f5b723`,
                  color: `#f5b723`
                }}
                color="#fff"
              />
            </div>
          </Col>
          <StyledCol sm={24} md={16}>
            <div>
              {
                data && (
                  <Carousel {...settings}>
                    {
                      data.map(item => (
                        <GalleryItem item={item}/>
                      ))
                    }
                  </Carousel>
                )
              }
            </div>
          </StyledCol>
        </Row>
      </Container>
    </GalleryWrap>
  )
}

export default Gallery