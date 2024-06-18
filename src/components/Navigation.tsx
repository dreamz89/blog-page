import { Layout } from "antd"
import styled from "styled-components"

import { Container } from "styles/global"
import logo from "logo.svg"

const { Header } = Layout

const Nav = styled(Header)`
  div {
    display: flex;
    align-items: center;
  }
`

const Logo = styled.img`
  height: 48px;
  width: 48px;
`

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <Logo src={logo} alt="logo" />
      </Container>
    </Nav>
  )
}

export default Navigation
