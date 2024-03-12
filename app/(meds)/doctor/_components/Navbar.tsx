import { getCart } from "@/lib/db/cart";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/authOptions";
import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";

import { BsCartPlus } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}
export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();
  return (
    <div className="bg-[#00416a] flex w-full">
      <div className="flex gap-10 text-white">
        <div className="text-xl  pl-14 my-4">
          <Link href="/">Codecure</Link>
        </div>
        <div className="flex ml-96 gap-20 pt-4">
          <Link className=" text-lg hover:underline" href="/doctor">
            Home
          </Link>
          <Link className=" text-lg hover:underline" href="/appointment">
            Consunlt doctor
          </Link>
          <div className="pl-32 flex gap-2">
            <form action={searchProducts}>
              <div className="">
                <input
                  name="searchQuery"
                  placeholder="Search"
                  className="rounded-xl p-2"
                />
              </div>
            </form>
            <UserMenuButton session={session} />
            <Popover>
              <PopoverTrigger>
                <div className="">
                  <BsCartPlus size={25} />
                  <span className="">{cart?.size || 0}</span>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="">
                  <span className="text-lg font-bold">
                    {cart?.size || 0} Items
                  </span>
                  <span className="text-info">
                    Subtotal: {formatPrice(cart?.subtotal || 0)}
                  </span>
                  <div className="">
                    <Link
                      href="doctor/cart"
                      className="btn-primary btn-block btn"
                    >
                      View cart
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <div className="flex pl-2">
              <button className="">Rx</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/* <nav className="navbar">
            <div className="navbar-start">
                <a href="/" className="navbar-brand">CodeCure</a>
            </div>
            <div className="navbar-end">
                <a href="components/add-product" className="btn btn-ghost">Add Product</a>
                <a href="/cart" className="btn btn-ghost">Cart</a>
            </div>
        </nav>*/
