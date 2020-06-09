import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Post from "../components/post"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext

  const { edges, totalCount } = data.allMarkdownRemark

  const tagHeader = `${totalCount} artykuł${
    totalCount === 1 ? "" : "y"
  } z oznaczeniem: "${tag}"`

  return (
    <Layout location={location}>
      <h3>{tagHeader}</h3>

      {edges.map(({ node }, index) => (
        <Post
          data={node}
          isLastItem={index === edges.length - 1}
          key={node.fields.slug}
        />
      ))}
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      ...BlogPost
    }
  }
`
