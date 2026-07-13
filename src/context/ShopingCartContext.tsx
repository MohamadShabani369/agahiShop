import { ShopingCartContext, type cartItem } from "./createContext";
import { useLocalStorge } from "../hooks/useLocalStorge";
import { useState, useEffect } from "react";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../services/api";
import type { Iproducts } from "../types/server";

interface ShopingCartProvider {
  children: React.ReactNode;
}

export function ShopingCartProvider({ children }: ShopingCartProvider) {
  const [cartItem, setCartItem] = useLocalStorge<cartItem[]>("cartItem", []);

  const handleIncreaseQty = (id: number) => {
    setCartItem((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id === id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseQty = (id: number) => {
    setCartItem((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id === id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItem.find((item) => item.id === id)?.qty || 0;
  };
  const removeProduct = (id: number) => {
    setCartItem((currentItem) => currentItem.filter((item) => item.id !== id));
  };

  const cartQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);

  const [isLogin, setIsLogin] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const navigate = useNavigate();

  const handleIsLogin = (username: string, password: string) => {
    login(username, password).finally(() => {
      // cuase we dont have backend use finally instead then
      const token =
        "yBzDULll4S8g8HDl9Wss5wxzqxXjeV1Y5FkGk727MS06SCDv6RyGhBPp0EU4wg";
      // this token is fake cuase we dont have backend i use this if we have backend i get it from backend
      localStorage.setItem("token", token); //cookies are better for save tokens
      setIsLogin(true);
      navigate("/cart");
    });
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };

  const [products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  const getSubtotal = () => {
    return cartItem.reduce((total, item) => {
      const product = products.find((p) =>Number(p.id)  === (item.id) );

      console.log("Product:", product);
      console.log("Item:", item);

      if (!product) return total;

      return total + Number(product.price) * item.qty;
    }, 0);
  };

  const getDiscount = () => {
    return getSubtotal() * 0.1;
  };

  const getFinalPrice = () => {
    return getSubtotal() - getDiscount();
  };

  const clearCart = () => {
  setCartItem([]);
};
  return (
    <ShopingCartContext.Provider
      value={{
        cartItem,
        handleIncreaseQty,
        handleDecreaseQty,
        getProductQty,
        removeProduct,
        cartQty,
        isLogin,
        handleIsLogin,
        handleLogOut,
        getSubtotal,
        getDiscount,
        getFinalPrice,
        products,
        clearCart,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
