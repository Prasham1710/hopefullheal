
import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}
export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {[]
  return (
    <div className="">
      <label tabIndex={0} className="">
        <div className="">
          <BsCartPlus size={25} />
          <span className="">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className=" "
      >
        <div className="">
          <span className="text-lg font-bold">{cart?.size || 0} Items</span>
          <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="">
            <Link href="doctor/cart" className="btn-primary btn-block btn">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
