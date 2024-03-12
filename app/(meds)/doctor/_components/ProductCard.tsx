import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link href={"doctor/products/" + product.id}>
      <div className="card w-full bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
            className="h-48 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-semibold mb-2">
            {product.name}
          </h2>
          {isNew && (
            <div className="badge badge-secondary text-sm mb-2">NEW</div>
          )}
          <p className="text-gray-700">{product.description}</p>
          <PriceTag price={product.price} />
        </div>
      </div>
    </Link>
  );
}
