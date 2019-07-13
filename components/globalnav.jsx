import React from "react"
import styled from "@emotion/styled"
import Container from "Components/container"

const Nav = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 
  height: 60px;
  z-index: 9999999;
  a {
    color: #373838;
    font-weight: bold;
  }
`
const NavInner = styled.div`
  background: #fff;
  padding: 0 20px;
`

const Flex = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  height: 60px;
`

const Globalnav = () => {
  return (
    <Nav>
      <Container xl>
        <NavInner>
          <Flex>
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">OPD</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Informasi</a>
            </li>
            <li>
              <a href="#">Layanan</a>
            </li>
          </Flex>
        </NavInner>
      </Container>
    </Nav>
  )
}

export default Globalnav