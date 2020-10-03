import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface Props {
  readonly location: Location
}

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Title = styled.h2`
  font-size: var(--font-size-xl);
  margin: 0;
`

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
