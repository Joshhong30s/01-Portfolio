import { getSortedPostsData } from '@/lib/posts'
import ListItem from './ListItem'

export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <section className='px-6 mx-auto max-w-3xl md:max-w-4xl'>
      {' '}
      <hr className='w-2/3 mx-auto border-t border-gray-300 dark:border-gray-700 my-6 md:my-0' />
      <h2 className='text-2xl md:text-3xl font-medium dark:text-white/90 text-center mt-6'>
        Latest Posts
      </h2>
      <ul className='w-full'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
