import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { SeoQuery } from '../../graphql-types'

interface Props {
  readonly title: string
  readonly description?: string
  readonly lang?: string
  readonly meta?: HTMLMetaElement[]
  readonly keywords?: string[]
}

const SEO = ({
  title,
  description = '',
  lang = 'pl',
  meta = [],
  keywords = [],
}: Props) => {
  const { site } = useStaticQuery<SeoQuery>(query)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      htmlAttributes={{ lang }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author.name,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author {
          name
        }
      }
    }
  }
`

export default SEO
