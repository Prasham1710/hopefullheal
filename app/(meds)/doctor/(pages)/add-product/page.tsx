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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-lg font-bold mb-6">Add Product</h1>

      <form className="max-w-md w-full" action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        <FormSubmitButton className="btn-block bg-blue-500 text-white py-3 rounded">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}
