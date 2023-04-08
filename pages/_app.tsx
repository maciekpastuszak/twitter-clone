import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import LoginModal from '@/components/modals/LoginModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
