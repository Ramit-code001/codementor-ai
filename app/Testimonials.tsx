export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          What Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-300">
              {"This AI helped me find bugs within seconds."}
            </p>
            <h3 className="mt-4 font-bold">Rahul</h3>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-300">
              {"Best coding assistant I've ever used."}
            </p>
            <h3 className="mt-4 font-bold">Ananya</h3>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-300">
              {"Makes debugging super easy and fast."}
            </p>
            <h3 className="mt-4 font-bold">Aman</h3>
          </div>

        </div>
      </div>
    </section>
  );
}