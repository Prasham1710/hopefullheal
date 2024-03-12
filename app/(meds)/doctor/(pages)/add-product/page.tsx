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
  for (let i = 0; i < 50; i++) {
    await prisma.product.create({
      data: { name, description, imageUrl, price },
    });
  }
  redirect("/");
}
export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/components/add-product");
  }

  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>

      <form action={addProduct}>
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
        <FormSubmitButton className=" btn-block">Add Product </FormSubmitButton>
      </form>
    </div>
  );
}
