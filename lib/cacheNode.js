const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')


function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'articles')
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = Bun.file(fullPath, 'utf8')
    const fileContents2 = await fileContents.text()
    const matterResult = matter(fileContents2)
    return {
      id,
      title: matterResult.data.title,
      labels: matterResult.data.labels,
      date: matterResult.data.date
    }
  })
  return JSON.stringify(posts)
}

const fileContents = `export const posts = ${getPosts()}`

try {
  fs.readdirSync('cache')
} catch (e) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', fileContents)