import { createContext, useContext } from "react";

export interface cartItem {
  id: number;
  qty: number;
}

interface ShopingCartContext {
  cartItem: cartItem[];
  handleIncreaseQty: (id : number) => void
  handleDecreaseQty : (id : number) => void
  getProductQty :  (id : number) => number
  removeProduct : (id : number) => void
  cartQty : number
}

export const ShopingCartContext = createContext({} as ShopingCartContext);

export const useShopingCartContext = () => {
  return useContext(ShopingCartContext);
};

