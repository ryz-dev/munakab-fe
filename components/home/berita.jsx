import styled from "@emotion/styled"
import { Row, Col } from "antd"
import Container from "Components/container"
import { maxSM, minSM } from "Components/components"
import Link from "next/link"
import { globalFetch } from "Config/api"
import Dotdotdot from 'react-dotdotdot'

const BeritaWrap = styled.div`
  background: #fff;
`
const BeritaInner = styled.div`
  padding: 80px 0;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #999999;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 110px;
  ${maxSM} {
    display: block;
    height: initial;
  }
`
const ImgItem = styled.img`
  height: 88px;
  object-fit: cover;
  margin-right: 30px;
  width: 88px;
  border: 1px solid transparent;
  transition: all .3s ease;
  box-sizing: border-box;
  ${maxSM} {
    width: 100%;
    margin: 0;
    height: 120px;
  }

`
const List = styled.ul`
  list-style: none;
  li {
    height: 110px;
    margin: 10px 0;
    ${maxSM} {
      height: initial;
    }
    a {
      &:hover {
        ${ImgItem} {
          border: 4px solid #1d9fff;
        }
      }
    }
    ${maxSM} {
      height: initial;
      padding-bottom: 20px;
    }
  }
`
const TitleHero = styled.h2`
  font-size: 38px;
`
const TitleWrap = styled.div`
  border-bottom: 1px solid #d5d5d5;
  height: 120px;
  display: flex;
  align-items: center;
  width: 100%;
  ${maxSM} {
    padding: 10px 0;
  }
`
const LinkAll = styled.a`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #727272;
`
const Title = styled.p`
  color: #727272;
  font-size: 18px;
  font-weight: 500;
`
const Maps = styled.img`
  height: 680px;
  width: 100%;
  ${maxSM} {
    height: 260px;
  }
`
const BeritaLeft = styled.div`
  padding-left: 30px;
  ${maxSM} {
    padding-left: 0;
    margin-top: 30px;
  }
`
const ListItem = ({item}) => (
  <li>
    <Link href="artikel/[id]" as={`artikel/${item.slug}`}>
      <a>
        <Flex>
          <ImgItem src={item.image}/>
          <TitleWrap>
            <Title>
              <Dotdotdot clamp={3}>
                {item.title}
              </Dotdotdot>
            </Title>
          </TitleWrap>
        </Flex>
      </a>
    </Link>
  </li>
)

const MapsWrap = styled.div`
 iframe {
  width: 100%;
  height: 700px;
  border: none;
  ${maxSM} {
    height: 400px;
  }
 }
`

const Berita = ({data}) => {
  console.log("berita", data)
  return (
    <BeritaWrap>
      <Container xl>
        <BeritaInner>
          <Row type="flex" align="top" gutter={20}>
            <Col sm={24} md={10}>
              <MapsWrap>
                <iframe src="https://snazzymaps.com/embed/184816?key=AIzaSyBQUGoAI9wzi002U11ZLYDVgVKRBNIdrOo"></iframe>
              </MapsWrap>
            </Col>
            <Col ms={24} md={14}>
              <BeritaLeft>
                <Header>
                  <TitleHero>
                    Berita
                  </TitleHero>
                  <Link href="/artikel">
                    <a>
                      <LinkAll>
                        Selengkapnya
                      </LinkAll>
                    </a>
                  </Link>
                </Header>
                <List>
                  {
                    data && data.data.map(item => (
                      <ListItem item={item}/>
                    ))
                  }
                </List>
              </BeritaLeft>
            </Col>
          </Row>
        </BeritaInner>
      </Container>
    </BeritaWrap>
  )
}

export default Berita