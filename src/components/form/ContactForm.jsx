import {useState} from 'react' 
import InputField from '../ui/InputField'
import TextAreaField from '../ui/TextAreaField'
import Button from '../ui/Button'
import validate from '../../validation/validation'

export default function ContactForm({
  onSubmit,
  title = "Contact Us",
  submitLabel = "Send Message",
}) {
 // hooks
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
// hooks for error handling
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

   //handle change untuk semua field, menggunakan name attribute untuk menentukan field mana yang berubah
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

   //trigger validation saat submit, jika validasi berhasil maka panggil onSubmit dengan formData
  const handleSubmit = (e) => {
    e.preventDefault()      
    // setisName("samuel christian")
    // function validate akan mengembalikan object error, jika field valid maka value error akan tetap string kosong
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    // object.values akan mengembalikan array dari semua value di object errors, lalu some akan mengecek apakah ada value yang tidak kosong (artinya ada error)
    const hasErrors = Object.values(validationErrors).some((msg) => msg !== "")
    if (hasErrors) {
      alert("Cannot complete the process..")
    } else {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-slate-800 text-center">{title}</h2>
      <InputField
        id="name"
        label="Full Name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="John Doe"
        autoComplete="name"
      />

      <InputField
        id="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="john@example.com"
        autoComplete="email"
      />

      <InputField
        id="subject"
        label="Subject"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        placeholder="How can we help you?"
      />

      <TextAreaField
        id="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Write your message here..."
        rows={5}
      />

      <Button type='submit'>{submitLabel}</Button>
    </form>
  )
}