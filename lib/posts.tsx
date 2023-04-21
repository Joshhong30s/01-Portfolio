import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Joining the current working directory with the blogposts directory.
const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData() {
  // reads the contents of a directory and returns an array of filenames in the directory
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((fileName) => {
    //remove ".md" from file name to get id (regular expression)
    const id = fileName.replace(/\.md$/, '')

    //read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    //use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Creating a new object with the properties id, title, and date. */
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }
    return blogPost
  })
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  //use gray-matter to parse the post metadata
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()
  // Creating a new object with the properties id, title, and date. */
  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  }

  // combine the data with id
  return blogPostWithHTML
}
