import { Navigate, Outlet } from "react-router-dom";
import { useShopingCartContext } from "../../context/createContext";

function PrivateRoute() {
  const { isLogin } = useShopingCartContext();
  return <>{isLogin ? <Outlet /> : <Navigate to={"/login"} />}</>;
}

export default PrivateRoute;
