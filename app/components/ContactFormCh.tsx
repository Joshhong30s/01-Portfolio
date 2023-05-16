'use client'

import { useState } from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'

export default function ContactFormCh() {
  const [visitor, setVisitor] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = { visitor, email, message }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        Swal.fire({
          icon: 'success',
          title: '謝謝留言，已成功送出!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            popup:
              '!text-white !text-lg !font-normal !shadow-xl !px-30 !py-10 !bg-slate-800 ',
          },
        })
        // Clear the form fields after successful submission
        setVisitor('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error('Error submitting data')
      }
    } catch (error) {
      console.error('Error submitting data:', error)
      Swal.fire({
        icon: 'error',
        title: '留言送出失敗',
      })
    }
  }

  return (
    <div className='bg-center'>
      <div className='flex flex-col items-center justify-center h-full'>
        <form
          className='flex flex-col w-full md:w-3/4 lg:w-1/2 xl:w-1/3 max-w-4xl mx-auto'
          onSubmit={handleSubmit}
        >
          <label
            htmlFor='visitor'
            className='text-lg font-semibold text-gray-600  dark:text-gray-300 mb-2'
          >
            你/妳的稱呼
          </label>
          <input
            type='text'
            id='visitor'
            name='visitor'
            className='w-full py-2 px-4 bg-white rounded-lg focus:outline-none shadow-md dark:bg-gray-700'
            placeholder='...'
            onChange={(e) => setVisitor(e.target.value)}
            value={visitor}
          />
          <label
            htmlFor='email'
            className='text-lg font-semibold text-gray-600  dark:text-gray-300 mt-4 mb-2'
          >
            你/妳的信箱
          </label>
          <input
            type='text'
            id='email'
            name='email'
            className='w-full py-2 px-4 bg-white rounded-lg focus:outline-none shadow-md dark:bg-gray-700'
            placeholder='...'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label
            htmlFor='message'
            className='text-lg font-semibold text-gray-600  dark:text-gray-300 mt-4 mb-2'
          >
            你/妳的留言
          </label>
          <textarea
            id='message'
            name='message'
            className='w-full h-32 py-2 px-4 bg-white rounded-lg focus:outline-none shadow-md dark:bg-gray-700'
            placeholder='...'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button
            type='submit'
            className='w-full mt-6 text-lg md:text-xl font-semibold rounded-lg shadow-md bg-gray-800 text-white  hover:bg-gray-600 dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-white transition duration-300 py-2'
          >
            送出留言
          </button>
          <button className='w-full mt-4 text-lg md:text-xl font-semibold rounded-lg shadow-md bg-white text-gray-800  hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition duration-300 py-2'>
            <Link href='/zh'>回到首頁</Link>
          </button>
        </form>
      </div>
    </div>
  )
}
