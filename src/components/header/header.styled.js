import styled from "styled-components"

import { HEADER_HEIGHT } from "../../constants"

import { limitedArea } from "../../mixins"

export const HeaderWrapper = styled.header`
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  height: calc(${HEADER_HEIGHT}px + env(safe-area-inset-top));
  padding-top: env(safe-area-inset-top);
  padding-bottom: 0;
  z-index: 10;

  button > div {
    -webkit-tap-highlight-color: transparent;
  }

  @supports (backdrop-filter: blur(20px)) {
    backdrop-filter: blur(20px);
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${limitedArea}
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 3.4rem;
  margin: 0;

  a {
    :hover {
      text-decoration: none;
    }
  }
`