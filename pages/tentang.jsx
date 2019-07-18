import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col } from "antd"

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

const Detail = () => {
  return (
    <DetailWrap>
      <GlobalBanner bg="/static/mekanisme-sop.jpg">
        <GBFlex>
          <Flex>
            <h2>Selayang Pandang</h2>
            <span>Kab. Muna</span>
          </Flex>
        </GBFlex>
      </GlobalBanner>
      <GlobalContent>
        <CointentWrap>
          <Title fontSize={28} lineHeight={1.4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Title>
          <BackgroundImage src="/static/mekanisme-sop.jpg" marginTop={20}/>
          <ContentInner>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ContentInner>
        </CointentWrap>
      </GlobalContent>
    </DetailWrap>
  )
}

export default Detail