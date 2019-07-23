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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </Flex>
        </NavInner>
      </Container>
    </Nav>
  )
}

export default Globalnav