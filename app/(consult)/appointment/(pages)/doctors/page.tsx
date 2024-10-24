import ProductCard from "@/app/(consult)/appointment/_components/ProductCard/page";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 overflow-auto">
      <div className="container mx-auto py-10">
        <ProductCard />
      </div>
    </div>
  );
}
