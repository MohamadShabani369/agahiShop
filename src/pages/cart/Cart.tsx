import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShopingCartContext } from "../../context/createContext";

function Cart() {
  const { cartItem } = useShopingCartContext();

  return (
    <Container>
      <div>
        {
          cartItem.map(item =>(
            <CartItem {...item}/>
          ))
        }

      </div>
      <div className="mt-3 bg-gray-300 rounded p-2">
        <p>price : 2000</p>
        <p>off : 200</p>
        <p>final price : 1800</p>
      </div>
      <Button className="mt-4" variant="success">
        sumbit
      </Button>
    </Container>
  );
}

export default Cart;
