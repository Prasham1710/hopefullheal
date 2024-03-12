"use client";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { datageter, appointmentupdater } from "./action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  specialization: string;
  experience: string;
  feesPerConsultation: number;
  phoneNum: string;
  appointmentStatus: boolean;
  timeofAppointment: string;
  dateofAppointment: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductCard = () => {
  const {data:session} = useSession();
  const user = session?.user;
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>("12:00");
  const [picture, setPicture] = useState<string>("" as string);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await datageter();
        setProducts(products as Product[]);
        // Handle the products in your frontend as needed
      } catch (error) {
        console.error("Error fetching all products:", error);
        // Handle error scenarios in your frontend
      }
    };

    // Fetch data on component mount
    fetchData();
  }, []);

  const bookAppointment = async (name: string, date: string, time: string) => {
    const updatedProducts = await appointmentupdater(
      name,
      user?.name as string,
      date,
      time
    );

    if (updatedProducts.status === 200) {
      if (updatedProducts.text) {
        toast.success(updatedProducts.text);
      }
    } else if (updatedProducts.status === 400) {
      if (updatedProducts.text) {
        toast.error(updatedProducts.text);
      }
    }

    console.log("Appointment booked successfully", updatedProducts);
  };

  return (
    <>
      <div className="flex justify-center pt-12 mb-12 ">Doctors to book</div>
      <div className="flex justify-evenly gap-12 flex-wrap w-[100%] pr-6 pl-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-full sm:w-[44%] md:w-1/3 lg:w-1/4 shadow-lg p-6 mb-6 bg-white rounded-3xl sm:p-6 lg:p-8"
          >
            <CardHeader>
              <Image
                src={product.imageUrl}
                alt={product.id}
                width={50}
                height={50}
                className="flex ml-16"
              />
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Specialization: {product.specialization}</p>
            </CardContent>
            <CardContent>
              <p>Specialization: {product.experience}</p>
            </CardContent>
            <CardContent>
              <p>Fees per Consulating: ${product.feesPerConsultation}</p>
            </CardContent>
            <CardContent>
              <p>Contact Num: {product.phoneNum}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-400" variant="outline">
                    Book appointment
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="flex justify-center mb-4">
                      Book the appointment
                    </DialogTitle>
                    <DialogDescription className="flex justify-center">
                      Select the date and time when you want to book an
                      appointment
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-2 justify-center items-center">
                    <div className="grid grid-cols-4 gap-4 ">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "P")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(value: Date | undefined) =>
                              setDate(value || new Date())
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] justify-start text-left font-normal",
                              !time && "text-muted-foreground"
                            )}
                          >
                            <CiClock1 className="mr-2 h-4 w-4" />
                            {time ? time.toString() : <span>Pick a time</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                          asChild
                        >
                          <input
                            type="time"
                            name="time"
                            className="form-input"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                          />



                        </PopoverContent>
                       
                      </Popover>
                    </div>
                    
      
                  </div>
                  
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        type="submit"
                        onClick={() =>
                          bookAppointment(
                            product.name,
                            date.toISOString(),
                            time
                          )
                        }
                      >
                        Save changes
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
            </CardFooter>
          </Card>
        ))}
      </div>
      <Toaster />
    </>
  );
};

export default ProductCard;
