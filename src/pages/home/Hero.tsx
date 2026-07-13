import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="overflow-hidden pt-12 lg:pt-20">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        {/* Left */}
        <div className="flex-1">

          <span className=" rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-sky-900 dark:text-sky-300">
            🚀 Welcome to AgahiShop
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 transition-colors duration-300 dark:text-white lg:text-7xl">
            Expand
            <span className="block bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Your Awareness
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-300">
            Discover carefully selected books, courses and digital products
            designed to help you learn faster, think deeper and grow every day.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              to="/store"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Explore Store
            </Link>

            <Link
              to="/"
              className="rounded-xl border border-slate-300 px-7 py-3 font-semibold transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="hidden flex-1 justify-center lg:flex">

          <div className="relative">

            <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>

            <div className="absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-cyan-400 opacity-20 blur-3xl"></div>

            <div className="relative flex h-107.5 w-107.5 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400 shadow-2xl">

              <div className="flex h-90 w-90 items-center justify-center rounded-full bg-white text-8xl dark:bg-slate-900">
                🧠
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;