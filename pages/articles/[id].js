import { getAllArticlesIds, getArticlesData } from '../../lib/articles'
import Head from 'next/head'

export default function Article({ articlesData }) {
  return (
    <div>
      <Head>
        <title>{articlesData.title}</title>
      </Head>
      <article>
        <h1 >{articlesData.title}</h1>
        <div>
          <p >{articlesData.date} </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: articlesData.contentHtml }} />
      </article>
      </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllArticlesIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const articlesData = await getArticlesData(params.id)
  return {
    props: {
      articlesData,
    }
  }
}