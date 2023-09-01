import { getSortedArticlesData } from '../../../lib/articles'
import { NextResponse } from 'next/server'

const posts =
  process.env.NODE_ENV === 'production'
    ? require('../../../cache/data').posts
    : getSortedArticlesData()

export async function GET(request: NextResponse) {
  const {searchParams} = new URL(request.url);
  const searchQuery = searchParams.get("q");
  console.log(searchQuery)
  function searchLabel(post){
    const labels = post.labels
    var isMatch = false
    labels.forEach((label) => 
     isMatch = isMatch || label.toLowerCase().includes(searchQuery)
    )
    return (isMatch)
  }
  const results = searchQuery
    ? posts.filter((post) => (post.title.toLowerCase().includes(searchQuery)|| post.id.toLowerCase().includes(searchQuery)) || searchLabel(post))
    : []
  return new Response(JSON.stringify({ results }), {
    status: 200,
    headers: { 'Content-Type': 'application/json'},
  })

}