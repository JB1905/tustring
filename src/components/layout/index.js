import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Global from "../global"

import { ThemeProvider } from "../../context"

import Header from "../header"

import { Page, Main, Footer } from "./layout.styles"

import { isFeatureEnabled } from "../../../features"

const Layout = ({ location, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <ThemeProvider>
      <Page>
        <Header location={location} title={site.siteMetadata.title} />

        <Main>{children}</Main>

        <Footer>
          Zbudowane przy użyciu{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
          {isFeatureEnabled("footerOpenSource") && (
            <>
              {", kod źródłowy dostępny "}
              <a href="https://github.com/JB1905/tu-string/">Open Source</a>!
            </>
          )}
          {isFeatureEnabled("feed") && (
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          )}
        </Footer>

        <Global />
      </Page>
    </ThemeProvider>
  )
}

export default Layout
