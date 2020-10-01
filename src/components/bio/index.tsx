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
} from './bio.styles'

import { BioQuery } from '../../../graphql-types'

const Bio = () => {
  const [theme] = useContext(ThemeContext)

  // TODO
  const data = useStaticQuery<BioQuery>(query)

  const { author, social } = data.site.siteMetadata

  const socialMedia = [
    {
      href: social.linkedin,
      name: 'LinkedIn',
      icon: faLinkedin,
    },
    {
      href: social.github,
      name: 'GitHub',
      icon: faGithub,
    },
    {
      href: social.twitter,
      name: 'Twitter',
      icon: faTwitter,
    },
    {
      href: social.facebook,
      name: 'Facebook',
      icon: faFacebook,
    },
  ]

  return (
    <Wrapper>
      <Profile>
        <AuthorPic
          // TODO
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

      {/* <SocialMedia items={socialMedia} /> */}

      {/* <SocialMedia>
        {socialMedia.map(({href, name, icon}) => (
          <a href={href} aria-label={name} key={name}>
          <SocialMediaIcon icon={icon} />
        </a>
        ))}
      </SocialMedia> */}
    </Wrapper>
  )
}

export const query = graphql`
  query Bio {
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
`

export default Bio
