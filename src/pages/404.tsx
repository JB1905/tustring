import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface Props {
  readonly data: any // TODO
  readonly location: Location
}

// TODO update component
const NotFoundPage: React.FC<Props> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      {/* <SEO title="404: Not Found" /> */}

      {/* <h1>Not Found</h1> */}

      {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
