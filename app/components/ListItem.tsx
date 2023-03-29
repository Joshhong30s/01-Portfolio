import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date } = post
  const FormattedDate = getFormattedDate(date)

  return (
    <li className='mt-4 text-2xl dark:text-white/90'>
      <Link
        className='underline hover:text-3xl hover:text-black/70 dark:hover:text-neutral-100'
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className='text-sm mt-1'>{FormattedDate}</p>
    </li>
  )
}
