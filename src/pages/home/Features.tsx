import { ShieldCheck, Truck, Star } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Receive your favorite products quickly and safely.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Only carefully selected products with high quality.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "Your payment information is always protected.",
  },
];

function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:scale-110 dark:bg-sky-900">
                <Icon
                  size={30}
                  className="text-blue-600 dark:text-sky-300"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;