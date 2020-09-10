import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  readonly description?: string
  readonly lang?: string // TODO
  readonly meta?: HTMLMetaElement
  // readonly keywords?: string[]
  readonly title?: string
}

const SEO: React.FC<Props> = ({ description, lang = "en", meta, title }) => {
  const { site } = useStaticQuery<any>(query)

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
  query DefaultSEO {
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

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

export default SEO
