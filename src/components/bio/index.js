import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import GitHubButton from "react-github-btn"

import {
  Wrapper,
  AuthorPic,
  Content,
  SocialMedia,
  SocialMediaIcon,
} from "./bio.styled"

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

        <GitHubButton
          href="https://github.com/JB1905"
          // data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          data-show-count="true"
          aria-label="Follow @JB1905 on GitHub"
        >
          Follow @JB1905
        </GitHubButton>

        <span>{author.summary}</span>
      </Content>

      <SocialMedia>
        <a href={social.linked}>
          <SocialMediaIcon icon={faLinkedin} size={20} />
        </a>

        <a href={social.github}>
          <SocialMediaIcon icon={faGithub} size={20} />
        </a>

        <a href={social.twitter}>
          <SocialMediaIcon icon={faTwitter} size={20} />
        </a>

        <a href={social.facebook}>
          <SocialMediaIcon icon={faFacebook} size={20} />
        </a>
      </SocialMedia>
    </Wrapper>
  )
}

export default Bio
