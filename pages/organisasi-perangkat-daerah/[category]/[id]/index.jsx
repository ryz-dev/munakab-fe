import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage, maxSM } from "Components/components"
import Container from "Components/container"
import { Row, Col, Carousel, Pagination } from "antd"
import { globalFetch, host } from "Config/api"
import Link from "next/link"
import { convertDate } from "Utils"
import Dotdotdot from 'react-dotdotdot'
import { NextSeo } from "next-seo"

const OPDWrap = styled.div``

const OPDContent = styled.div`
  background: #fff;
  padding: 20px 40px;
  margin-top: 60px;
  position: relative;
  padding: 60px 0;
  &:after {
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 30%;
    background: url('/static/bg-text-muna.png') no-repeat;
    content: " ";
  }
`

const BannerContent = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
  position: relative;
  justify-content: center;
  text-align: center;
  span {
    font-size: 25px;
    color: #fff;
  }
  h2 {
    font-size: 40px;
    color: #fff;
    margin-top: 10px;
    font-weight: bold;
  }
`

const BCLeft = styled.div`
  h3 {
    font-size: 30px;
    font-weight: bold;
  }
`

const Quote = styled.div`
  padding: 0 30px;
  border-left: 2px solid #e8e8e8;
  ${maxSM} {
    padding: 0;
    border-left: none;
    margin-top: 30px;
  }
`
const Author = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  ${maxSM} {
    padding: 0;
  }
`
const AuthorProfile = styled.img`
  width: 40px;
  height: 40px;
  background: #d7d7d7;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
`

const TitleContent = styled.h4`
  font-size: 30px;
  font-weight: bold;
  & + p {
    margin-top: 20px;
    color: #797979;
  }
`

const ContentSection = styled.div`
  margin-top: 60px;
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

const ContentWrap = styled.div`
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

const ExternalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 6px;
  font-size: 14px;
  margin: 25px auto 0 auto;
  height: 40px;
  max-width: 150px;
  span {
    font-size: 16px;
  }
`

const OPD = ({data, slug}) => {
  const [related, setRelated] = useState(null)

  useEffect(() => {
    globalFetch(`/api/opd/related?slug=${slug}`)
      .then(data => {
        setRelated(data)
      })
  }, [slug])

  return (
    <OPDWrap>
      <NextSeo
        title={data.title}
        titleTemplate='%s - Kab. Muna'
        description="Web Portal Kab. muna"
        openGraph={{
          type: 'website',
          url: 'https://www.example.com',
          title: 'Kab. Muna',
          description: data.welcome_message,
          images: [
            {
              url: '/static/muna.png',
              alt: 'Kab. Muna',
            },
          ],
        }}
      />
      <GlobalBanner bg={data.image} height={600} style={{height: 600}}>
        <BannerContent>
          <div>
            <span>Selamat Datang</span>
            <h2>{data.title}</h2>
            {
              data.link && (
                <ExternalLink href={data.link} target="_blank">
                  <span style={{marginRight: 10}}>Website</span>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="arcs"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                  </span>
                </ExternalLink>
              )
            }
          </div>
        </BannerContent>
      </GlobalBanner>
      <GlobalContent>
        <Row type="flex" align="middle" gutter={20}>
          <Col sm={12}>
            <BCLeft>
              <h3>Sambutan</h3>
              <p>Ketua {data.title}</p>
            </BCLeft>
          </Col>
          <Col sm={12}>
            <div>
              <Quote dangerouslySetInnerHTML={{__html: data.welcome_message}}/>
              <Author>
                <AuthorProfile src={data.kepala_dinas_image}></AuthorProfile>
                <div>
                  {data.kepala_dinas}
                </div>
              </Author>
            </div>
          </Col>
        </Row>
      </GlobalContent>
      <div>
        <Container>
          <OPDContent>
            <Container type="sm">
              <ContentWrap dangerouslySetInnerHTML={{__html: data.body}}>
                {/* <ContentSection>
                  <TitleContent>Tugas Pokok</TitleContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </ContentSection>
                <ContentSection>
                  <TitleContent>Tugas Pokok</TitleContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </ContentSection> */}
              </ContentWrap>
            </Container>
          </OPDContent>
        </Container>
      </div>
      {
        related && related.data ? (
          <RelatedWrap>
            <Container>
              <RelatedInner>
                <RelatedTitle>Berita Terkait</RelatedTitle>
                <Row type="flex" gutter={40}>
                  {
                    related.data && related.data.map(item => (
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
    </OPDWrap>
  )
}

OPD.getInitialProps = async ({query}) => {
  const fetchArtikel = fetch(`${host}/api/opd/read?slug=${query.id}`)
  const data = await globalFetch([fetchArtikel])
  
  return {
    data: data[0].data,
    slug: query.id,
  }
}

export default OPD