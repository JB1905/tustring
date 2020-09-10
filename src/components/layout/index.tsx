import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Global from "../../styles/global"

import { ThemeProvider } from "../../context"

import Header from "../header"

import { Page, Main, Footer } from "./layout.styles"

import { isFeatureEnabled } from "../../../features"

interface Props {
  readonly title: string // TODO
  readonly location: Location // TODO
}

const Layout: React.FC<Props> = ({ children, location }) => {
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
