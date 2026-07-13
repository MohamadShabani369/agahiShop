import { createContext, useContext } from "react";
import type { Iproducts } from "../types/server";

export interface cartItem {
  id: number;
  qty: number;
}

interface ShopingCartContext {
  cartItem: cartItem[];
  handleIncreaseQty: (id: number) => void;
  handleDecreaseQty: (id: number) => void;
  getProductQty: (id: number) => number;
  removeProduct: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  handleIsLogin: (username: string, password: string) => void;
  handleLogOut: () => void;
  getSubtotal: () => number;
  getDiscount: () => number;
  getFinalPrice: () => number;
  products: Iproducts[];
  clearCart: () => void;
}

export const ShopingCartContext = createContext({} as ShopingCartContext);

export const useShopingCartContext = () => {
  return useContext(ShopingCartContext);
};
