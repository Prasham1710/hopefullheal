"use server";

import prisma from "@/lib/db/prisma";
import { authOptions } from "@/lib/utils/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function datageter() {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("Unauthorized");

  const appointments = await prisma.appointment.findMany({
    where: { patient: session.user.name ?? "" },
    orderBy: { id: "desc" },
  });
  revalidatePath("/appointment/appointments");
  return appointments;
}

export async function deleteAppointment(id: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("Unauthorized");

  // Verify the appointment belongs to this user before deleting
  const appointment = await prisma.appointment.findFirst({
    where: { id, patient: session.user.name ?? "" },
  });
  if (!appointment) throw new Error("Not found");

  await prisma.appointment.delete({ where: { id } });
  revalidatePath("/appointment/appointments");
  return { success: true };
}
