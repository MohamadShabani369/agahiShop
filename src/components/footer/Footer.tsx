import { Mail, Phone, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <ShoppingBag size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">AgahiShop</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Expand Your Awareness
              </p>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-500 dark:text-slate-400">
            Discover products that help you learn, grow and become a better
            version of yourself.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="transition hover:text-blue-600 dark:hover:text-sky-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/store"
                className="transition hover:text-blue-600 dark:hover:text-sky-400"
              >
                Store
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="transition hover:text-blue-600 dark:hover:text-sky-400"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Contact</h3>

          <div className="space-y-4 text-slate-500 dark:text-slate-400">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@agahishop.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+98 912 345 6789</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Tehran, Iran</span>
            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
        © {new Date().getFullYear()} AgahiShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;