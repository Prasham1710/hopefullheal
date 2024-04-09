import prisma from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import PriceTag from "@/app/(meds)/doctor/_components/PriceTag";
import { cache } from "react";
import AddToCartButton from "../../../_components/AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:items-center">
      <div className="lg:w-1/2">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
          priority
        />
      </div>
      <div className="lg:w-1/2 lg:pl-8">
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
         <AddToCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
          
        />
      </div>
    </div>
  );
}
