import React from "react"
import { Link, graphql } from "gatsby"

import { formatPostDate, formatReadingTime } from "../../helpers"

import { Wrapper, Title } from "./post.styles"

interface Props {
  readonly data: any // TODO
  readonly isLastItem: boolean
}

const Post: React.FC<Props> = ({ data, isLastItem = false }) => {
  const title = data.frontmatter.title || data.fields.slug

  return (
    <Wrapper isLastItem={isLastItem}>
      <header>
        <Title>
          <Link to={data.fields.slug}>{title}</Link>
        </Title>

        <span>
          {formatPostDate(data.frontmatter.date, "pl")} &bull;{" "}
          {formatReadingTime(Math.ceil(data.fields.readingTime.minutes))}
        </span>
      </header>

      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: data.frontmatter.description || data.excerpt,
          }}
        />
      </section>
    </Wrapper>
  )
}

export default Post

export const query = graphql`
  fragment BlogPost on MarkdownRemarkConnection {
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
`
