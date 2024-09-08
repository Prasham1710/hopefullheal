import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";
import { FaStethoscope } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7; // Product is considered new if created within the last 7 days

  return (
    <Link href={"doctor/products/" + product.id}>
      <div className="card w-full bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 rounded-lg overflow-hidden cursor-pointer">
        {/* Image Section */}
        <figure className="relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </figure>

        {/* Product Details Section */}
        <div className="card-body p-4">
          <h2 className="card-title text-2xl font-bold text-gray-800 mb-2 truncate">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <PriceTag price={product.price} />
            <FaStethoscope className="text-green-600" size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
}
