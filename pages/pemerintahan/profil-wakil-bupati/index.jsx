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
  max-width: 992px;
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

const Profile = styled.div`
  margin-bottom: 40px;
`

const ProfileImage = styled.div`
  background: url("${({bg}) => bg}");
  height: 500px;
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
const ProfileTextWrap = styled.div`
  label {
    width: 30%;
    display: inline-block;
    color: #757272;
  }
  & > div {
    margin-bottom: 20px;
  }
`

const ContentInnerInner = styled.div`
  margin: 0 auto;
  max-width: 576px;
`

const Detail = ({data}) => {
  return (
    <DetailWrap>
      <NextSeo
        title="Profil Wakil Bupati"
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
      <GlobalBanner bg="/static/mekanisme-sop.jpg">
        <GBHeader
          title="Profil Wakil Bupati"
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
            <Row type="flex" gutter={40}>
              <Col xs={12} sm={8}>
                <Profile>
                  <ProfileImage bg="/static/lm-rusman-emba.jpg"/>
                </Profile>
              </Col>
              <Col xs={12} sm={16}>
                <ProfileTextWrap>
                  <div>
                    <label>Nama</label>
                    <span>L.M. Rusman Emba</span>
                  </div>
                  <div>
                    <label>Profesi</label>
                    <span>Politisi</span>
                  </div>
                  <div>
                    <label>Tempat Lahir</label>
                    <span>Raha</span>
                  </div>
                  <div>
                    <label>Tanggal Lahir</label>
                    <span>Minggu, 15 April 1973</span>
                  </div>
                  <div>
                    <label>Warga Negara</label>
                    <span>Indonesia</span>
                  </div>
                </ProfileTextWrap>
              </Col>
            </Row>
            <ContentInnerInner>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, aut explicabo? Provident impedit voluptatem quasi eos, minus dolor laboriosam quas iste officia doloremque qui magni perspiciatis non iure odio ipsum.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, aut explicabo? Provident impedit voluptatem quasi eos, minus dolor laboriosam quas iste officia doloremque qui magni perspiciatis non iure odio ipsum.</p>
            </ContentInnerInner>
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