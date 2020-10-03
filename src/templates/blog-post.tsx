import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { formatPostDate } from '../helpers'

import { BlogPostBySlugQuery, SitePageContext } from '../../graphql-types'

import { isFeatureEnabled } from '../../features'

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

const TagList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`

const TagItem = styled.li`
  border: 1px solid var(--border-color);
  border-radius: var(--radius-corners);
  margin-right: 4px;

  a {
    padding: 4px 12px;
    display: inline-block;
  }
`

interface Props {
  readonly data: BlogPostBySlugQuery
  readonly pageContext: SitePageContext
  readonly location: Location
}

const BlogPostTemplate = ({ data, pageContext, location }: Props) => {
  const post = data.markdownRemark

  const { previous, next } = pageContext

  const { title, description, date, tags } = post.frontmatter

  return (
    <Layout location={location}>
      <SEO title={title} description={description ?? post.excerpt} />

      <article>
        <header>
          <h1>{title}</h1>

          <span>{formatPostDate(date, 'pl')}</span>

          {isFeatureEnabled('tags') && (
            <TagList>
              {tags.map(tag => (
                <TagItem key={tag}>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </TagItem>
              ))}
            </TagList>
          )}
        </header>

        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        <Footer>
          <Bio />
        </Footer>
      </article>

      {isFeatureEnabled('comments') && (
        <DiscussionEmbed
          shortname="tu-string"
          config={{
            title,
            url: 'http://localhost:8000',
            identifier: title,
            language: 'pl_PL',
          }}
        />
      )}

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

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default BlogPostTemplate
