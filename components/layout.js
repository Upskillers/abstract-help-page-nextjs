import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'
import Footer from './footer'

export const siteTitle = 'Upskill: Abstract Help Center'

export default function Layout({ children, home }) {
  return (
    <div className='min-h-[100vh] px-0 py-0 flex flex-col justify-center items-center'>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
        <Navbar/>
      <main className='py-[5rem] flex grow flex-col flex-wrap items-center justify-center'>
        {children}
      </main>
      {!home && (
        <div>
          <Link href='/'>Back to home</Link>
        </div>
      )}
      <Footer/>

    </div>
  )
}