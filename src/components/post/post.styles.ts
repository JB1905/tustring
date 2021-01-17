import styled from 'styled-components'

export const PostWrapper = styled.article`
  padding: 20px 0;

  :not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }
`

export const PostTitle = styled.h2`
  margin-bottom: 8px;
`
