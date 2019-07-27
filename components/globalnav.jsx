import React, { useEffect, useState, useRef } from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import Router from "next/router"
import Container from "Components/container"
import { Row, Col } from "antd"
import { Dropdown } from "Components/components"

const Nav = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999999;
  a, span {
    color: #373838;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
    padding: 20px;
  }
`
const NavInner = styled.div`
  background: #fff;
  padding: 0 20px;
`

const Flex = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  /* height: 60px; */
  @media (max-width: 576px) {
    display: block;
    ul {
      li {
        padding: 10px 0;
      }
    }
  }
  ${({children, ...props}) => ({...props})}
`
const FlexWrap = styled(Flex)`
  justify-content: space-between;
  @media (min-width: 576px) {
    height: 60px;
  }
  @media (max-width: 568.8px) {
    padding-top: 60px;
    height: ${({toggle}) => toggle ? "auto" : "60px"};
    overflow: hidden;
  }
`
const LeftMenu = styled.li`
  @media (min-width: 576px) {
    width: 50%;
  }
`
const RightMenu = styled.li`
  svg {
    vertical-align: middle;
  }
  a {
    padding: 10px;
  }
  @media (min-width: 576px) {
    width: 50%;
  }
`
const LogoMenu = styled.li`
  padding: 0 10px;
  @media (max-width: 576px) {
    position: absolute;
    flex: none;
    top: 0;
    padding: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`
const Logo = styled.img`
  height: 48px;
`
const NavMenu = styled.div`
  visibility: ${({toggle}) => toggle ? "visible" : "hidden"};
  opacity: ${({toggle}) => toggle ? 1 : 0};
  transition: all .3s ease;
  background: #fff;
  padding: 0 30px;
  height: ${({toggle, self}) => toggle ? self.current.scrollHeight : 0}px;
  overflow: hidden;
  @media (max-width: 576px) {
    display: none;
  }
  ul {
    list-style: none;
    padding: 20px 0;
    li {
      padding: 10px 0;
      a {
        color: #333;
      }
    }
  }
`
const Overlay = styled.div`
  background: rgba(0,0,0,.6);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  visibility: ${({toggle}) => toggle ? "visible" : "hidden"};
  opacity: ${({toggle}) => toggle ? 1 : 0};
  transition: all .3s ease;
  z-index: 999;
`
const MenuToggle = styled.div`
  padding-right: 15px;
  cursor: pointer;
  border-right: 1px solid #e8e8e8;
  margin-right: 5px;
  /* position: absolute;
  right: 30px;
  top: 18px;
  cursor: pointer;
  @media (min-width: 576px) {
    display: none;
  } */
`
const RowStyled = styled(Row)`
  border-top: 1px solid #eaeaea;
`
const DropdownList = styled.ul`
  list-style: none;
  padding-top: 10px;
`
const MenuNavListChild = styled.li`
  a {
    color: #727272;
    font-weight: normal;
  }
`

const Globalnav = ({data}) => {
  const [node, setNode] = useState(null)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [outToggle, setOutToggle] = useState(false)
  const navMenuRef = useRef(null)
  const handleNode = el => {
    setNode(null)
    setNode(el)
    setOutToggle(!!el)
  } 
  const handleClickOverlay = () => {
    setToggleMenu(false)
  }
  const handleClickToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      handleClickOverlay()
    })
    console.dir(navMenuRef.current)
  }, [])
  return (
    <>
      <Nav>
        <Container xl zIndex={9999} position="relative">
          <NavInner>
            <FlexWrap toggle={toggleMenu}>
              <LeftMenu>
                <Flex>
                  <LogoMenu>
                    <Logo src="/static/muna.png"/>
                  </LogoMenu>
                  {/* {
                    data.data.map(item => (
                      <li>
                        <Link href="/download">
                          <a>{item.title}</a>
                        </Link>
                      </li>
                    ))
                  } */}
                  <li>
                    <Link href="/">
                      <a>Beranda</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/artikel">
                      <a>Informasi</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">Layanan</a>
                  </li>
                  {/* <li>
                    <Dropdown
                      title={<span>Profil</span>}
                      outToggle={outToggle}
                      setNode={handleNode}
                    >
                      <DropdownList>
                        <li>
                          <Link href="/tentang">
                            <a>Tentang</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/sejarah">
                            <a>Sejarah</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/visi-misi">
                            <a>Visi dan Misi</a>
                          </Link>
                        </li>
                        <li>
                          <a href="#">Aset Desa</a>
                        </li>
                      </DropdownList>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown
                      title={<span>OPD</span>}
                      outToggle={outToggle}
                      setNode={handleNode}
                    >
                      <DropdownList>
                        <li>
                          <Link href="/tentang">
                            <a>Test</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/sejarah">
                            <a>Sejarah</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/visi-misi">
                            <a>Visi dan Misi</a>
                          </Link>
                        </li>
                        <li>
                          <a href="#">Aset Desa</a>
                        </li>
                      </DropdownList>
                    </Dropdown>
                  </li> */}
                </Flex>
              </LeftMenu>
              <RightMenu>
                <Flex justifyContent="flex-end">
                  <li>
                    <MenuToggle onClick={handleClickToggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </MenuToggle>
                  </li>
                  <li>
                    <a href="#">
                    <svg role="img" width="24px" height="24px" fill="#096dd9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg role="img" width="24px" height="24px" fill="#40a9ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">Info</a>
                  </li>
                </Flex>
              </RightMenu>
            </FlexWrap>
          </NavInner>
          <NavMenu self={navMenuRef} toggle={toggleMenu} ref={navMenuRef}>
            <RowStyled type="flex">
              {
                data.data.map(item => (
                  <Col sm={6}>
                    <div>
                      <ul>
                        <li>
                          <a href="#">{item.title}</a>
                          {
                            item.children && (
                              <MenuNavListChild>
                                {
                                  item.children.map(itemChild => (
                                    <li>
                                      <a href="#">{itemChild.title}</a>
                                    </li>
                                  ))
                                }
                              </MenuNavListChild>
                            )
                          }
                        </li>
                      </ul>
                    </div>
                  </Col>
                ))
              }
            </RowStyled>
          </NavMenu>
        </Container>
        <Overlay toggle={toggleMenu} onClick={handleClickOverlay}/>
      </Nav>
    </>
  )
}

export default Globalnav