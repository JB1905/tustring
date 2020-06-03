import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Global from "./global"

const Wrapper = styled.article`
  border-top: 1px solid #0001;
  padding: 20px 0;
`

// const Header = styled.header`
//   max-width: 62rem;
//   margin: 0 auto;
//   padding: 0 1.5rem;
// `

const Title = styled.h3`
  margin-bottom: 0;
`

// const Main = styled.main`
//   max-width: 62rem;
//   margin: 0 auto;
//   padding: 0 1.5rem;
// `

// const Footer = styled.footer``

// const Title = styled.h1`
//   font-weight: 900;
//   font-size: 4.4rem;

//   a {
//     :hover {
//       text-decoration: none;
//     }
//   }
// `

const Post = ({ data }) => {
  const title = data.frontmatter.title || data.fields.slug

  return (
    <Wrapper
    // key={data.fields.slug}
    >
      <header>
        <Title>
          <Link to={data.fields.slug}>{title}</Link>
        </Title>

        <small>{data.frontmatter.date}</small>
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
