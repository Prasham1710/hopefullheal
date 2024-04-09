"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();
  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="w-24 h-24 relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex-1">
          <Link
            href={`/doctor/products/${product.id}`}
            passHref
            className="font-bold text-lg leading-tight"
          >
            {product.name}
          </Link>
          <div className="text-gray-600">{formatPrice(product.price)}</div>
          <div className="mt-2 flex items-center gap-2">
            <label className="text-sm font-medium">Quantity:</label>
            <select
              className="border border-gray-300 rounded-md px-2 py-1"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              <option value={0}>0 (Remove)</option>
              {quantityOptions}
            </select>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <label className="text-sm font-medium">Total:</label>
            <div className="font-semibold">
              {formatPrice(product.price * quantity)}
            </div>
            {isPending && (
              <span className="animate-spin w-4 h-4 border-t-2 border-b-2 border-blue-500 rounded-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
