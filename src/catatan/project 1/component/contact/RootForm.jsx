import ContactForm from "./ContactForm"
import Layout from "../Contact_layout/layout"

export default function RootForm() {
const handleContact = (formData) => {
    console.log("Contact form submitted:", formData)
  }

  return (
    <Layout>
      <ContactForm
        onSubmit={handleContact}
        title="Contact Us"
        submitLabel="Send Message"
      />
    </Layout>
  )
}