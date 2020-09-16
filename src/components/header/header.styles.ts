import styled from 'styled-components'

import { limitedArea } from '../../styles/mixins'

export const HeaderWrapper = styled.header`
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  background-color: var(--nav-color);
  border-bottom: 1px solid var(--border-color);
  height: calc(var(--header-height) + env(safe-area-inset-top));
  padding-top: env(safe-area-inset-top);
  padding-bottom: 0;
  z-index: 10;

  button > div {
    -webkit-tap-highlight-color: transparent;
  }

  @supports (backdrop-filter: var(--blur-filter)) {
    backdrop-filter: var(--blur-filter);
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
  font-size: var(--font-size-lg);
  margin: 0;

  a {
    :hover {
      text-decoration: none;
    }
  }
`
