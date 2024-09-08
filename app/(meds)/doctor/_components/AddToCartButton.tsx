"use client";

import { useState, useTransition } from "react";
import { BsCartPlus } from "react-icons/bs";

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

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        className={`flex items-center bg-blue-600 text-white px-5 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-transform duration-300 transform-gpu ${
          isPending ? "cursor-not-allowed opacity-70" : "hover:scale-105"
        }`}
        disabled={isPending}
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        <span className="mr-2">Add to Cart</span>
        <BsCartPlus size={20} />
      </button>

      {isPending && (
        <span className="loading loading-spinner loading-md text-blue-500" />
      )}

      {!isPending && success && (
        <span className="text-blue-600 font-semibold">Added to Cart!</span>
      )}
    </div>
  );
}
