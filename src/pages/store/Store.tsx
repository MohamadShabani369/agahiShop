import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "./../../../services/api";
import type { Iproducts } from "../../types/server";
import SearchBox from "../../components/search/SearchBox";
import SkeletonProduct from "../../components/skeletonproduct/SkeletonProduct";

function Store() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getProducts()
        .then((res) => {
          setProducts(res);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Container>
        <h1 className="text-center mt-6 mb-4 text-2xl">newset items</h1>
        <SearchBox value={search} onChange={setSearch} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonProduct key={index} />
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Link key={item.id} to={`/Product/${item.id}`}>
                <ProductItem {...item} />
              </Link>
            ))
          ) : (
            <div className="col-span-full mt-16 rounded-2xl border border-dashed border-slate-300 py-16 text-center dark:border-slate-700">
              <h2 className="text-2xl font-bold">😕 No products found</h2>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Try searching with another keyword.
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Store;
