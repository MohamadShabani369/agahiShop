import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { getProducts } from "../../../services/api";
import type { Iproducts } from "../../types/server";

function FeaturedProducts() {
  const [products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.slice(0, 4));
    });
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-extrabold">
            Featured Products
          </h2>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Discover our most popular products
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >

              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="line-clamp-2 h-14 font-bold">
                  {product.title}
                </h3>

                <div className="mt-4 flex items-center gap-1">

                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm">
                    4.8
                  </span>

                </div>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-xl font-bold text-blue-600 dark:text-sky-400">
                    ${product.price}
                  </span>

                  <Link
                    to={`/Product/${product.id}`}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                  >
                    View
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;