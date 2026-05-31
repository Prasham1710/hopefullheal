import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { ShoppingCart, Lock, Truck, ShieldCheck } from "lucide-react";

export default async function CartPage() {
  const cart = await getCart();
  const hasItems = (cart?.items?.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-[#f0f4f8]">

      {/* Header */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-2">
            Hopeful Heals
          </p>
          <h1 className="text-white font-black text-3xl sm:text-4xl mb-1">
            Shopping Cart
          </h1>
          {hasItems && (
            <p className="text-[#b1c0ca] text-sm">
              {cart!.items.length} item{cart!.items.length !== 1 ? "s" : ""} in your cart
            </p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {!hasItems ? (
          /* ── Empty state ── */
          <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-16 text-center">
            <div className="w-20 h-20 bg-[#f0f4f8] rounded-full flex items-center justify-center mx-auto mb-5">
              <ShoppingCart size={36} className="text-[#688ca2]" />
            </div>
            <h2 className="text-xl font-bold text-[#243a50] mb-2">Your cart is empty</h2>
            <p className="text-[#688ca2] text-sm mb-7">
              Add medications to your cart to get started.
            </p>
            <Link
              href="/doctor"
              className="inline-block bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-[#ff6f61]/25 hover:scale-105 transition-all duration-200 text-sm"
            >
              Browse Medicines
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

            {/* ── Cart items ── */}
            <div className="lg:col-span-2 space-y-4">
              {cart!.items.map((cartItem) => (
                <CartEntry
                  cartItem={cartItem}
                  key={cartItem.id}
                  setProductQuantity={setProductQuantity}
                />
              ))}
            </div>

            {/* ── Order summary ── */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-6 sticky top-24">
                <h2 className="font-bold text-[#243a50] text-lg mb-5">Order Summary</h2>

                <div className="space-y-3 text-sm mb-5">
                  <div className="flex justify-between text-[#688ca2]">
                    <span>Subtotal ({cart!.items.length} items)</span>
                    <span className="font-medium text-[#243a50]">
                      {formatPrice(cart?.subtotal || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#688ca2]">
                    <span>Delivery</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-[#688ca2]">
                    <span>Tax</span>
                    <span className="font-medium text-[#243a50]">Included</span>
                  </div>
                  <div className="border-t border-[#f0f4f8] pt-3 flex justify-between">
                    <span className="font-bold text-[#243a50]">Total</span>
                    <span className="font-black text-[#00416a] text-xl">
                      {formatPrice(cart?.subtotal || 0)}
                    </span>
                  </div>
                </div>

                <Link
                  href="/doctor/checkout"
                  className="block w-full text-center bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-[#ff6f61]/25 hover:scale-[1.02] transition-all duration-200 text-sm mb-3"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/doctor"
                  className="block text-center text-[#00416a] hover:text-[#003255] text-sm font-medium hover:underline transition-colors"
                >
                  ← Continue Shopping
                </Link>

                {/* Trust badges */}
                <div className="mt-5 pt-5 border-t border-[#f0f4f8] space-y-2">
                  {[
                    { Icon: Lock,        text: "Secure & encrypted checkout" },
                    { Icon: Truck,       text: "Free delivery on all orders" },
                    { Icon: ShieldCheck, text: "100% authentic medications"  },
                  ].map(({ Icon, text }) => (
                    <p key={text} className="text-[#688ca2] text-xs flex items-center gap-2">
                      <Icon size={12} className="text-[#00416a] shrink-0" />
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
