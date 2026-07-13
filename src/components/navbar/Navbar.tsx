import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShopingCartContext } from "../../context/createContext";
import Button from "../button/Button";
import { Moon, ShoppingCart, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { cartQty, handleLogOut, isLogin } = useShopingCartContext();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 shadow-md backdrop-blur-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/90">
      <Container>
        <div className="flex h-16 items-center">

          {/* Menu */}
          <ul className="flex items-center gap-8 font-semibold">
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-blue-600 dark:hover:text-sky-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/store"
                className="transition-colors hover:text-blue-600 dark:hover:text-sky-400"
              >
                Store
              </Link>
            </li>
          </ul>

          {/* Push Right */}
          <div className="flex-1" />

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <Link
              to="/cart"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-slate-800"
            >
              <ShoppingCart
                size={22}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              {cartQty > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white shadow">
                  {cartQty > 99 ? "99+" : cartQty}
                </span>
              )}
            </Link>

            <button
              onClick={toggleTheme}
              className="relative flex h-8 w-14 items-center rounded-full bg-gray-300 transition-colors duration-300 dark:bg-gray-700"
            >
              <div
                className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow transition-all duration-300 ${
                  isDark ? "translate-x-7" : "translate-x-1"
                }`}
              >
                {isDark ? (
                  <Moon size={14} className="text-slate-700" />
                ) : (
                  <Sun size={14} className="text-yellow-500" />
                )}
              </div>
            </button>

            {isLogin && (
              <Button
                size="sm"
                variant="danger"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            )}
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Navbar;