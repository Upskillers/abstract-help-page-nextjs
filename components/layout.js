import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Upskill: Abstract Help Center'

export default function Layout({ children, home }) {
    return (
            <div className='container bg-[#669BBC]
        min-h-[100vh] px-0 py-[0.5rem] flex flex-col justify-center items-center'>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content={siteTitle} />
            </Head>
                <h1>I'm a missing navbar, hear me ROAR!</h1>
                <main className='py-[5rem] flex grow flex-col flex-wrap items-center justify-center'>
                    {children}
                </main>
                {!home && (
                    <div>
                        <Link href='/'>Back to home</Link>
                    </div>
                )}
                <footer>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img src="/vercel.svg" alt="Vercel" className='' />
                    </a>
                </footer>
            </div>
    )
}
{/* <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}