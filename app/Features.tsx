export default function Features() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition">
            <div className="text-5xl mb-5">🤖</div>

            <h3 className="text-2xl font-bold mb-3">
              AI Code Review
            </h3>

            <p className="text-gray-400">
              Get instant AI-powered feedback on your code with suggestions for improvement.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition">
            <div className="text-5xl mb-5">🐞</div>

            <h3 className="text-2xl font-bold mb-3">
              Debugging Assistant
            </h3>

            <p className="text-gray-400">
              Quickly identify bugs and understand how to fix them step by step.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition">
            <div className="text-5xl mb-5">📚</div>

            <h3 className="text-2xl font-bold mb-3">
              Learn Faster
            </h3>

            <p className="text-gray-400">
              Improve your programming skills with explanations and personalized guidance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}