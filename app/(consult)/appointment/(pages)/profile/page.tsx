"use client";
import { useSession } from "next-auth/react";
import Image from 'next/image'
import { datageter } from "./action";
import React, { useEffect } from 'react'
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
  const {data:session} = useSession();
  const user = session?.user;
  const name= user?.name;
  const [products, setProducts] = React.useState<Product[]>([]);

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
  
  
  return (
    <div className="h-screen " style={{ backgroundImage: "url('/bg6.png')" }}>
  <div className="flex flex-col md:flex-row ">
    <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-8 md:py-12">
      <Image  className="rounded-full" src={user?.image ?? ''} alt="Profile picture"
      width={62}
      height={62} />
    </div>
    <div className="w-full md:w-1/2 px-6 py-8 md:py-12">
      <div className="text-center md:text-left space-y-2">
        
        <h1 className="text-xl font-bold"> {user?.name}</h1>
        <p className="text-gray-500">Web Designer</p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l8 8 8-8z" />
          </svg>
          <p className="text-gray-500">{user?.email}</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11a6 6 0 0 0 12 0v4a6 6 0 0 1-12 0v-4z" />
          </svg>
          <p className="text-gray-500">98979989898</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold">Appointments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {products.map((product) => (
          
          <div key={product.id} className="flex flex-col items-center justify-center py-4 px-6 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg">
            <h3 className="text-base font-bold">{product.doctor}</h3>
            <p className="text-gray-500 text-sm mt-1">{product.dateofAppointment}</p>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default page