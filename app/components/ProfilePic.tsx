import React from 'react'
import Image from 'next/image'

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='rounded-full border-4 dark:border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8 md:mt-12'
        src='/josh.jpg'
        alt='Josh Hong'
        width={300}
        height={300}
        priority={true}
      />
    </section>
  )
}
