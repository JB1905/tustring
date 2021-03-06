import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

// TODO
import { PostTitle } from '../components/post/post.styles'

import { formatPostDate } from '../helpers'

import { BlogPostBySlugQuery } from '../../graphql-types'

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

interface Props {
  readonly data: BlogPostBySlugQuery
  readonly pageContext: any // TODO
  readonly location: Location
}

const BlogPostTemplate = ({ data, pageContext, location }: Props) => {
  const post = data.markdownRemark

  const { previous, next } = pageContext

  const { title, date } = post!.frontmatter!

  return (
    <Layout location={location}>
      <SEO title={title!} description={post!.excerpt!} />

      {/* TODO replace with Post */}
      <article>
        <header>
          <PostTitle as="h1">{title}</PostTitle>

          <span>{formatPostDate(date, 'pl')}</span>
        </header>

        <section dangerouslySetInnerHTML={{ __html: post!.html! }} />

        <Footer>
          <Bio />
        </Footer>
      </article>

      <Pagination>
        <ul>
          {previous && (
            <li>
              <Link to={previous!.fields!.slug!} rel="prev">
                ← {previous!.frontmatter!.title!}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next!.fields!.slug!} rel="next">
                {next!.frontmatter!.title!} →
              </Link>
            </li>
          )}
        </ul>
      </Pagination>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPostTemplate
