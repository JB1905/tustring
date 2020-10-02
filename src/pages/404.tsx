import Layout from '../components/layout'
import SEO from '../components/seo'

interface Props {
  readonly location: Location
}

// TODO update component
const NotFoundPage = ({ location }: Props) => (
  <Layout location={location}>
    <SEO title="404: Not Found" />

    <h2>Not Found</h2>

    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
