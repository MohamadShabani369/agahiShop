import { Brain, BookOpen, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Grow Your Mind",
    desc: "Products carefully selected to improve your knowledge and awareness.",
  },
  {
    icon: BookOpen,
    title: "Curated Collection",
    desc: "Every product is chosen with quality and usefulness in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Experience",
    desc: "Safe shopping with modern technologies and secure payments.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    desc: "Keep learning every day with resources that inspire growth.",
  },
];

function WhyChoose() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-sky-900 dark:text-sky-300">
            WHY US
          </span>

          <h2 className="mt-6 text-4xl font-extrabold">
            Why Choose AgahiShop?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
            We don't just sell products.
            We help people become better versions of themselves.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group flex gap-6 rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 dark:bg-sky-900">

                  <Icon
                    size={30}
                    className="text-blue-600 dark:text-sky-300"
                  />

                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;