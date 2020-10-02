import { useStaticQuery, graphql } from 'gatsby'

import Global from '../../styles/global'

import { ThemeProvider } from '../../context'

import Header from '../header'

import { Page, Main, Footer } from './layout.styles'

import { LayoutQuery } from '../../../graphql-types'

import { isFeatureEnabled } from '../../../features'

interface Props {
  readonly children: React.ReactNode
  readonly location: Location
}

const Layout = ({ children, location }: Props) => {
  const { site } = useStaticQuery<LayoutQuery>(query)

  return (
    <ThemeProvider>
      <Page>
        <Header location={location} title={site.siteMetadata.title} />

        <Main>{children}</Main>

        <Footer>
          <p>
            Zbudowane przy użyciu{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
            {isFeatureEnabled('footerOpenSource') && (
              <>
                ,<br />
                kod źródłowy dostępny{' '}
                <a href="https://github.com/JB1905/tu-string/">Open Source</a>!
              </>
            )}
          </p>

          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            Subskrybuj kanał RSS
          </a>
        </Footer>

        <Global />
      </Page>
    </ThemeProvider>
  )
}

export const query = graphql`
  query Layout {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
