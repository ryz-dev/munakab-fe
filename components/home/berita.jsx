import styled from "@emotion/styled"
import { Row, Col } from "antd"
import Container from "Components/container"

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
`
const ImgItem = styled.img`
  width: 88px;
  height: 88px;
  margin-right: 30px;
  object-fit: cover;
`
const List = styled.ul`
  list-style: none;
  li {
    height: 133px;
  }
`
const TitleHero = styled.h2`
  font-size: 38px;
`
const TitleWrap = styled.div`
  border-bottom: 1px solid #d5d5d5;
  padding: 40px 0;
`
const LinkAll = styled.a`
  font-size: 18px;
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
`
const BeritaLeft = styled.div`
  padding-left: 30px;
`
const ListItem = () => (
  <li>
    <a href="#">
      <Flex>
        <ImgItem src="/static/mekanisme-sop.jpg"/>
        <TitleWrap>
          <Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </Title>
        </TitleWrap>
      </Flex>
    </a>
  </li>
)

const Berita = () => {
  return (
    <BeritaWrap>
      <Container xl>
        <BeritaInner>
          <Row type="flex" align="middle" gutter={20}>
            <Col md={10}>
              <div>
                <Maps src="/static/maps.png"/>
              </div>
            </Col>
            <Col md={14}>
              <BeritaLeft>
                <Header>
                  <TitleHero>
                    Berita
                  </TitleHero>
                  <LinkAll>
                    Semua
                  </LinkAll>
                </Header>
                <List>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
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