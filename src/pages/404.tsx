import Layout from '../components/layout'
import SEO from '../components/seo'

interface Props {
  readonly location: Location
}

const NotFoundPage = ({ location }: Props) => (
  <Layout location={location}>
    <SEO title="404: Nie znaleziono!" />

    <h2>404</h2>

    <p>Nic nie znaleziono!</p>
  </Layout>
)

export default NotFoundPage
