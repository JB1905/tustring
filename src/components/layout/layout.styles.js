import styled from "styled-components"

import { limitedArea } from "../../mixins"

export const Page = styled.div`
  display: flex;
  min-height: 100%;
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  flex-direction: column;
`

export const Main = styled.main`
  ${limitedArea}
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
  ${limitedArea}
  padding: 2.5rem 1.5rem calc(2.5rem + env(safe-area-inset-bottom));
  text-align: center;
`
