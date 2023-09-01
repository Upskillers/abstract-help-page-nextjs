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
    <div>
      <div className='bg-primary-100 w-full p-[8em]'> 
          <div className='w-max m-auto'>
          <h1 className='text-[70px] my-5 mx-20'>How can we help2?</h1>
          <Search onFocusHandler={(status) => checkSearchStatus(status)} />

          </div>
      </div>

      <div className="flex items-center justify-center flex-wrap max-w-[800px] mt-12">
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
