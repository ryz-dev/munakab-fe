import { Row, Col, Button } from "antd"
import Container from "Components/container"
import styled from "@emotion/styled"
import { GlobalTitle, maxSM } from "Components/components"

const AboutWrap = styled.div`
  top: -60px;
  position: relative;
`
const AboutInner = styled.div`
  padding: 40px;
  background: #fff;
  ${maxSM} {
    padding: 20px;
  }
`

const Title = styled.h2`
  font-size: 38px;
  font-weight: bold;
`
const Desc = styled.p`
  font-size: 18px;
  color: #727272;
  margin-top: 20px;
`
const ButtonStyled = styled(Button)`
  background: transparent;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #1d9fff;
  border-radius: 0;
  margin-top: 20px;
`
const ImgBackground = styled.img`
  width: 100%;
  height: 291px;
  object-fit: cover;
  ${maxSM} {
    margin-top: 30px;
  }
`

const About = ({data}) => {
  return (
    <AboutWrap>
      <Container xl>
        <AboutInner>
          <Row type="flex" gutter={40} align="middle">
            <Col sm={24} md={12}>
              <div>
                <GlobalTitle
                  title={data && data.data.title}
                  link="/tentang"
                  desc={data && data.data.excerpt}
                />
              </div>
            </Col>
            <Col sm={24} md={12}>
              <div>
                <ImgBackground src={data && data.data.image}/>
              </div>
            </Col>
          </Row>
        </AboutInner>
      </Container>
    </AboutWrap>
  )
}

export default About