import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div className="relative">
      <Link href="/doctor/cart" className="flex items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition-colors">
        <BsCartPlus size={22} className="text-white" />
        {(cart?.size ?? 0) > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#ff6f61] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cart!.size}
          </span>
        )}
      </Link>
      <div className="hidden absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#e4e5e6] p-4 z-50">
        <p className="font-bold text-[#243a50] mb-1">{cart?.size ?? 0} Items</p>
        <p className="text-sm text-[#688ca2] mb-3">
          Subtotal: {formatPrice(cart?.subtotal || 0)}
        </p>
        <Link
          href="/doctor/cart"
          className="block w-full text-center py-2.5 bg-[#00416a] hover:bg-[#003255] text-white font-semibold rounded-xl transition-colors text-sm"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
}
