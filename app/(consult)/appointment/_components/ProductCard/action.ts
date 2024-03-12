"use server";

import  prisma  from "@/lib/db/prisma";
import { error } from "console";
import { revalidatePath } from "next/cache";
export async function datageter() {
  try {
    const products = await prisma.doctor.findMany();
    revalidatePath("doctors");
    console.log(products);
    return products;
  } catch (error) {
    console.error("Error fetching all products:");
  }
}

export async function appointmentupdater(
  doctor: string,
  patient: string,
  appointmentdate: string,
  appointmenttime: string
) {
  try {
    // Check if there is an existing appointment for the specified doctor and time
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        doctor: doctor,
        dateofAppointment: appointmentdate,
        timeofAppointment: appointmenttime,
      },
    });

    if (existingAppointment) {
      // Handle the case where the appointment already exists
      console.log(
        `Doctor ${doctor} already has an appointment at ${appointmenttime} on ${appointmentdate}`
      );
      return {
        text: `Doctor ${doctor} already has an appointment at ${appointmenttime} on ${appointmentdate}`,
        status: 400,
      }; // Or throw an error or handle the situation based on your requirements
    }

    // If no existing appointment, create a new appointment
    const newAppointment = await prisma.appointment.create({
      data: {
        doctor: doctor,
        patient: patient,
        dateofAppointment: appointmentdate,
        timeofAppointment: appointmenttime,
      },
    });

    revalidatePath("doctors");
    return { text: "booked sucessfully", status: 200 };
  } catch (error) {
    console.error("Error creating/updating appointment:", error);

    return { status: 500 };
  }
}
