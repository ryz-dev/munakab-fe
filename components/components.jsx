import styled from "@emotion/styled"
import { Button } from "antd"
import Container from "Components/container"

const Title = styled.h2`
  font-size: 38px;
  font-weight: bold;
  ${({children, ...props}) => ({...props})}
`
const Desc = styled.p`
  font-size: 18px;
  color: #727272;
  margin-top: 20px;
  ${({children, ...props}) => ({...props})}
`
export const ButtonStyled = styled(Button)`
  background: transparent;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #1d9fff;
  border: 1px solid #1d9fff;
  border-radius: 0;
  margin-top: 20px;
  ${({children, ...props}) => ({...props})}
`
const GlobalTitleWrap = styled.div`
  ${({children, ...props}) => ({...props})}
`

export const GlobalTitle = ({title, desc, link, color, button}) => (
  <GlobalTitleWrap>
    <Title color={color}>
      {title}
    </Title>
    <Desc color={color}>
      {desc}
    </Desc>
    <ButtonStyled {...button}>
      Selengkpanya
    </ButtonStyled>
  </GlobalTitleWrap>
)

const GlobalBannerWrap = styled.div`
  height: 400px;
  position: relative;
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    content: "";
    background: rgba(0,0,0,.5);
  }
  &:before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    z-index: 0;
    background: ${({bg}) => `url('${bg}')`};
    background-size: cover;
  }
  ${({children, ...props}) => ({...props})}
`

export const GlobalBanner = ({children, ...props}) => (
  <GlobalBannerWrap {...props}>
    <Container>
      {children}
    </Container>
  </GlobalBannerWrap>
)

const GlobalContentWrap = styled.div`
  margin-top: -60px;
  position: relative;
`
const _ContentInner = styled.div`
  background: #fff;
  padding: 40px;
`
export const GlobalContent = ({children}) => (
  <GlobalContentWrap>
    <Container>
      <_ContentInner>
        {children}
      </_ContentInner>
    </Container>
  </GlobalContentWrap>
)

export const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  ${({children, ...props}) => ({...props})}
`
