import React from "react"
import { Link } from "gatsby"

import { Wrapper, Title } from "./post.styled"

const Post = ({ data }) => {
  const title = data.frontmatter.title || data.fields.slug

  return (
    <Wrapper>
      <header>
        <Title>
          <Link to={data.fields.slug}>{title}</Link>
        </Title>
        <small>{data.frontmatter.date}</small> &bull;
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
