'use client'
 
import Link from 'next/link';
import { getSortedArticlesData } from '../lib/articles';
import Card from './components/card';
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
    <div className='w-full flex flex-col mt-0'>
      <div className='bg-primary-100 dark:bg-primary-950 shadow-lg mt-0 w-full h-full p-[8em] pt-0'> 
          <div className='w-max m-auto'>
          <h1 className='text-[70px] text-white my-20 mx-20'>How can we help?</h1>
          <Search onFocusHandler={(status) => checkSearchStatus(status)} />

          </div>
      </div>

      <div className="flex items-center justify-center flex-wrap max-w-[800px] my-[4em] m-auto">
        {allArticlesData.map(({ id, date, title }) => (
            <Card 
              link={`/articles/${id}`}
              heading={title}
              description={date}
              />
        ))}
        </div>
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
