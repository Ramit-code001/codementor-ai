export default function Contact() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-blue-400 uppercase font-semibold tracking-widest">
          Contact
        </p>

        <h2 className="text-4xl font-bold mt-4">
          We'd love to hear from you
        </h2>

        <p className="mt-6 text-gray-400">
          Have questions, suggestions, or feedback? Reach out and we'll get back to you.
        </p>

        <div className="mt-10 space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg bg-gray-900 border border-gray-800 p-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg bg-gray-900 border border-gray-800 p-4 outline-none focus:border-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-lg bg-gray-900 border border-gray-800 p-4 outline-none focus:border-blue-500"
          />

          <button className="w-full rounded-lg bg-blue-600 py-4 font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>

        </div>

      </div>
    </section>
  );
}