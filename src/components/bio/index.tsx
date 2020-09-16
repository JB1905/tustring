import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import GitHubButton from 'react-github-btn'

import { ThemeContext } from '../../context'

import {
  Wrapper,
  Profile,
  AuthorPic,
  Content,
  BadgeWrapper,
  SocialMedia,
  SocialMediaIcon,
} from './bio.styles'

const Bio: React.FC = () => {
  const [theme] = useContext(ThemeContext)

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
            linkedin
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
      <Profile>
        <AuthorPic
          // TODO
          // @ts-ignore
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
        />
      </Profile>

      <Content>
        <a href={social.portfolio}>
          <strong>{author.name}</strong>
        </a>

        <BadgeWrapper>
          <GitHubButton
            href="https://github.com/JB1905"
            data-color-scheme={theme === 'dark' ? 'dark' : 'light'}
            data-size="large"
            data-show-count={true}
            aria-label="Obserwuj @JB1905 na GitHubie"
          >
            Follow @JB1905
          </GitHubButton>
        </BadgeWrapper>

        <span>{author.summary}</span>
      </Content>

      <SocialMedia>
        {/* TODO replace with map */}
        <a href={social.linkedin} aria-label="LinkedIn">
          <SocialMediaIcon icon={faLinkedin} />
        </a>

        <a href={social.github} aria-label="GitHub">
          <SocialMediaIcon icon={faGithub} />
        </a>

        <a href={social.twitter} aria-label="Twitter">
          <SocialMediaIcon icon={faTwitter} />
        </a>

        <a href={social.facebook} aria-label="Facebook">
          <SocialMediaIcon icon={faFacebook} />
        </a>
      </SocialMedia>
    </Wrapper>
  )
}

export default Bio
