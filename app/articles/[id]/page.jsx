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
        <h1 className='text-black dark:text-white'>{articlesData.title}</h1>
        <div>
          <p className='text-black dark:text-white'>{articlesData.date} </p>
        </div>
        <div className='text-black dark:text-white' dangerouslySetInnerHTML={{__html: articlesData.contentHtml}}/>
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