import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import { getProduct } from "../../../services/api";
import type { Iproducts } from "../../types/server";
import { useShopingCartContext } from "../../context/createContext";

function ProductPage() {
  const {
    handleIncreaseQty,
    handleDecreaseQty,
    getProductQty,
    removeProduct,
    cartItem,
  } = useShopingCartContext();

  console.log(cartItem);

  const params = useParams<{ id: string }>();
  const param = Number(params.id)

  const [Product, setProduct] = useState<Iproducts>();

  useEffect(() => {
    getProduct(param).then((res) => {
      setProduct(res);
    });
  }, [param]);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 shadow mt-8 rounded-2xl">
        <div className="md:col-span-3 p-4 bg-sky-100 rounded-2xl">
          <img
            className="w-full h-60 md:h-40  rounded"
            src={Product?.image}
            alt=""
          />

          {getProductQty(param) === 0 ? (
            <Button
              onClick={() => {
                handleIncreaseQty(param);
              }}
              className="mt-4 w-full"
            >
              add to cart
            </Button>
          ) : (
            <>
              <div className="grid grid-cols-3">
                <Button
                  onClick={() => {
                    handleIncreaseQty(param);
                  }}
                  size="icon"
                  className="mt-4 w-full"
                >
                  +
                </Button>
                <p className="flex justify-center items-center mt-4">
                  {getProductQty(param)}
                </p>
                <Button
                  onClick={() => {
                    handleDecreaseQty(param);
                  }}
                  size="icon"
                  className="mt-4 w-full"
                >
                  -
                </Button>
              </div>
              <Button
                variant="danger"
                className="mt-4 w-full"
                onClick={() => {
                  removeProduct(param);
                }}
              >
                remove
              </Button>
            </>
          )}
        </div>

        <div className="md:col-span-9 p-4">
          <h1 className="font-bold text-xl">{Product?.title}</h1>
          <p className="mt-2">{Product?.price}$</p>
          {Product?.description}
          <p className="mt-4 "></p>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
