import styled from "@emotion/styled"
import Container from "Components/container"
import { Row, Col } from "antd"
import { GlobalTitle } from "Components/components"

const AnnauncementWrap = styled.div`
<<<<<<< HEAD
  padding: 60px 0;
=======
  padding: 60px 0 150px 0;
>>>>>>> 67f1d786f16b2dbb80f415573f1037d8d97bc0e4
  background: #fff;
`
const Title = styled.p`
  color: #727272;
  font-size: 18px;
  font-weight: 500;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
`
const ImgItem = styled.div`
  width: 88px;
  height: 88px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #f5b723;
  h5 {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.2;
  }
  span {
    color: #727272;
    text-transform: uppercase;
  }

`
const TitleWrap = styled.div`
  border-bottom: 1px solid #d5d5d5;
  padding: 40px 0;
`
const List = styled.ul`
  list-style: none;
  padding: 20px 40px;
  background: #f8f8f8;
  li {
    height: 133px;
  }
`
const ListItem = () => (
  <li>
    <a href="#">
      <Flex>
        <ImgItem>
          <div>
            <h5>
              12
            </h5>
            <span>Sep</span>
          </div>
        </ImgItem>
        <TitleWrap>
          <Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </Title>
        </TitleWrap>
      </Flex>
    </a>
  </li>
)

const Annauncement = () => {
  return (
    <AnnauncementWrap>
      <Container xl>
        <Row type="flex" align="middle">
          <Col md={8}>
            <div>
              <GlobalTitle
                title="Pengumuman"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
                button={{
                  border: `1px solid #f5b723`,
                  color: `#f5b723`
                }}
              />
            </div>
          </Col>
          <Col md={16}>
            <div>
              <List>
                <ListItem/>
                <ListItem/>
                <ListItem/>
              </List>
            </div>
          </Col>
        </Row>
      </Container>
    </AnnauncementWrap>
  )
}

export default Annauncement