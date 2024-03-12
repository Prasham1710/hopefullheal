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
        <table className="mt-[90px] w-[120px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg border-black border-[2px]  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Doctor
              </th>
              <th scope="col" className="px-6 py-3">
                Patient
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.doctor}
                </th>
                <td className="px-6 py-4">{product.patient}</td>
                <td className="px-6 py-4">{product.dateofAppointment}</td>
                <td className="px-6 py-4">{product.timeofAppointment}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Cancel
                  </a>
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
