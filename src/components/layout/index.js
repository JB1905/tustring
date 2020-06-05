import React from "react"

import Global from "../global"

import { ThemeProvider } from "../../context"

import Header from "../header"

import { Page, Main, Footer } from "./layout.styled"

const Layout = ({ location, title, children }) => (
  <ThemeProvider>
    <Page>
      <Header location={location} title={title} />

      <Main>{children}</Main>

      <Footer>
        Zbudowane przy użyciu <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
      </Footer>

      <Global />
    </Page>
  </ThemeProvider>
)

export default Layout
