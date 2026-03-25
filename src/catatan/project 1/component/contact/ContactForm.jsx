import {useState} from 'react' 
import TextAreaField from '../ui/TextAreaField'
import Button from '../Contact_UI/Button'

export default function ContactForm({
  onSubmit,
  title = "Contact Us",
  submitLabel = "Send Message",
}) {
  const [formData, setFormData] = useState({
    message: "",
  })
  const [errors, setErrors] = useState({
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  function validate(data) {
  const errors = {
    message: "",
  }

  if (!data.message.trim()) {
    errors.message = "Message is required."
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters."
  }
  return errors
}
}
   const handleSubmit = (e) => {
    e.preventDefault()      
       const validationErrors = validate(formData)
    setErrors(validationErrors)
  
    const hasErrors = Object.values(validationErrors).some((msg) => msg !== "")
    if (hasErrors) {
      alert("Cannot complete the process..")
    } else {
      onSubmit(formData)
    }
  }