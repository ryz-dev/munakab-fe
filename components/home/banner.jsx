import styled from "@emotion/styled"
import { Carousel } from 'antd'
import Container from "Components/container"
import { ButtonStyled } from "Components/components"

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
`
const ButtonStyledBanner = styled(ButtonStyled)`
  border: 1px solid #fff;
  color: #fff;
  &:hover {
    background: none;
  }
`
const Banner = () => {
  return (
    <BannerWrap>
      <Carousel>
        <Item bg="/static/mekanisme-sop.jpg">
          <Container>
            <div>
              <TextBox>
                <div>
                  <h1>Selamat datang <br/>di Kabupaten Muna</h1>
                  <ButtonStyledBanner>
                    Selengkpanya
                  </ButtonStyledBanner>
                </div>
              </TextBox>
            </div>
          </Container>
        </Item>
        <Item bg="/static/mekanisme-sop.jpg">
          <Container>
            <div>
              <TextBox>
                <h1>Selamat datang di Kabupaten Muna</h1>
                <button>Slengkapnya</button>
              </TextBox>
            </div>
          </Container>
        </Item>
      </Carousel>
    </BannerWrap>
  )
}

export default Banner