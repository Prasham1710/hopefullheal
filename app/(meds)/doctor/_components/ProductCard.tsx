import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "../(pages)/products/[id]/actions";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e4e5e6] hover:border-[#00416a]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image — links to product page */}
      <Link href={"doctor/products/" + product.id} className="block">
        <div className="relative h-48 bg-[#f0f4f8] overflow-hidden">
          {isNew && (
            <span className="absolute top-3 left-3 z-10 bg-[#ff6f61] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              New
            </span>
          )}
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={200}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={"doctor/products/" + product.id} className="block mb-1">
          <h2 className="font-bold text-[#243a50] text-base truncate hover:text-[#00416a] transition-colors">
            {product.name}
          </h2>
        </Link>
        <p className="text-sm text-[#688ca2] line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>
        <PriceTag price={product.price} />
      </div>

      {/* Actions */}
      <div className="px-4 pb-4 flex flex-col gap-2">
        <AddToCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
        <Link
          href={"doctor/products/" + product.id}
          className="block w-full text-center border border-[#00416a] text-[#00416a] hover:bg-[#00416a] hover:text-white text-sm font-semibold py-2 rounded-xl transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
