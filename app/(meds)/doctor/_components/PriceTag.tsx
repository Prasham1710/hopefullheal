import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return (
    <span className={`font-black text-[#00416a] text-base ${className ?? ""}`}>
      {formatPrice(price)}
    </span>
  );
}
