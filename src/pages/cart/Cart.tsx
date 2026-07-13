import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShopingCartContext } from "../../context/createContext";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Cart() {
  const { cartItem, getSubtotal, getDiscount, getFinalPrice } =
    useShopingCartContext();

    if (cartItem.length === 0) {
  return (
    <Container>
      <div className="flex min-h-[70vh] items-center justify-center">

        <div className="max-w-md text-center">

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 shadow-lg dark:bg-slate-800">

            <ShoppingCart
              size={60}
              className="text-slate-400"
            />

          </div>

          <h1 className="mt-8 text-3xl font-bold">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Looks like you haven't added any products yet.
          </p>

          <Link to="/store">
            <Button
              variant="success"
              className="mt-8"
            >
              Continue Shopping
            </Button>
          </Link>

        </div>

      </div>
    </Container>
  );
}

  return (
    <Container>
      <div>
        {cartItem.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-gray-300 p-4 transition-colors duration-300 dark:bg-slate-800">
        <p className="flex justify-between">
          <span>Price</span>
          <span>${getSubtotal().toFixed(2)}</span>
        </p>

        <p className="mt-2 flex justify-between">
          <span>Discount</span>
          <span>${getDiscount().toFixed(2)}</span>
        </p>

        <hr className="my-3" />

        <p className="flex justify-between text-lg font-bold text-green-600">
          <span>Final Price</span>
          <span>${getFinalPrice().toFixed(2)}</span>
        </p>
      </div>
      <Link to="/checkout">
        <Button className="mt-4" variant="success">
          Checkout
        </Button>
      </Link>
    </Container>
  );
}

export default Cart;
