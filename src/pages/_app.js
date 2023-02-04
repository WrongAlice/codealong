import '../styles/globals.css'
import Layout from '../../components/layout'
import styles from './../styles/Home.module.css'

export default function App({ Component, pageProps }) {
  return (
  <Layout >
  <Component {...pageProps} />
  </Layout>
  )
}
