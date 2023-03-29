import getFormattedDate from '@/lib/getFormattedDate'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = params

  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = params

  if (!posts.find((post) => post.id === postId)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)
  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto md:max-w-5xl'>
      <h1 className='text-4xl mt-12 mb-0 font-semibold'>{title}</h1>
      <p className='mt-0'>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
        <br></br>
        <p>
          <Link href='/'>Back to home</Link>
        </p>
      </article>
    </main>
  )
}
