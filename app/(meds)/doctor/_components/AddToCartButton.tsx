"use client"

import { useState, useTransition } from "react";
import { BsCartPlus } from "react-icons/bs";

interface AddToCartButtonProps {
  productId: string; incrementProductQuantity: (productId: string) => Promise<void>;
  }
export default function AddToCartButton({productId, incrementProductQuantity}: AddToCartButtonProps){
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
return (
  <div className="flex items-center gap-2">
    <button
      className="bg-blue-200 btn"
      onClick={() => {
        setSuccess(false);
        startTransition(async () => {
          await incrementProductQuantity(productId);
          setSuccess(true);
        });
      }}
    >
      Add to Cart
      <BsCartPlus size={20} />
    </button>
    {isPending && <span className="loading loading-spinner loading-md" />}
    {isPending && success && (
      <span className="text-success">Added to Cart</span>
    )}
  </div>
);
    }