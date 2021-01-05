import { useState } from 'react'
import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
// import SearchForm from '../components/search-form'
import Post from '../components/post'

import { centerContent } from '../styles/mixins'

import { BlogQuery } from '../../graphql-types'

const NoResults = styled.div`
  flex: 1;
  min-height: 140px;
  ${centerContent}
`

interface Props {
  readonly data: BlogQuery
  readonly location: Location
}

const BlogIndex = ({ data, location }: Props) => {
  const allPosts = data.allMarkdownRemark.edges

  // const categories = data.categories.group

  const emptyQuery = ''

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { title } = post.node.frontmatter

      return title.toLowerCase().includes(query.toLowerCase())
    })

    setState({ query, filteredData })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout location={location}>
      <SEO title="Najnowsze" />

      <Bio />

      {/* <div>
        {categories.map(({ fieldValue }) => (
          <p key={fieldValue}>{fieldValue}</p>
        ))}
      </div> */}

      {/* <SearchForm
        // @ts-ignore
        debounceTimeout={300}
        onChange={handleInputChange}
        placeholder="Szukaj..."
      /> */}

      {posts.length > 0 ? (
        posts.map(({ node }) => <Post data={node} key={node.fields.slug} />)
      ) : (
        <NoResults>
          <h3>Nie znaleziono artykułów</h3>
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
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
`

export default BlogIndex
