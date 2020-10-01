import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import SearchForm from '../components/search-form'
import Post from '../components/post'

import { BlogQuery } from '../../graphql-types'

import { isFeatureEnabled } from '../../features'

const NoResults = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 140px;
`

interface Props {
  readonly data: BlogQuery // TODO
  readonly location: Location // TODO
}

const BlogIndex = ({ data, location }: Props) => {
  const allPosts = data.allMarkdownRemark.edges

  const categories = data.categories.group

  const emptyQuery = ''

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = (event: any) => {
    const query = event.target.value // TODO

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter((post: any) => {
      const { title } = post.node.frontmatter

      return title.toLowerCase().includes(query.toLowerCase())
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout location={location}>
      <SEO title="Najnowsze" />

      <Bio />

      {isFeatureEnabled('filters') && (
        <div>
          {categories.map(({ fieldValue }) => (
            <p>{fieldValue}</p>
          ))}
        </div>
      )}

      {isFeatureEnabled('searchForm') && (
        <SearchForm
          //TODO
          // @ts-ignore
          debounceTimeout={300}
          onChange={handleInputChange}
          placeholder="Szukaj..."
        />
      )}

      {posts.length > 0 ? (
        posts.map(({ node }, index) => (
          <Post
            data={node}
            isLastItem={index === posts.length - 1}
            key={node.fields.slug}
          />
        ))
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
