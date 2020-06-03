import React from "react"
import DarkModeToggle from "react-dark-mode-toggle"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Link } from "gatsby"

import Global from "../global"

import {
  Page,
  Header,
  HeaderContent,
  Title,
  Main,
  Footer,
} from "./layout.styled"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <Page>
      <Header>
        <HeaderContent>
          <Title as={location.pathname === rootPath ? "h1" : "h3"}>
            <Link to={`/`}>{title}</Link>
          </Title>

          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <DarkModeToggle
                onChange={e => toggleTheme(e ? "dark" : "light")}
                checked={theme === "dark"}
                size={60}
              />
            )}
          </ThemeToggler>
        </HeaderContent>
      </Header>

      <Main>{children}</Main>

      <Footer>
        Zbudowane przy użyciu <a href="https://www.gatsbyjs.org/">Gatsby.js</a>,
        kod źródłowy dostępny{" "}
        <a href="https://github.com/JB1905/tu-string/">Open Source</a>!
      </Footer>

      <Global />
    </Page>
  )
}

export default Layout
