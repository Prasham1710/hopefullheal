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
export async function deleteAppointment(id: string) {
  try {
    await prisma.appointment.delete({
      where: { id },
    });
    revalidatePath("doctors");
    return { success: true, message: "Appointment deleted successfully" };
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw new Error("Failed to delete the appointment");
  }
}