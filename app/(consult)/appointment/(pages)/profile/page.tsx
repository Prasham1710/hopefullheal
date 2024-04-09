"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { datageter } from "./action";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

interface Product {
  id: string;
  doctor: string;
  patient: string;
  dateofAppointment: string;
  timeofAppointment: string;
  createdAt: string; // Assuming createdAt is a string, change the type if it's different
  updatedAt: string; // Assuming updatedAt is a string, change the type if it's different
}

const Page = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const name = user?.name;
  const [products, setProducts] = React.useState<Product[]>([]);
  const router = useRouter(); // Initialize useRouter for navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await datageter(name ?? "");
        setProducts(
          products.map((product) => ({
            ...product,
            createdAt: "",
            updatedAt: "",
          }))
        );
        console.log(products);
        // Handle the products in your frontend as needed
      } catch (error) {
        console.error("Error fetching all products:", error);
        // Handle error scenarios in your frontend
      }
    };

    // Fetch data on component mount
    fetchData();
  }, [name]);

  // Function to navigate to a specific product page
  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-full"
            src={user?.image ?? ""}
            alt="Profile picture"
            width={62}
            height={62}
          />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-xl font-bold">{user?.name}</h1>
          <p className="text-gray-500">{user?.email}</p>
          <p className="text-gray-500">98979989898</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold">Appointments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center py-4 px-6 bg-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-gray-300"
                onClick={() => handleProductClick(product.id)} // Navigate to product page on click
              >
                <h3 className="text-base font-bold">{product.doctor}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {product.dateofAppointment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
