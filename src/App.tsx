import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/productPage/ProductPage";
import Cart from "./pages/cart/Cart";
import { ShopingCartProvider } from "./context/ShopingCartContext.tsx";

function App() {
  return (
    <ShopingCartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </ShopingCartProvider>
  );
}

export default App;
