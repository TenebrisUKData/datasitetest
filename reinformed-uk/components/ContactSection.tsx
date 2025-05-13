export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <input type="email" placeholder="Your email" className="w-full border mb-4 p-2 rounded" required />
        <textarea placeholder="Your message" className="w-full border mb-4 p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  )
}
