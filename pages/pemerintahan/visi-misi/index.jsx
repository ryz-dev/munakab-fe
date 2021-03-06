import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage, GBHeader } from "Components/components"
import Container from "Components/container"
import { Row, Col } from "antd"
import { globalFetch, host } from "Config/api"
import { NextSeo } from "next-seo"

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
  max-width: 576px;
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
  h1, h2, h3, h4, h5, h6 {
    font-size: 30px;
    font-weight: bold;
    & + p {
      margin-top: 20px !important;
      color: #797979;
      & + h1, & + h2, & + h3, & + h4, & + h5, & + h6 {
        margin-top: 30px;
      }
    }
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

const Detail = ({data}) => {
  return (
    <DetailWrap>
      <NextSeo
        title="Visi Misi"
        titleTemplate='%s - Kab. Muna'
        description="Web Portal Kab. muna"
        openGraph={{
          type: 'website',
          url: 'https://www.example.com',
          title: 'Kab. Muna',
          description: 'Web Portal Kab. Muna',
          images: [
            {
              url: data.image,
              alt: 'Kab. Muna',
            },
          ],
        }}
      />
      <GlobalBanner bg={data.image}>
        <GBHeader
          title="Visi Misi"
          desc="Kab. Muna"
        />
      </GlobalBanner>
      <GlobalContent>
        <CointentWrap>
          <Title fontSize={28} lineHeight={1.4}>
            {data.title}
          </Title>
          <BackgroundImage src={data.image} marginTop={20} marginTop={40}/>
          <ContentInner>
            <h2>Visi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam ea esse, tempora nostrum, obcaecati facere fugit inventore praesentium blanditiis quos quia accusamus odit repellat id quidem ipsam optio laborum.</p>

            <h2>Misi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam ea esse, tempora nostrum, obcaecati facere fugit inventore praesentium blanditiis quos quia accusamus odit repellat id quidem ipsam optio laborum.</p>
          </ContentInner>
        </CointentWrap>
      </GlobalContent>
    </DetailWrap>
  )
}

Detail.getInitialProps = async ({query}) => {
  const fetchTentang = fetch(`${host}/api/pages/read?slug=${query.id}`)

  let datas = null
  
  await globalFetch([
    fetchTentang
  ])
  .then(data => {
    datas = data
  })

  return {data: datas[0].data}
}

export default Detail