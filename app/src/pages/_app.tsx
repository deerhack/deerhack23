import type { AppProps } from 'next/app';

import { Layout } from '@/components/Layout';
import { Poppins, Montserrat } from '@next/font/google';

import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: "--font-poppins"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-montserrat"
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} ${montserrat.variable}`}>
      <Layout pageData={pageProps["pageData"]}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
