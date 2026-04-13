import Layout from "../layout/layout"
import ContactForm from "./ContactForm"

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