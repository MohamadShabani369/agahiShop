import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/productPage/ProductPage";
import Cart from "./pages/cart/Cart";
import PrivateRoute from "./components/privateRoute/PrivateRoute.tsx";
import Login from "./pages/login/Login.tsx";
import { useShopingCartContext } from "./context/createContext.ts";
import Checkout from "./pages/checkout/Checkout.tsx";
import Success from "./pages/success/Success.tsx";
import NotFound from "./pages/notfound/NotFound.tsx";

function App() {
  const { isLogin } = useShopingCartContext();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Product/:id" element={<ProductPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route
            path="/login"
            element={isLogin ? <Navigate to={"/cart"} /> : <Login />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
