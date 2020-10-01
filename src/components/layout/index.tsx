import { useStaticQuery, graphql } from 'gatsby'

import Global from '../../styles/global'

import { ThemeProvider } from '../../context'

import Header from '../header'

import { Page, Main, Footer } from './layout.styles'

import { LayoutQuery } from '../../../graphql-types'

interface Props {
  // TODO
  readonly children: React.ReactNode
  readonly location: Location
}

// TODO
const Layout = ({ children, location }: Props) => {
  const { site } = useStaticQuery<LayoutQuery>(query)

  return (
    <ThemeProvider>
      <Page>
        {/* TODO */}
        <Header location={location} title={site.siteMetadata.title} />

        <Main>{children}</Main>

        {/* TODO */}
        <Footer>
          <p>
            Zbudowane przy użyciu{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby.js</a>,<br />
            kod źródłowy dostępny{' '}
            <a href="https://github.com/JB1905/tu-string/">Open Source</a>!
          </p>

          {/* <p style={{opacity: 0.5}}>&bull; &bull; &bull;</p> */}

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
