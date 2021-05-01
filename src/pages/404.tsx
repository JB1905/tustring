import { PageProps } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { centerContent } from '../styles/mixins'

const Content = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: center;
  min-height: 150px;
  ${centerContent}
`

const Title = styled.h2`
  font-size: var(--font-size-xl);
  margin: 0;
`

const Message = styled.p`
  font-size: var(--font-size-md);
  margin: 0;
`

const NotFoundPage = ({ location }: PageProps) => (
  <Layout location={location}>
    <SEO title="404: Nie znaleziono!" />

    <Content>
      <Title>404</Title>

      <Message>Nic nie znaleziono!</Message>
    </Content>
  </Layout>
)

export default NotFoundPage
