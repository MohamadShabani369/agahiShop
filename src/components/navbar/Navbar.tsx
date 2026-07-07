import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShopingCartContext } from "../../context/createContext";
import cart from "./../../assets/photos/cart-svgrepo-com.svg";

function Navbar() {
  const { cartQty } = useShopingCartContext();

  return (
    <div className="h-14 font-bold  border-b border-blue-300 shadow-md shadow-blue-700  flex items-center">
      <Container>
        <div className=" flex justify-between  flex-row-reverse ">
          <ul className="flex flex-row-reverse x ">
            <li className="ml-4">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/store"}>Store</Link>
            </li>
          </ul>
          <div>
            <Link to="/cart" className="relative">
              <img className="w-7 h-7" src={cart} alt="cart" />
              <span className="absolute -top-2 -right-10 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartQty}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
