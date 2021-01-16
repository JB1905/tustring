import styled from 'styled-components'

import { limitedArea } from '../../styles/mixins'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: var(--full-size);
`

export const Main = styled.main`
  ${limitedArea}
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
  ${limitedArea}
  padding: 2.5rem var(--spaces) calc(2.5rem + env(safe-area-inset-bottom));
  text-align: center;

  p {
    margin-top: 0;
  }
`
