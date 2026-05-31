"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { Trash2 } from "lucide-react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  const handleQtyChange = (newQty: number) => {
    startTransition(async () => {
      await setProductQuantity(product.id, newQty);
    });
  };

  return (
    <div className={`bg-white rounded-2xl border border-[#e4e5e6] shadow-sm overflow-hidden transition-opacity duration-200 ${isPending ? "opacity-60" : ""}`}>
      <div className="flex items-center gap-4 p-4 sm:p-5">

        {/* Image */}
        <Link href={`/doctor/products/${product.id}`} className="shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#f0f4f8] border border-[#e4e5e6]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={96}
              height={96}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <Link href={`/doctor/products/${product.id}`}>
            <h3 className="font-bold text-[#243a50] text-sm sm:text-base truncate hover:text-[#00416a] transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-[#00416a] font-bold text-sm mt-0.5">
            {formatPrice(product.price)} <span className="text-[#688ca2] font-normal text-xs">/ unit</span>
          </p>

          {/* Qty controls */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center border border-[#e4e5e6] rounded-xl overflow-hidden">
              <button
                onClick={() => handleQtyChange(Math.max(0, quantity - 1))}
                disabled={isPending}
                className="w-8 h-8 flex items-center justify-center text-[#243a50] hover:bg-[#f0f4f8] transition-colors disabled:opacity-50 font-bold text-lg"
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-bold text-[#243a50]">
                {quantity}
              </span>
              <button
                onClick={() => handleQtyChange(quantity + 1)}
                disabled={isPending}
                className="w-8 h-8 flex items-center justify-center text-[#243a50] hover:bg-[#f0f4f8] transition-colors disabled:opacity-50 font-bold text-lg"
              >
                +
              </button>
            </div>

            {isPending && (
              <span className="w-4 h-4 border-2 border-[#00416a] border-t-transparent rounded-full animate-spin" />
            )}
          </div>
        </div>

        {/* Right: total + remove */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          <p className="font-black text-[#243a50] text-base">
            {formatPrice(product.price * quantity)}
          </p>
          <button
            onClick={() => handleQtyChange(0)}
            disabled={isPending}
            className="flex items-center gap-1 text-xs text-red-400 hover:text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded-xl transition-all disabled:opacity-50 border border-red-100 hover:border-red-200"
          >
            <Trash2 size={12} />
            Remove
          </button>
        </div>

      </div>
    </div>
  );
}
