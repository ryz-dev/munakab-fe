import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Button } from "antd"
import Link from "next/link"
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

export const GlobalTitle = ({title, desc, link = "/", color, button}) => (
  <GlobalTitleWrap>
    <Title color={color}>
      {title}
    </Title>
    <Desc color={color}>
      {desc}
    </Desc>
    <Link href={link}>
      <a>
        <ButtonStyled {...button}>
          Selengkpanya
        </ButtonStyled>
      </a>
    </Link>
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
    content: "";
    background: rgba(0,0,0,.5);
    z-index: -1;
  }
  &:before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    background: ${({bg}) => `url('${bg}')`};
    background-size: cover;
    z-index: -1;
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
  ${({children, ...props}) => ({...props})}
`
const _ContentInner = styled.div`
  background: #fff;
  padding: 40px;
  ${({children, ...props}) => ({...props})}
`
export const GlobalContent = ({children, padding, ...props}) => (
  <GlobalContentWrap {...props}>
    <Container>
      <_ContentInner padding={padding}>
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

const _DropdownContent = styled.div`
  display: ${({toggle}) => toggle ? "block" : "none"};
  @media (min-width: 576px) {
    display: none;
  }
  padding: 0 20px;
`
export const Dropdown = ({title, setNode, children, outToggle}) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
    !toggle ? setNode(children) : setNode(null)
  }
  // useEffect(() => {
  //   setToggle(outToggle)
  // }, [outToggle])
  return (
    <div>
      <div onClick={handleClick}>
        {title}
      </div>
      <_DropdownContent toggle={toggle}>
        {children}
      </_DropdownContent>
    </div>
  )
}

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({children, ...props}) => ({...props})}
`
const GBFlexInner = styled(Flex)`
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
  @media (max-width: 576px) {
    h2 {
      font-size: 32px;
    }
    span {
      font-size: 24px;
      margin-left: 0;
    }
    display: block;
  }
`

const GBFlex = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  position: relative;
  z-index: 10;
`

export const GBHeader = ({title, desc}) => (
  <GBFlex>
    <GBFlexInner>
      <h2>{title}</h2>
      <span>{desc}</span>
    </GBFlexInner>
  </GBFlex>
)

export const ContentWrap = styled.div`
  max-width: 576px;
  margin: 0 auto;
`

export const minSM = "@media (min-width: 577.98px)"
export const minMD = "@media (min-width: 769.98px)"
export const minLG = "@media (min-width: 993.98px)"
export const minXL = "@media (min-width: 1201.98px)"

export const maxSM = "@media (max-width: 575.98px)"
export const maxMD = "@media (max-width: 767.98px)"
export const maxLG = "@media (max-width: 991.98px)"
export const maxXL = "@media (max-width: 1199.98px)"

export const media = ({ type = "min", width = 993.98 }) =>
  `@media (${type}-width: ${width}px)`