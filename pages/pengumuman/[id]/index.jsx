import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col } from "antd"
import { globalFetch, host } from "Config/api"
import Link from "next/link"
import { convertDate } from "Utils"
import { NextSeo } from "next-seo"

const DetailWrap = styled.div`

`
const PopularNews = styled.div`
  background: #fff;
  padding: 20px 40px;
  margin-top: 20px;
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
const NewsItem = ({item}) => (
  <NewsItemWrap>
    <div>
      <BackgroundImage src={item.image} height={200}/>
    </div>
    <TextWrap>
      <Link href="artikel/[id]" as={`artikel/${item.slug}`}>
        <a>
          <Title color="#fff" fontWeight="normal">
            {item.title}
          </Title>
        </a>
      </Link>
      <NewsDate marginTop={20}>
        {convertDate(item.created_at)}
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
  p {
    margin-top: 10px;
  }
  img {
    width: 100%;
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

const Detail = ({data}) => {
  return (
    <DetailWrap>
      <NextSeo
        title={data.title}
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
      <GlobalBanner bg="/static/mekanisme-sop.jpg">
        
      </GlobalBanner>
      <GlobalContent>
        <CointentWrap>
          <Title fontSize={28} lineHeight={1.4}>
            {data.title}
          </Title>
          <BackgroundImage src={data.image} marginTop={20}/>
          <Flex marginTop={20}>
            <Flex>
              <AuthroDate>{convertDate(data.created_at)}</AuthroDate>
            </Flex>
          </Flex>
          <ContentInner dangerouslySetInnerHTML={{__html: data.description}}/>
        </CointentWrap>
      </GlobalContent>
    </DetailWrap>
  )
}

Detail.getInitialProps = async ({query}) => {
  const data = await globalFetch(`/api/pengumuman/read/${query.id}`)
  
  return {
    data: data.data
  }
}

export default Detail