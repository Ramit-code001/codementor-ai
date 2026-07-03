export default function About() {
  return (
    <section className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-400 uppercase font-semibold tracking-widest">
            About Us
          </p>

          <h2 className="text-4xl font-bold mt-4">
            AI that helps you become a better programmer.
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            CodeMentor AI is designed for students and developers who want to
            write cleaner code, fix bugs faster, and learn programming with
            AI-powered explanations.
          </p>

          <button className="mt-8 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        <div className="bg-gray-900 rounded-2xl p-10 border border-gray-800">
          <div className="space-y-6">

            <div>
              <h3 className="text-2xl font-bold text-blue-400">10K+</h3>
              <p className="text-gray-400">Students Supported</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-400">50K+</h3>
              <p className="text-gray-400">Code Reviews</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-400">99%</h3>
              <p className="text-gray-400">User Satisfaction</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}