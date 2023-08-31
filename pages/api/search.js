import { getSortedArticlesData } from '../../lib/articles'

const posts =
  process.env.NODE_ENV === 'production'
    ? require('../../cache/data').posts
    : getSortedArticlesData()


export default (req, res) => {
  function searchLabel(post){
    const labels = post.labels
    var isMatch = false
    labels.forEach((label) => 
     isMatch = isMatch || label.toLowerCase().includes(req.query.q)
    )
    return (isMatch)
  }
  const results = req.query.q
    ? posts.filter((post) => (post.title.toLowerCase().includes(req.query.q)|| post.id.toLowerCase().includes(req.query.q)) || searchLabel(post))
    : []
  
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}