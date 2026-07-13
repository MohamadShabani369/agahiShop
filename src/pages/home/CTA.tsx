import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-20 text-center text-white shadow-2xl">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            🚀 Start Your Journey
          </span>

          <h2 className="mt-8 text-4xl font-extrabold lg:text-6xl">
            Expand Your Awareness
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Discover products that inspire learning, creativity and personal
            growth. Start building a better version of yourself today.
          </p>

          <Link
            to="/store"
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Explore Store
            <ArrowRight size={20} />
          </Link>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-5xl font-extrabold text-blue-600 dark:text-sky-400">
              2500+
            </h3>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Happy Customers
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-5xl font-extrabold text-blue-600 dark:text-sky-400">
              120+
            </h3>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Premium Products
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-5xl font-extrabold text-blue-600 dark:text-sky-400">
              99%
            </h3>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Customer Satisfaction
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;