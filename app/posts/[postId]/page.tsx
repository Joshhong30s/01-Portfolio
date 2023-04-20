import getFormattedDate from '@/lib/getFormattedDate'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import Image from 'next/image'
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
      <h1 className='text-5xl text-gray mt-12 mb-0 font-semibold'>{title}</h1>
      <div className='flex gap-4 items-center mt-6'>
        <Image
          className='rounded-full border-2 dark:border-slate-500 drop-shadow-xl shadow-black mt-2 mb-6'
          src='/josh.jpg'
          alt='Josh Hong'
          width={80}
          height={80}
          priority={true}
        />
        <p className='mt-4'>{pubDate} by Josh Hong</p>
      </div>
      <div className='relative w-full h-96 sm:h-[450px] lg:h-[600px] mt-6'>
        <Image
          className='object-cover my-0'
          src={`/${title}.jpg`}
          alt={title}
          fill
          priority={true}
        />
      </div>
      <br></br>
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
