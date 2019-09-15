import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col, Carousel, Pagination } from "antd"
import { globalFetch, host } from "Config/api"
import Link from "next/link"
import { convertDate } from "Utils"

const OPDWrap = styled.div``

const OPDContent = styled.div`
  background: #fff;
  padding: 20px 40px;
  margin-top: 20px;
  position: relative;
  padding: 60px 0;
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
`
const Author = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
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

const ContentWrap = styled.div`
  h2, h3, h4, h5, h6 {
    font-size: 30px;
    font-weight: bold;
    & + p {
      margin-top: 20px;
      color: #797979;
      & + h1, & + h2, & + h3, & + h4, & + h5, & + h6 {
        margin-top: 30px;
      }
    }
  }
`

const OPD = ({data}) => {
  const [related, setRelated] = useState(null)

  useEffect(() => {
    globalFetch(`/api/opd/related?slug=dinas-perhubungan`)
      .then(data => {
        setRelated(data)
      })
  }, [])

  return (
    <OPDWrap>
      <GlobalBanner bg="/static/mekanisme-sop.jpg" height={600}>
        <BannerContent>
          <div>
            <span>Selamat Datang</span>
            <h2>{data.title}</h2>
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
        related ? (
          <RelatedWrap>
            <Container>
              <RelatedInner>
                <RelatedTitle>Berita Terkait</RelatedTitle>
                <Row type="flex" gutter={40}>
                  {
                    related.data.map(item => (
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
    data: data[0].data
  }
}

export default OPD