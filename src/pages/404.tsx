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
  /* TODO move/add space? */
  ${centerContent}
`

// TODO update name
const Title = styled.h2`
  font-size: var(--font-size-xl);
  margin: 0;
`

// TODO update name
const Message = styled.p`
  font-size: var(--font-size-md);
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
