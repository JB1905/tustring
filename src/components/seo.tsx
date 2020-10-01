import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { SeoQuery } from '../../graphql-types'

interface Props {
  readonly description?: string
  readonly lang?: string
  readonly meta?: HTMLMetaElement
  readonly keywords?: string[]
  readonly title: string
}

const SEO = ({
  description = '',
  lang = 'pl',
  meta = [],
  // keywords = [],
  title,
}: Props) => {
  const { site } = useStaticQuery<SeoQuery>(query)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      htmlAttributes={{ lang }}
      // keywords={keywords}
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
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        # author
        # keywords
      }
    }
  }
`

export default SEO
