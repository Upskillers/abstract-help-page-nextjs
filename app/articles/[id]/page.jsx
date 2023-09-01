import { getAllArticlesIds, getArticlesData } from '../../../lib/articles'
import Head from 'next/head'

export default async function Article({ params }) {
  const articlesData = await getArticleData(params.id)

  const markup = { __html: "" };

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
        <div dangerouslySetInnerHTML={{__html: articlesData.contentHtml}}/>
      </article>
      </div>
  )
}

export async function generateStaticParams() {
  const paths = getAllArticlesIds()
  return paths
}

async function getArticleData(id) {
  const articlesData = await getArticlesData(id)

  return articlesData
}