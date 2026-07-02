import Navbar from "./components/Navbar";
import Features from "./Features";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <section className="max-w-4xl text-center">
          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            Welcome To
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CodeMentor AI
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-300">
            Write Better Code.
            <br />
            Learn Faster.
          </p>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            AI-powered Code Review & Debugging Platform built for Computer
            Science students and developers.
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-500 transition">
            🚀 Start Reviewing
          </button>
        </section>
      </main>

      <Features />
      <Testimonials />
    </>
  );
}