import styled from "@emotion/styled"
import { Carousel } from 'antd'
import Container from "Components/container"
import { ButtonStyled, maxSM } from "Components/components"

const BannerWrap = styled.div`
  .ant-carousel {
    .slick-slide {
      text-align: center;
      height: 650px;
      line-height: 160px;
      background: #ddd;
      overflow: hidden;
      & > div {
        height: 100%;
      }
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
  position: relative;
  height: 100%;
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    content: "";
    background: ${({bg}) => `url('${bg}') center no-repeat`};
    background-size: cover;
  }
  &:before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    background: rgba(0,0,0,.5);
    z-index: 1;
  }
`
const TextBox = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  text-align: left;
  align-items: center;
  height: 650px;
  h1 {
    line-height: 1.4;
    font-size: 54px;
    color: #fff;
    font-weight: bold;
  }
  p {
    line-height: 1.4;
    font-size: 24px;
    color: #fff;
    margin-top: 20px;
  }
  ${maxSM} {
    h1 {
      font-size: 38px;
    }
    p {
      font-size: 22px;
    }
  }
`
const ButtonStyledBanner = styled(ButtonStyled)`
  border: 1px solid #fff;
  color: #fff;
  &:hover {
    background: none;
  }
`

const Banner = ({data}) => {
  return (
    <BannerWrap>
      <Carousel
        autoplay
      >
      {
        data && data.data.map(item => (
          <Item bg={item.image}>
            <Container>
              <div>
                <TextBox>
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.deskripsi}</p>
                    {/* <ButtonStyledBanner>
                      Selengkpanya
                    </ButtonStyledBanner> */}
                  </div>
                </TextBox>
              </div>
            </Container>
          </Item>
        ))
      }
      </Carousel>
    </BannerWrap>
  )
}

export default Banner