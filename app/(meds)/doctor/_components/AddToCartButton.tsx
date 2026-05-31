"use client";

import { useState, useTransition } from "react";
import { BsCartPlus, BsCheck2 } from "react-icons/bs";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCartButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSuccess(false);
    startTransition(async () => {
      await incrementProductQuantity(productId);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 disabled:cursor-not-allowed
        ${
          success
            ? "bg-green-500 text-white"
            : "bg-[#ff6f61] hover:bg-[#e85d50] text-white hover:shadow-md hover:shadow-[#ff6f61]/25"
        }
        ${isPending ? "opacity-75" : ""}
      `}
    >
      {isPending ? (
        <>
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Adding…
        </>
      ) : success ? (
        <>
          <BsCheck2 size={16} />
          Added!
        </>
      ) : (
        <>
          <BsCartPlus size={16} />
          Add to Cart
        </>
      )}
    </button>
  );
}
