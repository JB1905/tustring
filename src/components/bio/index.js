import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Wrapper, AuthorPic, Content, SocialMedia } from "./bio.styled"

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

          social {
            linked
            github
            twitter
            facebook
            portfolio
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <Wrapper>
      <AuthorPic fixed={data.avatar.childImageSharp.fixed} alt={author.name} />

      <Content>
        <a href={social.portfolio}>
          <strong>{author.name}</strong>
        </a>

        <span>{author.summary}</span>
      </Content>

      <SocialMedia></SocialMedia>
    </Wrapper>
  )
}

export default Bio
