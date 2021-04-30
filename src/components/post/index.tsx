import { Link, graphql } from 'gatsby'

import { formatPostDate, formatReadingTime } from '../../helpers'

import { PostWrapper, PostTitle } from './post.styles'

import { BlogPostFragment } from '../../__generated__/gatsby-types'

interface Props {
  readonly data: BlogPostFragment['edges'][number]['node']
}

const Post = ({ data }: Props) => {
  const title = data!.frontmatter!.title || data!.fields!.slug

  return (
    <PostWrapper>
      <header>
        <PostTitle>
          <Link to={data!.fields!.slug!}>{title}</Link>
        </PostTitle>

        <span>
          {formatPostDate(data!.frontmatter!.date!, 'pl')} &bull;{' '}
          {formatReadingTime(Math.ceil(data!.fields!.readingTime!.minutes!))}
        </span>
      </header>

      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: data.excerpt!,
          }}
        />
      </section>
    </PostWrapper>
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
        }
      }
    }
  }
`
