import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import { useShopingCartContext } from "../../../context/createContext";
import toast from "react-hot-toast";

type Props = {
  back: () => void;
};

function ReviewOrder({ back }: Props) {
  const {
    cartItem,
    products,
    getSubtotal,
    getDiscount,
    getFinalPrice,
    clearCart,
  } = useShopingCartContext();

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully!");

    clearCart();

    navigate("/success");
  };

  return (
    <>
      <h2 className="mb-8 text-2xl font-bold">Review Order</h2>

      <div className="space-y-4">
        {cartItem.map((item) => {
          const product = products.find((p) => Number(p.id) === item.id);

          if (!product) return null;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-16 w-16 rounded-lg object-cover"
                />

                <div>
                  <p className="font-semibold">{product.title}</p>

                  <p className="text-sm text-slate-500">Qty : {item.qty}</p>
                </div>
              </div>

              <p className="font-bold">
                ${(product.price * item.qty).toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${getSubtotal().toFixed(2)}</span>
        </div>

        <div className="mt-3 flex justify-between">
          <span>Shipping</span>
          <span className="text-green-500">Free</span>
        </div>

        <div className="mt-3 flex justify-between">
          <span>Discount</span>
          <span>${getDiscount().toFixed(2)}</span>
        </div>

        <hr className="my-4 dark:border-slate-600" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span className="text-green-600">${getFinalPrice().toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="secondary" onClick={back}>
          Back
        </Button>

        <Button variant="success" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </div>
    </>
  );
}

export default ReviewOrder;
