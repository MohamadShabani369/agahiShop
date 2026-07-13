import { useEffect, useState } from "react";
import { useShopingCartContext } from "../../context/createContext";
import Button from "../button/Button";
import { getProduct } from "../../../services/api";
import type { Iproducts } from "../../types/server";
import { Link } from "react-router-dom";

interface cartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: cartItem) {
  const { handleDecreaseQty, handleIncreaseQty, removeProduct } =
    useShopingCartContext();

  const [product, setProduct] = useState<Iproducts>();
  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, [id]);

  return (
    <div className="mt-8 flex flex-col gap-4 rounded-lg border-b border-blue-300 p-4 shadow-md shadow-blue-700 sm:flex-row">
      <Link to={`/Product/${id}`}>
        <img
          className="h-40 w-full rounded  sm:h-32 sm:w-32"
          src={product?.image}
          alt="Product"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <p className="text-lg font-semibold">{product?.title}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button
            onClick={() => {
              handleIncreaseQty(id);
            }}
            size="icon"
          >
            +
          </Button>

          <span className="min-w-5 text-center">{qty}</span>

          <Button
            onClick={() => {
              handleDecreaseQty(id);
            }}
            size="icon"
          >
            -
          </Button>

          <Button
            onClick={() => {
              removeProduct(id);
            }}
            size="sm"
            variant="danger"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
