import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Post from '../components/post'

import { PageQuery, SitePageContext } from '../../graphql-types'

interface Props {
  readonly data: PageQuery
  readonly pageContext: SitePageContext
  readonly location: Location
}

const Tags = ({ pageContext, data, location }: Props) => {
  const { tag } = pageContext

  // TODO totalCount types
  const { edges, totalCount } = data!.allMarkdownRemark!

  const tagHeader = `${totalCount} artykuł${
    totalCount === 1 ? '' : 'y'
  } z oznaczeniem: "${tag}"`

  return (
    <Layout location={location}>
      <h3>{tagHeader}</h3>

      {edges.map(({ node }) => (
        <Post data={node} key={node!.fields!.slug!} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query Page($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      ...BlogPost
    }
  }
`

export default Tags
