import styled from "@emotion/styled"
import Container from "Components/container"
import { Row, Col, Form, Input } from "antd"

const PengaduanWrap = styled.div`
  background: #fff;
  padding: 120px 0;
`
const PengaduanInner = styled(Form)`
  background: #f4f4f4;
  padding: 75px;
`
const FormItem = styled(Form.Item)`

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
const InputStyled = styled(Input)`
  height: 45px;
  padding: 0 20px;
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

const Pengaduan = ({form}) => {
  const { getFieldDecorator } = form

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    })
  }

  return (
    <PengaduanWrap>
      <Container xl>
        <PengaduanInner onSubmit={handleSubmit}>
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
                    <FormItem>
                      {getFieldDecorator('nama_lengkap', {
                        rules: [
                          {
                            required: true,
                            message: 'Masukkan Nama',
                          },
                        ],
                      })(<InputStyled placeholder="Nama Lengkap"/>)}
                    </FormItem>
                  </Col>
                  <Col md={12}>
                    <FormItem>
                      {getFieldDecorator('email', {
                        rules: [
                          {
                            required: true,
                            message: 'Masukkan Email',
                          },
                        ],
                      })(<InputStyled placeholder="Email"/>)}
                    </FormItem>
                  </Col>
                  <Col md={24}>
                    <FormItem>
                      {getFieldDecorator('phone', {
                        rules: [
                          {
                            required: true,
                            message: 'Masukan No. HP',
                          },
                        ],
                      })(<InputStyled placeholder="No. HP"/>)}
                    </FormItem>
                  </Col>
                   <Col md={24}>
                    <FormItem>
                      {getFieldDecorator('message', {
                        rules: [
                          {
                            required: true,
                            message: 'Masukkan Pesan',
                          },
                        ],
                      })(<InputStyled placeholder="Pesan"/>)}
                      <button htmlType="submit">submit</button>
                    </FormItem>
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

export default Form.create({name: "coordinated"})(Pengaduan)