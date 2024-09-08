import { getCart } from "@/lib/db/cart";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/authOptions";
import { formatPrice } from "@/lib/format";
import { BsCartPlus } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";

async function searchProducts(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect("/doctor/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className="bg-gradient-to-r from-[#00416a] to-[#00a4e0] flex justify-between items-center px-10 py-4 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-semibold text-white">
        <Link href="/">Codecure</Link>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10 text-white">
        <Link className="text-lg hover:underline" href="/doctor">
          Home
        </Link>
        <Link className="text-lg hover:underline" href="/appointment">
          Consult Doctor
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <form action={searchProducts} className="relative">
          <input
            name="searchQuery"
            placeholder="Search"
            className="p-2 rounded-full border border-gray-300 focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-black"
          />
        </form>

        {/* Shopping Cart */}
        <Popover>
          <PopoverTrigger>
            <div className="relative flex items-center cursor-pointer">
              <BsCartPlus size={25} className="text-white" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart?.size || 0}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="p-4 shadow-lg bg-white text-black rounded-lg">
            <div className="flex flex-col space-y-2">
              <span className="text-lg font-bold">{cart?.size || 0} Items</span>
              <span className="text-sm text-gray-500">
                Subtotal: {formatPrice(cart?.subtotal || 0)}
              </span>
            </div>
            <div className="mt-4">
              <Link
                href="/doctor/cart"
                className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
              >
                View Cart
              </Link>
            </div>
          </PopoverContent>
        </Popover>

        {/* User Menu */}
        <UserMenuButton session={session} />
      </div>
    </div>
  );
}
