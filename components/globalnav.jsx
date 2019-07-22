import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import Router from "next/router"
import Container from "Components/container"
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
  }
`
const NavInner = styled.div`
  background: #fff;
  padding: 0 20px;
`

const Flex = styled.ul`
  display: flex;
  justify-content: space-around;
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
`
const FlexWrap = styled(Flex)`
  @media (max-width: 576px) {
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
  @media (min-width: 576px) {
    width: 50%;
  }
`
const LogoMenu = styled.li`
  padding: 0 40px;
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
  height: 52px;
`
const NavMenu = styled.div`
  visibility: ${({toggle}) => toggle ? "visible" : "hidden"};
  background: #fff;
  padding: 0 30px;
  height: ${({toggle}) => toggle ? "auto" : 0};
  overflow: hidden;
  @media (max-width: 576px) {
    display: none;
  }
  ul {
    border-top: 1px solid #eaeaea;
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
  position: absolute;
  right: 30px;
  top: 18px;
  cursor: pointer;
  @media (min-width: 576px) {
    display: none;
  }
`
const DropdownList = styled.ul`
  list-style: none;
  padding-top: 10px;
`

const Globalnav = () => {
  const [node, setNode] = useState(null)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [outToggle, setOutToggle] = useState(false)
  const handleNode = el => {
    setNode(null)
    setNode(el)
    setOutToggle(!!el)
  } 
  const handleClickOverlay = () => {
    setOutToggle(false)
    setNode(null)
  }
  const handleClickToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      handleClickOverlay()
    })
  }, [])
  return (
    <>
      <Nav>
        <Container xl>
          <NavInner>
            <FlexWrap toggle={toggleMenu}>
              <LeftMenu>
                <Flex justifyContent="space-between">
                  <li>
                    <Link href="/">
                      <a>Beranda</a>
                    </Link>
                  </li>
                  <li>
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
                  </li>
                </Flex>
              </LeftMenu>
              <LogoMenu>
                <Logo src="/static/muna.png"/>
              </LogoMenu>
              <RightMenu>
                <Flex justifyContent="space-between">
                  <li>
                    <Link href="/download">
                      <a>Data</a>
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
                </Flex>
              </RightMenu>
              <MenuToggle onClick={handleClickToggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </MenuToggle>
            </FlexWrap>
          </NavInner>
          <NavMenu toggle={node}>
            {node}
          </NavMenu>
        </Container>
      </Nav>
      <Overlay toggle={outToggle} onClick={handleClickOverlay}/>
    </>
  )
}

export default Globalnav