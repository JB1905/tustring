import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 10px;
  /* background-color: #f8f8f8; */
  /* padding: 0 0 20px; */

  span {
    display: block;
    margin-top: 8px;
  }
`

const AuthorPic = styled(Image)`
  border-radius: 50%;
  min-width: 56px;
  height: 56px;
  /* margin-right: 16px; */
  margin-top: 16px;
  margin-bottom: 16px;

  /* ::before {
    content: "";
    left: -4px;
    top: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    background-color: #f00;
    position: absolute;
  } */
`

const Content = styled.p`
  max-width: 500px;
  margin-top: 0;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 56, height: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <Wrapper>
      <AuthorPic fixed={data.avatar.childImageSharp.fixed} alt={author.name} />

      <Content>
        <strong>{author.name}</strong>

        <span>{author.summary}</span>
      </Content>
    </Wrapper>
  )
}

export default Bio
