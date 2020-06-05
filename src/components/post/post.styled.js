import styled from "styled-components"

export const Wrapper = styled.article`
  padding: 20px 0;

  ${({ isLastItem }) =>
    !isLastItem &&
    `
    border-bottom: 1px solid var(--border-color);
  `}
`

export const Title = styled.h2`
  margin-bottom: 0;
`
