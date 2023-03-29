// components/ContactForm.js

import { useState } from 'react'
import { sendEmail } from '@/lib/send-email'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await sendEmail(formData)
      // Show success message or perform other actions upon successful email sending
    } catch (error) {
      // Show error message or handle the error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form elements with name, email, subject, and message fields */}
    </form>
  )
}

export default ContactForm
