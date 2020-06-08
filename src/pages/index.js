import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import SearchForm from "../components/search-form"
import Post from "../components/post"

const BlogIndex = ({ data, location }) => {
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags, category } = post.node.frontmatter

      return (
        // description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
        // ||
        // category.toLowerCase().includes(query.toLowerCase()) ||
        // tags
        //   .join("")
        //   .toLowerCase()
        //   .includes(query.toLowerCase())
      )
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

      {/*<div
 // style={{backgroundColor: '#000'}}
 >
      <SearchForm
        // minLength={2}
        debounceTimeout={300}
        onChange={handleInputChange}
        placeholder="Szukaj..."
      /></div>*/}

      {posts.length > 0 ? (
        posts.map(({ node }, index) => (
          <Post
            data={node}
            isLastItem={index === posts.length - 1}
            key={node.fields.slug}
          />
        ))
      ) : (
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>Nie znaleziono artykułów</h3>
        </div>
      )}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              minutes
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
