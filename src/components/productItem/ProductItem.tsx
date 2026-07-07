import type { Iproducts } from "../../types/server";

function ProductItem({ title, description, image, price }: Iproducts) {
  return (
    <div className="mt-5 overflow-hidden rounded-lg border border-blue-400 shadow shadow-blue-800">
      <img className="w-full h-48" src={image} alt="Product" />

      <div className="flex items-center justify-between p-3">
        <h3 className="font-semibold">{title}</h3>
        <span className="font-bold text-blue-600 whitespace-nowrap">
          {price}$
        </span>
      </div>

      <div className="px-3 pb-3">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
