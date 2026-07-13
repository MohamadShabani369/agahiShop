import { useState } from "react";
import { useShopingCartContext } from "../../context/createContext";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { handleIsLogin } = useShopingCartContext();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleIsLogin(user.username, user.password);
  };

  return (
    <main
      className="
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        p-4
        sm:p-6
        md:p-8
        bg-linear-to-br
        from-blue-100
        via-blue-200
        to-blue-600
        transition-all
        duration-300
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-800
      "
    >
      <div
        className="
          w-full
          max-w-sm
          sm:max-w-md
          rounded-3xl
          bg-white/80
          dark:bg-slate-900/80
          backdrop-blur-xl
          border
          border-white/30
          dark:border-slate-700
          shadow-2xl
          p-6
          sm:p-8
          md:p-10
          transition-all
          duration-300
        "
      >
        <h1
          className="
            text-center
            text-2xl
            sm:text-3xl
            font-bold
            text-blue-700
            dark:text-blue-400
          "
        >
          Welcome Back
        </h1>

        <p
          className="
            mt-2
            text-center
            text-sm
            sm:text-base
            text-gray-500
            dark:text-gray-400
          "
        >
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-600
                dark:text-gray-300
              "
            >
              Username
            </label>

            <input
              name="username"
              value={user.username}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter username"
              className="
                w-full
                rounded-xl
                border
                border-blue-200
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                text-gray-900
                dark:text-white
                placeholder:text-gray-400
                dark:placeholder:text-gray-500
                px-4
                py-3
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-200
              "
            />
          </div>

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-600
                dark:text-gray-300
              "
            >
              Password
            </label>

            <input
              name="password"
              value={user.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Enter password"
              className="
                w-full
                rounded-xl
                border
                border-blue-200
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                text-gray-900
                dark:text-white
                placeholder:text-gray-400
                dark:placeholder:text-gray-500
                px-4
                py-3
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-200
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-linear-to-r
              from-blue-500
              to-blue-700
              py-3
              text-sm
              sm:text-base
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-xl
              active:scale-95
            "
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            className="
              text-sm
              text-blue-600
              dark:text-blue-400
              transition-colors
              duration-300
              hover:text-blue-800
              dark:hover:text-blue-300
            "
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </main>
  );
}