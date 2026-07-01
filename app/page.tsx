export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Investment Planner
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Plan your investments with compound interest, SIP, SWP, step-up
            investments, inflation adjustments, and retirement projections—all
            in one place.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Start Planning
            </button>

            <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Placeholder */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900">
            Compound Interest Calculator
          </h2>

          <p className="mt-2 text-slate-500">
            Calculator UI coming in the next step.
          </p>
        </div>
      </section>
    </main>
  );
}