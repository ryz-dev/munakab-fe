import styled from "@emotion/styled"
import Container from "Components/container"
import { Row, Col } from "antd"

const PengaduanWrap = styled.div`
  background: #fff;
  padding: 120px 0;
`
const PengaduanInner = styled.div`
  background: #f4f4f4;
  padding: 75px;
`
const H3 = styled.h3`
  color: #091a43;
  font-size: 38px;
  font-weight: bold;
`
const Desc = styled.p`
  color: #727272;
  margin-top: 20px;
`
const Input = styled.input`
  height: 45px;
  padding: 20px;
  border: 1px solid transparent;
  width: 100%;
  border-radius: 3px;
  color: #727272;
  margin-bottom: 20px;
`
const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid transparent;
  width: 100%;
  border-radius: 3px;
  color: #727272;
`

const Pengaduan = () => {
  return (
    <PengaduanWrap>
      <Container xl>
        <PengaduanInner>
          <Row type="flex" align="middle" gutter={30}>
            <Col md={10}>
              <div>
                <H3>Pengaduan</H3>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor</Desc>
              </div>
            </Col>
            <Col md={14}>
              <div>
                <Row type="flex" gutter={20}>
                  <Col md={12}>
                    <div>
                      <Input placeholder="Nama"/>
                    </div>
                  </Col>
                   <Col md={12}>
                    <div>
                      <Input placeholder="Email"/>
                    </div>
                  </Col>
                   <Col md={24}>
                    <div>
                      <TextArea placeholder="Pesan"/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </PengaduanInner>
      </Container>
    </PengaduanWrap>
  )
}

export default Pengaduan