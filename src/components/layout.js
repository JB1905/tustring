import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Global from "./global"

const Page = styled.div``

const Header = styled.header`
  top: 0;
  position: sticky;
  padding: 6px 1.5rem;
  z-index: 10;
  background-color: #fff;
  border-bottom: 1px solid #0001;
`

const HeaderContent = styled.div`
  max-width: 62rem;
  margin: 0 auto;
`

const Main = styled.main`
  max-width: 62rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const Footer = styled.footer``

const Title = styled.h1`
  font-weight: 900;
  font-size: 3.4rem;
  margin: 0;

  /* font-size: 4.4rem; */

  a {
    :hover {
      text-decoration: none;
    }
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <Page>
      <Header>
        <HeaderContent>
          <Title as={location.pathname === rootPath ? "h1" : "h3"}>
            <Link to={`/`}>{title}</Link>
          </Title>
        </HeaderContent>
      </Header>

      <Main>{children}</Main>

      <Footer></Footer>

      <Global />
    </Page>
  )
}

export default Layout
