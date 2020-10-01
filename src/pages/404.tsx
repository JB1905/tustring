import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { NotFoundQuery } from '../../graphql-types'

interface Props {
  readonly data: NotFoundQuery
  readonly location: Location
}

// TODO update component
const NotFoundPage = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />

      <h2>Not Found</h2>

      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default NotFoundPage
