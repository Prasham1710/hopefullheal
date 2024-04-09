"use client";
import { useEffect, useState } from "react";

import { datageter } from "./action";
interface Product {
  id: string;
  doctor: string;
  patient: string;
  dateofAppointment: string;
  timeofAppointment: string;
  createdAt: string; // Assuming createdAt is a string, change the type if it's different
  updatedAt: string; // Assuming updatedAt is a string, change the type if it's different
}

const page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await datageter();
        setProducts(
          products.map((product) => ({
            ...product,
            createdAt: "",
            updatedAt: "",
          }))
        );
        // Handle the products in your frontend as needed
      } catch (error) {
        console.error("Error fetching all products:", error);
        // Handle error scenarios in your frontend
      }
    };

    // Fetch data on component mount
    fetchData();
  }, []);
  return (
    <div className="w-full h-full "style={{ backgroundImage: "url('/bg6.png')" }}>
      <div className="font-extrabold text-[32px] pt-20 flex justify-center items-center">
        Your Appointments
      </div>

      <div className="flex justify-center items-center pb-20">
        <table className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-3">Doctor</th>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-4 py-3">{product.doctor}</td>
                <td className="px-4 py-3">{product.patient}</td>
                <td className="px-4 py-3">{product.dateofAppointment}</td>
                <td className="px-4 py-3">{product.timeofAppointment}</td>
                <td className="px-4 py-3">
                  <button className="text-blue-500 hover:underline">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;