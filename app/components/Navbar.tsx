export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-400">
          CodeMentor AI
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-700 text-white">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}