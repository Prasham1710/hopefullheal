import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{ backgroundColor: "#dbdbdb" }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your Cart is empty</p>}
      <div className="flex flex-col items-end mt-8 space-y-4 sm:items-center sm:space-y-0 sm:flex-row sm:justify-between">
        <p className="text-2xl font-bold text-gray-800">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
