import React from "react"
import { Link } from "gatsby"

import { formatPostDate, formatReadingTime } from "../../helpers"

import { Wrapper, Title } from "./post.styled"

const Post = ({ data, isLastItem = false }) => {
  const title = data.frontmatter.title || data.fields.slug

  return (
    <Wrapper isLastItem={isLastItem}>
      <header>
        <Title>
          <Link to={data.fields.slug}>{title}</Link>
        </Title>

        <p>
          {formatPostDate(data.frontmatter.date, "pl")} &bull;{" "}
          {formatReadingTime(Math.ceil(data.fields.readingTime.minutes))}
        </p>
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