
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import PriceTag from "@/app/(meds)/doctor/_components/PriceTag";
import { Metadata } from "next";
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
    <div className=" p-4 flex flex-col gap-4 lg:flex-row lg:items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />

      <div>
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
