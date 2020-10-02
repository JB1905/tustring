import styled from 'styled-components'

interface Props {
  readonly isLastItem: boolean
}

export const PostWrapper = styled.article<Props>`
  padding: 20px 0;

  ${({ isLastItem }) =>
    !isLastItem &&
    `
    border-bottom: 1px solid var(--border-color);
  `}
`

export const PostTitle = styled.h2`
  margin-bottom: 8px;
`
