
import { ShopingCartContext, type cartItem } from "./createContext";
import { useLocalStorge } from "../hooks/useLocalStorge";

interface ShopingCartProvider {
  children: React.ReactNode;
}

export function ShopingCartProvider({ children }: ShopingCartProvider) {
  const [cartItem, setCartItem] = useLocalStorge<cartItem[]>("cartItem",[]);

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

  const cartQty = cartItem.reduce((totalQty , item)=> totalQty + item.qty , 0)

  return (
    <ShopingCartContext.Provider
      value={{
        cartItem,
        handleIncreaseQty,
        handleDecreaseQty,
        getProductQty,
        removeProduct,
        cartQty
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
