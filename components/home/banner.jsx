import styled from "@emotion/styled"
import { Carousel } from 'antd'

const BannerWrap = styled.div`
  .ant-carousel {
    .slick-slide {
      text-align: center;
      height: 650px;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }
    .slick-dots-bottom {
      bottom: 100px;
    }
    .slick-dots {
      li {
        button {
          height: 4px;
          width: 44px;
        }
      }
    }
  }
`
const Img = styled.img`
  object-fit: cover;
  height: 650px;
  width: 100%;
`
const Item = styled.div`

`

const Banner = () => {
  return (
    <BannerWrap>
      <Carousel>
        <Item>
          <Img src="/static/mekanisme-sop.jpg"/>
        </Item>
        <Item>
          <Img src="/static/mekanisme-sop.jpg"/>
        </Item>
      </Carousel>
    </BannerWrap>
  )
}

export default Banner