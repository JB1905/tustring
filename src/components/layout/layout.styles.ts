import styled from 'styled-components'

import { limitedArea } from '../../styles/mixins'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /* TODO */
  /* min-height: -moz-available;
  min-height: fill-available; */

  /* TODO */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const Main = styled.main`
  /* TODO move/add space? */
  ${limitedArea}
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
  /* TODO move/add space? */
  ${limitedArea}
  padding: 2.5rem 1.5rem calc(2.5rem + env(safe-area-inset-bottom));
  text-align: center;

  p {
    margin-top: 0;
  }
`
