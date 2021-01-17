import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import Post from '../components/post'

import { centerContent } from '../styles/mixins'

import { BlogQuery } from '../../graphql-types'

const NoResults = styled.div`
  flex: 1;
  min-height: 140px;
  ${centerContent}

  h2 {
    font-size: var(--font-size-md);
  }
`

interface Props {
  readonly data: BlogQuery
  readonly location: Location
}

const BlogIndex = ({ data, location }: Props) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Najnowsze" />

      <Bio />

      {posts.length > 0 ? (
        posts.map(({ node }) => <Post data={node} key={node!.fields!.slug!} />)
      ) : (
        <NoResults>
          <h2>Nie znaleziono artykułów</h2>
        </NoResults>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query Blog {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...BlogPost
    }
  }
`

export default BlogIndex
