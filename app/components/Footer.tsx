export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <div>
          <h2 className="text-xl font-bold text-white">
            CodeMentor AI
          </h2>

          <p className="text-sm mt-2">
            Learn. Build. Grow with AI.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>

          <a href="#" className="hover:text-white transition">
            Terms
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © 2026 CodeMentor AI. All rights reserved.
      </div>
    </footer>
  );
}