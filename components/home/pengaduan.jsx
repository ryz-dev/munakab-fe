import React, { useState } from "react"
import styled from "@emotion/styled"
import Container from "Components/container"
import { Row, Col, Form, Input, Button, Icon, message } from "antd"
import { maxSM } from "Components/components"
import { globalPost, host } from "Config/api"

const PengaduanWrap = styled.div`
  background: #fff;
  padding: 120px 0;
  margin-bottom: -60px;
`
const PengaduanInner = styled(Form)`
  background: #f4f4f4;
  padding: 75px;
  ${maxSM} {
    padding: 24px;
  }
`
const FormItem = styled(Form.Item)`
  margin: 0;
  .ant-form-explain {
    margin-bottom: 19px;
    margin-top: -10px;
  }
`
const H3 = styled.h3`
  color: #091a43;
  font-size: 38px;
  font-weight: bold;
`
const Desc = styled.p`
  color: #727272;
  margin-top: 20px;
  ${maxSM} {
    margin-bottom: 30px;
  }
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
const TextArea = styled(Input.TextArea)`
  padding: 10px;
  border: 1px solid transparent;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 22px;
  color: #727272;
`
const ButtonSubmit = styled(Button)`
  margin-top: 20px;
`

const FeedBack = styled.div`
  text-align: center;
  p {
    margin-top: 10px;
  }
`

const Pengaduan = ({form}) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { getFieldDecorator } = form

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        setLoading(true)
        console.info('success');
        const formData = new FormData()
        formData.append("nama_lengkap", values.nama_lengkap)
        formData.append("email", values.email)
        formData.append("phone", values.phone)
        formData.append("message", values.message)
        globalPost("/api/message/saran", formData)
          .then(data => {
            setLoading(false)
            if (data.diagnostic.code === 200) {
              setIsSuccess(true)
              setTimeout(() => {
                setIsSuccess(false)
              }, 4000)
            }
          })
          .catch(err => {
            message.error(`Terjadi kesalahan dalam pengiriman - ${err}`)
            setLoading(false)
          })
      }
    })
  }

  return (
    <PengaduanWrap>
      <Container xl>
        <PengaduanInner onSubmit={handleSubmit}>
          <Row type="flex" align="middle" gutter={30} style={{minHeight: 280}}>
            <Col md={10}>
              <div>
                <H3>Saran dan Kritik</H3>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor</Desc>
              </div>
            </Col>
            <Col md={14}>
              {
                isSuccess ? (
                  <FeedBack>
                    <Icon type="check-circle" style={{
                      fontSize: 50,
                      color: "#52c41a",
                      marginBottom: 20
                    }}/>
                    <h2>Saran berhasil terkirim</h2>
                    <p>Terima kasih atas saran dan kritiknya.</p>
                  </FeedBack>
                ) : (
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
                          })(<TextArea style={{paddingLeft: 20}} placeholder="Pesan"/>)}
                        </FormItem>
                        <FormItem>
                          <ButtonSubmit loading={loading} type="primary" htmlType="submit">{loading ? "Mengirim" : "Kirim"}</ButtonSubmit>
                        </FormItem>
                      </Col>
                    </Row>
                  </div>
                )
              }
            </Col>
          </Row>
        </PengaduanInner>
      </Container>
    </PengaduanWrap>
  )
}

export default Form.create({name: "pengaduan"})(Pengaduan)