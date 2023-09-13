
// Import your Client Component
import HomePage from './home-page'
import { getSortedArticlesData } from './../lib/articles'
import React from 'react'

async function getPosts() {
  const posts = getSortedArticlesData()
  return posts
}
 
export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts()
  // Forward fetched data to your Client Component
  return <HomePage allArticlesData={recentPosts} />
}