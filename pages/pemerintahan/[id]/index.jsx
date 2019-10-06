import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage, GBHeader } from "Components/components"
import Container from "Components/container"
import { Row, Col } from "antd"
import { globalFetch, host } from "Config/api"
import { NextSeo } from "next-seo"
import { PGOrgChart } from "Components/styled"

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
  max-width: 992px;
  margin: 0 auto;
  ${({children, ...props}) => ({...props})}
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

const Profile = styled.div`
  margin-bottom: 40px;
`

const ProfileImage = styled.div`
  background: url("${({bg}) => bg}");
  height: 300px;
  background-size: cover;
`
const ProfileText = styled.div`
  margin-top: 20px;
  h4 {
    font-weight: bold;
  }
  span {
    color: #797878;
  }
`

const Detail = ({data, slug}) => {
  // const [dataFetch, setData] = useState(null)

  // useEffect(() => {
  //   globalFetch('/api/struktur-pemerintahan')
  //     .then(data => {
  //       setData(data.data)
  //     })
  // }, [])
  console.log(data, slug)

  const isDynamic = slug === "struktur-pemerintahan"

  return (
    <DetailWrap>
      <NextSeo
        title="Struktur Pemerintahan"
        titleTemplate='%s - Kab. Muna'
        description="Web Portal Kab. muna"
        openGraph={{
          type: 'website',
          url: 'https://www.example.com',
          title: 'Kab. Muna',
          description: 'Web Portal Kab. Muna',
          images: [
            {
              url: "/static/lm-rusman-emba.jpg",
              alt: 'Kab. Muna',
            },
          ],
        }}
      />
      <GlobalBanner bg="/static/bg-muna.jpg">
        <GBHeader
          title="Struktur Pemerintahan"
          desc="Kab. Muna"
        />
      </GlobalBanner>
      <GlobalContent>
        <CointentWrap maxWidth={!isDynamic ? 576 : 992}>
          <Title fontSize={28} lineHeight={1.4}>
            {data.title}
          </Title>
          {
            !isDynamic ? (
              <>
              <BackgroundImage src={data.image} marginTop={20} marginTop={40}/>
              <ContentInner dangerouslySetInnerHTML={{__html: data.body}}/>
              </>
            ) : (
              <ContentInner>
                <PGOrgChart>
                  <div class="org-chart">
                    <ul>
                      <li>
                        {
                          data && (
                            <div class="user">
                              <img src={data.image} class="img-responsive" />
                              <div class="name">{data.nama}</div>
                              <div class="role">{data.jabatan}</div>
                              <a class="manager" href="#">{data.masa_bakti}</a>
                            </div>
                          )
                        }
                        <ul>
                          {
                            data && data.bawahan.map(item => {
                              return (
                                <li>
                                  <div class="user">
                                    <img src={item.image} class="img-responsive" />
                                    <div class="name">{item.nama}</div>
                                    <div class="role">{item.jabatan}</div>
                                    <a class="manager" href="#">{item.masa_bakti}</a>
                                  </div>
                                  {
                                    item.bawahan.length ? (
                                      <ul>
                                        {
                                          item.bawahan.map(itemChild => (
                                            <li>
                                              <div class="user">
                                                <img src={itemChild.image} class="img-responsive" />
                                                <div class="name">{itemChild.nama}</div>
                                                <div class="role">{itemChild.jabatan}</div>
                                                <a class="manager" href="#">{itemChild.masa_bakti}</a>
                                              </div>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                    ) : null
                                  }
                                </li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </PGOrgChart>
              </ContentInner>
            )
          }
        </CointentWrap>
      </GlobalContent>
    </DetailWrap>
  )
}

Detail.getInitialProps = async ({query}) => {
  let fetchTentang
  if (query.id === "struktur-pemerintahan") {
    fetchTentang = fetch(`${host}/api/struktur-pemerintahan`)
  } else {
    fetchTentang = fetch(`${host}/api/pages/read?slug=${query.id}`)
  }

  let datas = null
  
  await globalFetch([
    fetchTentang
  ])
  .then(data => {
    datas = data
  })

  return {data: datas[0].data, slug: query.id}
}

export default Detail