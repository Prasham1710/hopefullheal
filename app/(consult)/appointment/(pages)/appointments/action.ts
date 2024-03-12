"use server";

import  prisma  from "@/lib/db/prisma";

import { revalidatePath } from "next/cache";
export async function datageter() {
  try {
    const products = await prisma.appointment.findMany();
    revalidatePath("doctors");
    return products;
  } catch (error) {
    console.error("Error fetching all products:");
    throw new Error("Failed to fetch all products");
  }
}
