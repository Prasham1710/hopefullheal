"use server";

import  prisma  from "@/lib/db/prisma";

import { revalidatePath } from "next/cache";
export async function datageter(name: string) {
  try {
    const products = await prisma.appointment.findMany({
      where: {
        patient: name,
      },
    });
    revalidatePath("/profile");
    return products;
  } catch (error) {
    console.error("Error fetching all products:");
    throw new Error("Failed to fetch all products");
  }
}
