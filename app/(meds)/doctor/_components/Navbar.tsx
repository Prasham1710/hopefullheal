import { getCart } from "@/lib/db/cart";
import Link from "next/link";
import Logo from "@/components/logo";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/authOptions";
import { formatPrice } from "@/lib/format";
import { BsCart3 } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  const cartSize = cart?.size || 0;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#00416a] to-[#003255] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Logo href="/" />

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-white/80">
          <Link className="hover:text-white transition-colors font-medium" href="/doctor">
            Medicines
          </Link>
          <Link className="hover:text-white transition-colors font-medium" href="/appointment">
            Consult Doctor
          </Link>
          <Link className="hover:text-white transition-colors font-medium" href="/">
            Home
          </Link>
        </div>

        {/* Search + Cart + User */}
        <div className="flex items-center gap-3">
          <form action={searchProducts} className="relative hidden sm:block">
            <input
              name="searchQuery"
              placeholder="Search medicines..."
              className="pl-4 pr-4 py-2 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all text-sm w-44 focus:w-56"
            />
          </form>

          {/* Cart */}
          <Popover>
            <PopoverTrigger>
              <div className="relative flex items-center cursor-pointer p-2 rounded-xl hover:bg-white/10 transition-colors">
                <BsCart3 size={22} className="text-white" />
                {cartSize > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ff6f61] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartSize}
                  </span>
                )}
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-4 shadow-xl bg-white text-black rounded-2xl border border-[#e4e5e6] w-64">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-[#243a50]">
                  {cartSize} {cartSize === 1 ? "Item" : "Items"}
                </span>
                <span className="text-sm text-[#688ca2]">
                  Subtotal: {formatPrice(cart?.subtotal || 0)}
                </span>
              </div>
              <div className="mt-4">
                <Link
                  href="/doctor/cart"
                  className="block w-full text-center py-2.5 px-4 bg-[#00416a] hover:bg-[#003255] text-white font-semibold rounded-xl transition-colors"
                >
                  View Cart
                </Link>
              </div>
            </PopoverContent>
          </Popover>

          <UserMenuButton session={session} />
        </div>
      </div>
    </header>
  );
}
