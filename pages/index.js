import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getSortedArticlesData } from '../lib/articles';
import Card from '../components/card';

export default function Home({allArticlesData}) {
  return (
    <div className="min-h-[100vh] px-0 py-[0.5rem] flex-col justify-center items-center">
      <Head>
        <title>Create Next App3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className = "py-[5rem] flex grow flex-col flex-wrap items-center justify-center">
        <h1 className="mb-[1.5rem] leading-[1.15rem] text-[3.6rem] text-center">
          Welcome to&nbsp;
          <a
            href="https://nextjs.org"
            className="text-[#0070f3] hover:underline focus:underline active:underline"
          >Next.js!</a>
        </h1>

        <p className="align-center leading-6 text-base mt-2">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Card
            link="https://nextjs.org/docs"
            heading="Documentation &rarr;"
            description="Find in-depth information about Next.js features and API."
            />

          <Card
            link="https://nextjs.org/learn"
            heading="Learn &rarr;"
            description="Learn about Next.js in an interactive course with quizzes!"
            />

          <Card
            link="https://github.com/vercel/next.js/tree/master/examples"
            heading="Examples &rarr;"
            description="Discover and deploy boilerplate example Next.js projects."
            />

          <Card
            link="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            heading="Deploy &rarr;"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
            />
        </div>
        <ul>
          {allArticlesData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/articles/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
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
      `}</style>
    </div>
  )
}
export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData()
  return {
    props: {
      allArticlesData
    }
  }
}