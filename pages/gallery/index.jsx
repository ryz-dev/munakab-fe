import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage, GBHeader } from "Components/components"
import Container from "Components/container"
import { Row, Col } from "antd"
import { globalFetch, host } from "Config/api"
import { NextSeo } from "next-seo"
import Carousel, { Modal, ModalGateway } from 'react-images';

const DetailWrap = styled.div`
  padding-bottom: 100px;
`
const NewsDate = styled.div`
  font-size: 14px;
  color: #faad14;
  ${({children, ...props}) => ({...props})}
`
const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  ${({children, ...props}) => ({...props})}
`
const Desc = styled.p`
  color: #797979;
  margin-top: 15px;
`
const NewsItemWrap = styled.div`
  padding: 30px 0;
`
const TextWrap = styled.div`
  margin-top: 20px;
`
const NewsItem = () => (
  <NewsItemWrap>
    <div>
      <BackgroundImage src="/static/mekanisme-sop.jpg" height={200}/>
    </div>
    <TextWrap>
      <Title color="#fff" fontWeight="normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </Title>
      <NewsDate marginTop={20}>
        12 December 2019
      </NewsDate>
    </TextWrap>
  </NewsItemWrap>
)
const CointentWrap = styled.div`
  margin: 0 auto;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({children, ...props}) => ({...props})}
`
const AuhtorName = styled.div`
  color: #333;
  font-weight: bold;
  margin-right: 10px;
`
const AuthroDate = styled.div`
  font-size: 14px;
`
const ContentInner = styled.div`
      margin: 40px 0 60px 0;
  p {
    margin-top: 10px;
  }
`
const Share = styled.div`
  span {
    padding: 0 6px;
  }
`
const RelatedWrap = styled.div`
  background: #091A43;
  margin-top: -60px;
`
const RelatedInner = styled.div`
  padding: 100px 0;
`
const RelatedTitle = styled.h4`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`
const GBFlex = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  position: relative;
  z-index: 10;
  h2 {
    font-size: 38px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
  }
  span {
    font-size: 38px;
    text-transform: uppercase;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #fff;
    font-weight: 200;
    color: #fff;
  }
`

const GalleryWrap = styled(Row)`

`
const Image = styled(Col)`
  img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    cursor: pointer;
  }
`

const Detail = () => {
  const [data, setData] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    globalFetch(`/api/galeri`)
      .then(data => {
        const arr = []
        data.data.map(item => {
          arr.push({src: item.path, src: item.path, name: item.name})
        })
        setData(arr)
      })
  }, [])

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleLighBox = i => {
    setCurrent(i)
    setModalIsOpen(true)
  }

  return (
    <DetailWrap>
      <NextSeo
        title="Gallery"
        titleTemplate='%s - Kab. Muna'
        description="Web Portal Kab. muna"
        openGraph={{
          type: 'website',
          url: 'https://www.example.com',
          title: 'Kab. Muna',
          description: 'Web Portal Kab. Muna',
          images: [
            {
              url: data && data[0].path,
              alt: 'Kab. Muna',
            },
          ],
        }}
      />
      <GlobalBanner bg={data && data[0].src}>
        <GBHeader
          title="Gallery"
          desc="Kab. Muna"
        />
      </GlobalBanner>
      <GlobalContent>
        <CointentWrap>
          {/* <Title fontSize={28} lineHeight={1.4}>
            Gallery
          </Title>
          <BackgroundImage src={data && data[0].path} marginTop={20} marginTop={40}/> */}
          {/* <ContentInner dangerouslySetInnerHTML={{__html: data.body}}/> */}
          <div>
            {/* <Carousel views={data} /> */}
            <GalleryWrap>
              {
                data && (
                  data.map((item, i) => (
                    <Image xs={24} sm={12} md={8}>
                      <img onClick={() => handleLighBox(i)} src={item.src} alt={item.name}/>
                    </Image>
                  ))
                )
              }
            </GalleryWrap>
            {data && (
              <ModalGateway>
                {modalIsOpen ? (
                  <Modal onClose={handleModal}>
                    <Carousel
                      currentIndex={current}
                      frameProps={{ autoSize: 'height' }}
                      views={data} />
                  </Modal>
                ) : null}
              </ModalGateway>
            )}
          </div>
        </CointentWrap>
      </GlobalContent>
    </DetailWrap>
  )
}

export default Detail