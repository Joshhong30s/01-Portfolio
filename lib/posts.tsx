import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Joining the current working directory with the blogposts directory.
const postsDirectory = path.join(process.cwd(), 'blogposts')

//  retrieves and sorts all the blog post metadata.
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory) // reads the contents of the postsDirectory and returns an array of filenames in the directory.

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '') //remove ".md" from file name to get id (regular expression)

    //read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents) //use gray-matter to parse the post metadata section

    // creating a new object with the properties id, title, and date as metadata
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }
    return blogPost
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1)) // compares pairs of elements (a and b) based on date property to decide its order in the sorted array
}

// retrieves the content of each blog post by ID and converts it to HTML
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents) //use gray-matter to parse the post metadata

  const processedContent = await remark() // Converting Markdown to HTML
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString() // holds the final HTML content as a string

  // create blogPost HTML data by combining blogPost and contentHtml
  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  }

  return blogPostWithHTML
}
