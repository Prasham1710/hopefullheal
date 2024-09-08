import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "@/app/(meds)/doctor/_components/FormSubmitButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/authOptions";

export const metadata = {
  title: "Add Product - COdecure",
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

  redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/doctor/add-product");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-blue-200 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Add New Product
        </h1>
        <form className="space-y-4" action={addProduct}>
          <input
            required
            name="name"
            placeholder="Product Name"
            className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          <textarea
            required
            name="description"
            placeholder="Product Description"
            className="textarea textarea-bordered w-full px-4 py-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            rows={4}
          />
          <input
            required
            name="imageUrl"
            placeholder="Image URL"
            type="url"
            className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          <input
            required
            name="price"
            placeholder="Price"
            type="number"
            className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          <FormSubmitButton className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300">
            Add Product
          </FormSubmitButton>
        </form>
      </div>
    </div>
  );
}
