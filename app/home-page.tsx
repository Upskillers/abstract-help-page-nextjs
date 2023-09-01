'use client'
 
import Link from 'next/link';
import { getSortedArticlesData } from '../lib/articles';
import Card from './components/card';
import Layout from './components/layout';
import { useState } from 'react';
import Search from './components/search';
import React from 'react';

export default function HomePage({ allArticlesData }) {
  const [searchActive, setSearchActive] = useState(false)
  const checkSearchStatus = (status) => {
    if (status) {
      setSearchActive(true)
    } else {
      setSearchActive(false)
    }
  }
  return (
    <div>
      <div className='bg-primary-100 w-full p-[8em]'> 
          <div className='w-max m-auto'>
          <h1 className='text-[70px] my-5 mx-20'>How can we help2?</h1>
          <Search onFocusHandler={(status) => checkSearchStatus(status)} />

          </div>
      </div>

      <div className="flex items-center justify-center flex-wrap max-w-[800px] mt-12">
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
            <Link 
              href={`/articles/${id}`}
              className="text-accent hover:underline focus:underline active:underline"
              >{title}</Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
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
