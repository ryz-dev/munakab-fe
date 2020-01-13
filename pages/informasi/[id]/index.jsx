import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col } from "antd"
import { globalFetch, host } from "Config/api"
import Link from "next/link"
import { convertDate } from "Utils"
import Dotdotdot from 'react-dotdotdot'
import { useRouter } from 'next/router'
import { Twitter, Facebook, Mail  } from 'react-social-sharing'
import { NextSeo } from "next-seo"
import { maxSM } from "Components/components"

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
  ${maxSM} {
    font-size: 22px;
  }
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
      <Link href="/informasi/[id]" as={`/informasi/${item.slug}`}>
        <a>
          <Title color="#fff" fontWeight="normal">
            <Dotdotdot clamp={3}>
              {item.title}
            </Dotdotdot>
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
`
const Share = styled.div`
  span {
    padding: 0 6px;
  }
`
const RelatedWrap = styled.div`
  background: #091A43;
  margin-top: -60px;
  margin-bottom: -60px;
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

const Detail = () => {
  const [data, setData] = useState(null);
  const [related, setDataRelated] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const fetchArtikel = fetch(`${host}/api/post/read?slug=${router.query.id}`)
    const fetchRelated = fetch(`${host}/api/post/related?slug=${router.query.id}`)
    globalFetch([fetchArtikel, fetchRelated])
      .then(_data => {
        setData(_data[0].data)
        setDataRelated(_data[1].data)
      })
  }, [router])

  return (
    <DetailWrap>
      <NextSeo
        title={data && data.title}
        titleTemplate='%s - Kab. Muna'
        description={data && data.excerpt}
        openGraph={{
          url: data && data.image,
          title: data && data.title,
          description: data && data.excerpt,
          type: 'article',
          article: {
            publishedTime: data && data.created_at,
            modifiedTime: data && data.updated_at,
            authors: [
              data && data.author,
            ],
            tags: [data && data.category],
          },
          images: [
            {
              url: data && data.image,
              alt: data && data.title,
            },
          ],
        }}
      />
      <GlobalBanner bg={data && data.image}>
      </GlobalBanner>
      <GlobalContent>
        <CointentWrap>
          <Title fontSize={28} lineHeight={1.4}>
            {data && data.title}
          </Title>
          <BackgroundImage marginTop={60} src={data && data.image} marginTop={20}/>
          <Flex marginTop={20}>
            <Flex css={css`
              ${maxSM} {
                display: block;
                margin-bottom: 10px;
              }
            `}>
              <AuhtorName>{data && data.author}</AuhtorName>
              <AuthroDate>{convertDate(data && data.created_at)}</AuthroDate>
            </Flex>
            <Share css={css`
              ${maxSM} {
                text-align: center;
              }
            `}>
              <span>
                <Facebook solid small link="http://sharingbuttons.io"/>
              </span>
              <span>
                <Twitter solid small link="http://sharingbuttons.io"/>
              </span>
              <span>
                <Mail solid small link="http://sharingbuttons.io"/>
              </span>
            </Share>
          </Flex>
          <ContentInner dangerouslySetInnerHTML={{__html: data && data.body}}/>
        </CointentWrap>
      </GlobalContent>
      {
        related && related.length ? (
          <RelatedWrap>
            <Container>
              <RelatedInner>
                <RelatedTitle>Berita Terkait</RelatedTitle>
                <Row type="flex" gutter={40}>
                  {
                    related.map(item => (
                      <Col md={8}>
                        <NewsItem item={item}/>
                      </Col>
                    ))
                  }
                </Row>
              </RelatedInner>
            </Container>
          </RelatedWrap>
        ) : null
      }
    </DetailWrap>
  )
}

// Detail.getInitialProps = async ({query}) => {
//   const fetchArtikel = fetch(`${host}/api/post/read?slug=${query.id}`)
//   const fetchRelated = fetch(`${host}/api/post/related?slug=${query.id}`)
//   const data = await globalFetch([fetchArtikel, fetchRelated])
  
//   return {
//     data: data[0].data,
//     related: data[1].data
//   }
// }

export default Detail