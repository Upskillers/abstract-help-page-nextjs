import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark } from 'remark'
import html from 'remark-html'

export function getSortedArticlesData() {
  const articlesDirectory = path.join(process.cwd(), 'articles')

  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = Bun.read(fullPath)

    // Use gray-matter to parse the article metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllArticlesIds() {
  const articlesDirectory = path.join(process.cwd(), 'articles')

  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map(fileName => {
    return {
        id: fileName.replace(/\.md$/, '')
      
    }
  })
}

export async function getArticlesData(id) {
  const articlesDirectory = path.join(process.cwd(), 'articles')

  const fullPath = path.join(articlesDirectory, `${id}.md`)
  console.log(fullPath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the article metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}