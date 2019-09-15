import React, { useState } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, Flex, GBHeader } from "Components/components"
import Container from "Components/container"
import { Row, Col, Form, Input, Button, Modal, message } from "antd"
import { globalPost, host } from "Config/api"
import { NextSeo } from "next-seo"
import { maxSM } from "Components/components"

const PengaduanWrap = styled.div`
  padding-bottom: 100px;
`
const CointentWrap = styled.div`
  max-width: 576px;
  margin: 0 auto;
`
const HeroContent = styled(CointentWrap)`
  max-width: 992px;
  margin: 0 auto;
`
const Title = styled.h3`
  font-size: 28px;
  font-weight: bold;
  ${({childrem, ...props}) => ({...props})}
`
const Desc = styled.p`
  font-size: 18px;
  color: #7e7e7e;
  margin-top: 10px;
`
const List = styled.ul`
  list-style: none;
  margin-top: 24px;
`
const ListItemWrap = styled.li`
  padding: 10px 0;
`
const Date = styled.div`
  height: 85px;
  width: 85px;
  margin-right: 20px;
  border: 1px solid #e8c23b;
  flex: none;
  text-align: center;
`
const DateDay = styled.span`
  font-size: 34px;
  font-weight: bold;
  display: block;
`
const DateMonth = styled.span`
  text-transform: uppercase;
  font-size: 18px;
  display: block;
  color: #797979;
`
const TextWrap = styled.div`

`
const ListItem = () => (
  <ListItemWrap>
    <Flex justifyContent="initial">
      <Date>
        <DateDay>
          19
        </DateDay>
        <DateMonth>
          Sep
        </DateMonth>
      </Date>
      <TextWrap>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h4>
      </TextWrap>
    </Flex>
  </ListItemWrap>
)
const HistoryWrap = styled.div`
  margin-top: 20px;
`
const PaginationWrap = styled.div`
  padding: 60px 0;
  text-align: center;
`
const FormSection = styled.div`
  margin-top: 40px;
  .ant-form-item-label {
    text-align: left;
  }
`
const FormItemWrap = styled.div`
  margin-top: 20px;
`
const HeroContentDesc = styled.div`
  padding-left: 60px;
  border-left: 1px solid #e8e8e8;
  ${maxSM} {
    padding-left: 0;
    border-left: none;
    margin-top: 30px;
  }
`

const Pengaduan = ({form}) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
      sm: {span: 8},
    },
    wrapperCol: {
      xs: {span: 24},
      sm: {span: 16},
    }
  }

  const { getFieldDecorator } = form

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        setLoading(true)
        console.info('success', values);
        const formData = new FormData()
        formData.append("informer_name", values.informer_name)
        formData.append("informer_address", values.informer_address)
        formData.append("informer_email", values.informer_email)
        formData.append("informer_phone", values.informer_phone)
        formData.append("suspect_name", values.suspect_name)
        formData.append("suspect_department", values.suspect_department)
        formData.append("suspect_division", values.suspect_division)
        formData.append("subject", values.subject)
        formData.append("complaint", values.complaint)
        globalPost("/api/message/pengaduan", formData)
          .then(data => {
            setLoading(false)
            if (data.diagnostic.code === 200) {
              Modal.success({
                title: "Pengiriman Pengaduan Berhasil",
                content: "Terima kasih telah melakukan pengaudan kepada kami."
              })
              form.resetFields()
            }
          })
          .catch(err => {
            message.error(`Terjadi kesalahan dalam pengaduan - ${err}`)
            setLoading(false)
          })
      }
    })
  }

  return (
    <PengaduanWrap>
      <NextSeo
        title="Pengaduan"
        titleTemplate='%s - Kab. Muna'
        description="Web Portal Kab. muna"
        openGraph={{
          type: 'website',
          url: 'https://www.example.com',
          title: 'Kab. Muna',
          description: 'Web Portal Kab. Muna',
          images: [
            {
              url: '/static/muna.png',
              alt: 'Kab. Muna',
            },
          ],
        }}
      />
      <GlobalBanner bg="/static/mekanisme-sop.jpg">
        <GBHeader
          title="Pengaduan"
          desc="Kab. Muna"
        />
      </GlobalBanner>
      <GlobalContent>
        <HeroContent>
          <Row type="flex" gutter={20} justify="space-between" align="middle">
            <Col sm={12}>
              <div>
                <Title fontSize={34}>Pengaduan</Title>
                <Desc>Masyarakat dapat melakukan pengaduan lewat form berikut.</Desc>
              </div>
            </Col>
            <Col sm={12}>
              <HeroContentDesc>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </HeroContentDesc>
            </Col>
          </Row>
        </HeroContent>
      </GlobalContent>
      <GlobalContent marginTop={60}>
        <CointentWrap>
          <Form {...formItemLayout} onSubmit={handleSubmit}>
            <FormSection>
              <Title>Pelapor</Title>
              <FormItemWrap>
                <Form.Item label="Nama">
                  {getFieldDecorator('informer_name', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan Nama',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Alamat">
                  {getFieldDecorator('informer_address', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan Alamat',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Email">
                  {getFieldDecorator('informer_email', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan Email',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Telp.">
                  {getFieldDecorator('informer_phone', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan No. Telp',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
              </FormItemWrap>
            </FormSection>
            <FormSection>
              <Title>Terlapor</Title>
              <FormItemWrap>
                <Form.Item label="Nama">
                  {getFieldDecorator('suspect_name', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan Nama',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Departemen">
                  {getFieldDecorator('suspect_department', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan Departemen',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Divisi">
                  {getFieldDecorator('suspect_division', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan Division',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
              </FormItemWrap>
            </FormSection>
            <FormSection>
              <Title>Laporan</Title>
              <FormItemWrap>
                <Form.Item label="Subjek">
                  {getFieldDecorator('subject', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan Subjek',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Isi Pengaduan">
                  {getFieldDecorator('complaint', {
                    rules: [
                      {
                        required: true,
                        message: 'Masukkan Pengaduan',
                      },
                    ],
                  })(<Input.TextArea/>)}
                </Form.Item>
                <Form.Item wrapperCol={{...formItemLayout.wrapperCol, offset: 8}}>
                  <Button type="primary" loading={loading} htmlType="submit">{loading ? "Menigirim" : "Kirim"}</Button>
                </Form.Item>
              </FormItemWrap>
            </FormSection>
          </Form>
        </CointentWrap>
      </GlobalContent>
    </PengaduanWrap>
  )
}

export default Form.create({name: "pengaduan"})(Pengaduan)