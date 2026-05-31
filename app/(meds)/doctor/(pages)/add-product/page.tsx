import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "@/app/(meds)/doctor/_components/FormSubmitButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/authOptions";

export const metadata = {
  title: "Add Product — Hopeful Heals",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/doctor");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/doctor/add-product");
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-sm rounded-2xl border border-[#e4e5e6] p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-1 text-[#243a50]">
          Add New Product
        </h1>
        <p className="text-[#688ca2] text-sm text-center mb-7">
          Fill in the details to list a new medication.
        </p>
        <form className="space-y-4" action={addProduct}>
          <div>
            <label className="block text-xs font-semibold text-[#688ca2] uppercase tracking-wider mb-1.5">Product Name</label>
            <input
              required
              name="name"
              placeholder="e.g. Capecitabine 500mg"
              className="w-full px-4 py-3 rounded-xl border border-[#e4e5e6] text-[#243a50] placeholder-[#b1c0ca] text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#688ca2] uppercase tracking-wider mb-1.5">Description</label>
            <textarea
              required
              name="description"
              placeholder="Brief description of the medication..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#e4e5e6] text-[#243a50] placeholder-[#b1c0ca] text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] transition-all resize-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#688ca2] uppercase tracking-wider mb-1.5">Image URL</label>
            <input
              required
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              type="url"
              className="w-full px-4 py-3 rounded-xl border border-[#e4e5e6] text-[#243a50] placeholder-[#b1c0ca] text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#688ca2] uppercase tracking-wider mb-1.5">Price (₹)</label>
            <input
              required
              name="price"
              placeholder="e.g. 499"
              type="number"
              min={1}
              className="w-full px-4 py-3 rounded-xl border border-[#e4e5e6] text-[#243a50] placeholder-[#b1c0ca] text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] transition-all"
            />
          </div>
          <FormSubmitButton className="w-full mt-2">
            Add Product
          </FormSubmitButton>
        </form>
      </div>
    </div>
  );
}
