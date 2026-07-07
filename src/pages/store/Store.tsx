import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "./../../../services/api";
import type { Iproducts } from "../../types/server";

function Store() {
  const [products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-center mt-6 text-2xl">newset items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products.map((item) => (
            <Link key={item.id} to={`/Product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
