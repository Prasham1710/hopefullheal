import ProductCard from "./_components/ProductCard";
import prisma from "@/lib/db/prisma";
import Link from "next/link";
import PaginationBar from "./_components/PagainationBar";
import { ShieldCheck, Truck, Clock } from "lucide-react";

interface HomeProps {
  searchParams: { page: string };
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 12;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();
  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  const heroProduct = currentPage === 1 ? products[0] : null;
  const gridProducts = currentPage === 1 ? products.slice(1) : products;

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Header banner */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-2">
            Hopeful Heals
          </p>
          <h1 className="text-white font-black text-3xl sm:text-4xl mb-2">
            Cancer Medications
          </h1>
          <p className="text-[#b1c0ca] text-sm">
            Authentic, pharmacy-verified medications delivered to your door
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-white border-b border-[#e4e5e6]">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { Icon: ShieldCheck,      label: "100% Authentic" },
            { Icon: Truck,            label: "Free Delivery"  },
            { Icon: Clock,            label: "24/7 Support"  },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-[#688ca2] font-medium">
              <Icon size={15} className="text-[#00416a]" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero product */}
        {heroProduct && (
          <div className="mb-8">
            <Link href={"doctor/products/" + heroProduct.id}
              className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-[#e4e5e6] shadow-sm hover:shadow-xl hover:border-[#00416a]/20 transition-all duration-300">
              <div className="sm:w-72 h-48 sm:h-auto bg-[#f0f4f8] overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroProduct.imageUrl}
                  alt={heroProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-[#ff6f61] text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3 w-fit">
                  Featured
                </span>
                <h2 className="font-black text-2xl text-[#243a50] mb-2">
                  {heroProduct.name}
                </h2>
                <p className="text-[#688ca2] text-sm leading-relaxed mb-4 max-w-2xl">
                  {heroProduct.description}
                </p>
                <span className="inline-flex items-center gap-2 bg-[#00416a] hover:bg-[#003255] text-white font-bold text-sm py-2.5 px-6 rounded-xl transition-colors w-fit">
                  View Product →
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-[#243a50] text-lg">
            All Medicines
            <span className="ml-2 text-[#688ca2] text-sm font-normal">
              ({totalItemCount} products)
            </span>
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {gridProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <PaginationBar currentPage={currentPage} totalPages={totalPages} />
          </div>
        )}
      </div>
    </div>
  );
}
