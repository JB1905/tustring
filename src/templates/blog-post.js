import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { DiscussionEmbed } from "disqus-react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { formatPostDate } from "../helpers"

const Footer = styled.footer`
  margin-top: 50px;
`

const Pagination = styled.nav`
  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 8px 0;
      text-align: center;
    }
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  const siteTitle = data.site.siteMetadata.title

  const { previous, next } = pageContext

  const { title, description, date, tags, category } = post.frontmatter

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description={description || post.excerpt} />

      <article>
        <header>
          <h1>{title}</h1>

          <span>{formatPostDate(date, "pl")}</span>

          <div>
            {tags?.map(tag => (
              <Link to={`/tags/${tag}`}>{tag}</Link>
            ))}

            {category && <Link to={`/categories/${category}`}>{category}</Link>}
          </div>
        </header>

        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        <Footer>
          <Bio />
        </Footer>
      </article>

      <DiscussionEmbed />

      <Pagination>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Pagination>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        category
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
