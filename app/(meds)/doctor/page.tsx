import Image from "next/image";
import ProductCard from "./_components/ProductCard";
import prisma from "@/lib/db/prisma";
import Link from "next/link";
import PaginationBar from "./_components/PagainationBar";
interface HomeProps {
  searchParams: { page: string };
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);

  const pageSize = 10;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className="flex flex-col items-center">
      <div className="my-4 grid grid-cols-1  gap-6 rounded-2xl shadow-amber-50 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {(currentPage === 1 ? products.slice(1) : products).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
/*<Link
    href={"components/products/" + products[0].id}
    className="btn-primary btn"
  >
    Check it out
  </Link>;*/
