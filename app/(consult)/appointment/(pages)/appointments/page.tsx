"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { datageter } from "./action";
import { toast } from "react-hot-toast";
import { FaTimes } from "react-icons/fa"; // Import an icon for the cancel button

interface Product {
  id: string;
  doctor: string;
  patient: string;
  dateofAppointment: string;
  timeofAppointment: string;
  createdAt: string;
  updatedAt: string;
}

const Page = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await datageter();
        const userAppointments = fetchedProducts.filter(
          (product) => product.patient === user?.name
        );
        setProducts(
          userAppointments.map((product) => ({
            ...product,
            createdAt: "",
            updatedAt: "",
          }))
        );
      } catch (error) {
        console.error("Error fetching all products:", error);
        // Handle error scenarios in your frontend
      }
    };

    // Fetch data on component mount
    fetchData();
  }, [user]);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg6.png')" }}
    >
      <div className="font-extrabold text-2xl pt-10 text-center">
        Your Appointments
      </div>

      <div className="flex justify-center items-center pb-10">
        <div className="w-full max-w-5xl">
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden text-sm">
              <thead className="bg-blue-200 text-xs">
                <tr>
                  <th className="px-4 py-3">Doctor</th>
                  <th className="px-4 py-3">Patient</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-3 text-center">
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  products.map((product, index) => (
                    <tr
                      key={product.id}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-blue-50 transition-colors`}
                    >
                      <td className="px-4 py-3">{product.doctor}</td>
                      <td className="px-4 py-3">{product.patient}</td>
                      <td className="px-4 py-3">{product.dateofAppointment}</td>
                      <td className="px-4 py-3">{product.timeofAppointment}</td>
                      <td className="px-4 py-3">
                        <button className="flex items-center justify-center bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition">
                          <FaTimes className="mr-1" /> Cancel
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
