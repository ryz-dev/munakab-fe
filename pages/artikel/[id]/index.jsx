import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, BackgroundImage } from "Components/components"
import Container from "Components/container"
import { Row, Col } from "antd"

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

const Detail = () => {
  return (
    <DetailWrap>
      <GlobalBanner bg="/static/mekanisme-sop.jpg">
        
      </GlobalBanner>
      <GlobalContent>
        <CointentWrap>
          <Title fontSize={28} lineHeight={1.4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Title>
          <BackgroundImage src="/static/mekanisme-sop.jpg" marginTop={20}/>
          <Flex marginTop={20}>
            <Flex>
              <AuhtorName>Muhammad Rusdi</AuhtorName>
              <AuthroDate>12 Desember 2019</AuthroDate>
            </Flex>
            <Share>
              <span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <g clipPath="url(#clip0)">
                <path d="M14.9712 2.85562C14.4181 3.09875 13.8275 3.26437 13.2056 3.34C13.8394 2.95812 14.3269 2.35625 14.5575 1.63812C13.9631 1.985 13.3044 2.2375 12.6031 2.37812C12.0431 1.77875 11.245 1.40375 10.3587 1.40375C8.66062 1.40375 7.28375 2.78062 7.28375 4.47687C7.28375 4.72062 7.31187 4.955 7.36312 5.17937C4.80687 5.05875 2.54125 3.83125 1.025 1.97562C0.758125 2.42687 0.60875 2.95125 0.60875 3.5225C0.60875 4.59125 1.1525 5.53062 1.97625 6.0825C1.47187 6.06625 0.9975 5.9275 0.58375 5.6975V5.73562C0.58375 7.22625 1.64187 8.46937 3.05 8.7525C2.79187 8.82187 2.51937 8.85937 2.24 8.85937C2.04375 8.85937 1.85562 8.84062 1.6675 8.80562C2.06187 10.0262 3.19562 10.9162 4.545 10.9412C3.495 11.7656 2.16437 12.2569 0.73125 12.2569C0.4875 12.2569 0.244375 12.2425 0 12.215C1.36812 13.0862 2.98 13.5956 4.72312 13.5956C10.3819 13.5956 13.4725 8.91062 13.4725 4.85437C13.4725 4.72375 13.4725 4.59187 13.4631 4.46062C14.0637 4.03 14.5881 3.48562 15.0006 2.86812L14.9712 2.85562Z" fill="#4094F5"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="15" height="15" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </span>
              <span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M14.9988 7.49944C14.9988 3.3576 11.6412 0 7.49944 0C3.3576 0 0 3.3576 0 7.49944C0 11.2426 2.74243 14.3451 6.32762 14.9078V9.66725H4.42349V7.49944H6.32762V5.84721C6.32762 3.96766 7.44725 2.92946 9.16025 2.92946C9.98075 2.92946 10.839 3.07593 10.839 3.07593V4.92149H9.89338C8.96175 4.92149 8.67119 5.49958 8.67119 6.09265V7.49944H10.7511L10.4186 9.66725H8.67119V14.9078C12.2564 14.3451 14.9988 11.2426 14.9988 7.49944Z" fill="#0F61C2"/>
                </svg>
              </span>
            </Share>
          </Flex>
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
      <RelatedWrap>
        <Container>
          <RelatedInner>
            <RelatedTitle>Berita Terkait</RelatedTitle>
            <Row type="flex" gutter={40}>
              <Col md={8}>
                <NewsItem/>
              </Col>
              <Col md={8}>
                <NewsItem/>
              </Col>
              <Col md={8}>
                <NewsItem/>
              </Col>
            </Row>
          </RelatedInner>
        </Container>
      </RelatedWrap>
    </DetailWrap>
  )
}

export default Detail