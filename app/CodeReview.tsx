"use client";

import { useState } from "react";

export default function CodeReview() {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) {
      setReview("⚠️ Please paste your code first.");
      return;
    }

    setLoading(true);
    setReview("⏳ Reviewing your code...");

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setReview(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setReview(data.review);
      setLoading(false);
    } catch (error) {
      setReview("❌ Failed to connect to AI.");
      setLoading(false);
    }
  };

  const handleClear = () => {
    setCode("");
    setReview("");
  };

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            AI Review
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Review Your Code Instantly
          </h2>

          <p className="text-gray-400 mt-4">
            Paste your code and let AI analyze it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Panel */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">

            <label className="block mb-3 text-gray-300">
              Programming Language
            </label>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full mb-6 rounded-lg bg-black border border-gray-700 p-3"
            >
              <option>JavaScript</option>
              <option>TypeScript</option>
              <option>Python</option>
              <option>C</option>
              <option>C++</option>
              <option>Java</option>
            </select>

            <label className="block mb-3 text-gray-300">
              Paste Your Code
            </label>

            <textarea
              rows={16}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              className="w-full rounded-xl bg-black border border-gray-700 p-4 font-mono outline-none"
            />

            <button
              onClick={handleReview}
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "⏳ Reviewing..." : "🚀 Review Code"}
            </button>

            <button
              onClick={handleClear}
              className="mt-3 w-full rounded-xl border border-gray-700 py-4 font-semibold hover:bg-gray-800 transition"
            >
              🗑️ Clear
            </button>

          </div>

          {/* Right Panel */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">

            <h3 className="text-2xl font-bold mb-4">
              AI Review
            </h3>

            <div className="rounded-xl bg-black border border-gray-700 p-5 min-h-[420px] text-gray-400 whitespace-pre-wrap">
              {review || "AI response will appear here..."}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}