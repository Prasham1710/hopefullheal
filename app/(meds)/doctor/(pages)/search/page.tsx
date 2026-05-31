import ProductCard from "@/app/(meds)/doctor/_components/ProductCard";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";

interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({ searchParams: { query } }: SearchPageProps): Metadata {
  return {
    title: `Search: "${query}" — Hopeful Heals`,
    description: `Search results for ${query} on Hopeful Heals medicines portal.`,
  };
}

export default async function SearchPage({ searchParams: { query } }: SearchPageProps) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[#b1c0ca] text-sm mb-2">
            <Search size={14} />
            <span>Search Results</span>
          </div>
          <h1 className="text-white font-black text-2xl sm:text-3xl">
            &ldquo;{query}&rdquo;
          </h1>
          <p className="text-[#b1c0ca] text-sm mt-1">
            {products.length} result{products.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {products.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-16 text-center">
            <div className="w-16 h-16 bg-[#f0f4f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={28} className="text-[#688ca2]" />
            </div>
            <h2 className="font-bold text-[#243a50] text-lg mb-2">No results for &ldquo;{query}&rdquo;</h2>
            <p className="text-[#688ca2] text-sm mb-6">
              Try a different search term or browse all medicines.
            </p>
            <Link href="/doctor"
              className="inline-block bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-2.5 px-7 rounded-xl transition-colors text-sm">
              Browse All Medicines
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
