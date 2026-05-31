"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({ children, className, ...props }: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center gap-2 bg-[#00416a] hover:bg-[#003255] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${className ?? ""}`}
    >
      {pending && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
      )}
      {children}
    </button>
  );
}
