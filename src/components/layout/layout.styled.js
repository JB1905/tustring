import styled, { css } from "styled-components"

import { HEADER_HEIGHT } from "../../constants"

export const limitedArea = css`
  max-width: var(--wrapper-size);
  padding: 0 1.5rem;
  margin: 0 auto;
  width: 100%;
`

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Header = styled.header`
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  height: calc(${HEADER_HEIGHT}px);
  padding-top: env(safe-area-inset-top);
  padding-bottom: 0;
  z-index: 10;

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

export const Main = styled.main`
  ${limitedArea}
  flex: 1;
`

export const Footer = styled.footer`
  ${limitedArea}
  padding: 2.5rem 1.5rem calc(2.5rem + env(safe-area-inset-bottom));
  text-align: center;
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
