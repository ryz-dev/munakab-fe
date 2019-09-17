import styled from "@emotion/styled"
import { Row, Col } from "antd"
import Container from "Components/container"
import { GlobalTitle, maxSM, minSM } from "Components/components"
import { Carousel } from 'antd'
import { convertDate } from "Utils"
import Link from "next/link"
import Dotdotdot from 'react-dotdotdot'

const BertiaPopulerWrap = styled.div`
  padding-bottom: 60px;
  ${maxSM} {
    height: 820px;
  }
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
  ${maxSM} {
    padding: 0;
    margin-top: 30px;
  }
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
const BeritaItem = ({item}) => (
  <ItemWrap>
    <Item>
      <div>
        <div>
          <Img src={item.image}/>
        </div>
        <div>
          <Link href="artikel/[id]" as={`artikel/${item.slug}`}>
            <a>
              <TitleItem>
                <Dotdotdot clamp={3}>
                  {item.title}
                </Dotdotdot>
              </TitleItem>
            </a>
          </Link>
          <Date>
            {convertDate(item.created_at)}
          </Date>
        </div>
      </div>
    </Item>
  </ItemWrap>
)

const StyledCol = styled(Col)`
  ${maxSM} {
    max-width: 100%;
  }
`

const BeritaPopuler = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <BertiaPopulerWrap>
      <Container xl>
        <BertiaPopulerWrapInner>
          <RowStyled type="flex" align="middle" height={420}>
            <Col sm={24} md={8}>
              <div>
                <GlobalTitle
                  title="Berita Populer"
                  link="/informasi"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
              </div>
            </Col>
            <StyledCol sm={24} md={16}>
              <div>
                <Carousel {...settings}>
                  {
                    data && data.data.map(item => (
                      <BeritaItem item={item}/>
                    ))
                  }
                </Carousel>
              </div>
            </StyledCol>
          </RowStyled>
        </BertiaPopulerWrapInner>
      </Container>
    </BertiaPopulerWrap>
  )
}

export default BeritaPopuler