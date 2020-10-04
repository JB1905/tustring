import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { centerContent } from '../styles/mixins'

interface Props {
  readonly location: Location
}

// TODO update name
const Content = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: center;
  min-height: 150px;
  /* TODO move/add space? */
  ${centerContent}
`

// TODO update name
const Title = styled.h2`
  font-size: var(--font-size-xl);
  /* TODO move to mixin */
  margin: 0;
`

// TODO update name
const Message = styled.p`
  font-size: var(--font-size-md);
  /* TODO move to mixin */
  margin: 0;
`

const NotFoundPage = ({ location }: Props) => (
  <Layout location={location}>
    <SEO title="404: Nie znaleziono!" />

    <Content>
      <Title>404</Title>

      <Message>Nic nie znaleziono!</Message>
    </Content>
  </Layout>
)

export default NotFoundPage
