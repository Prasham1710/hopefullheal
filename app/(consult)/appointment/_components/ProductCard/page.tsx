"use client";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { CiClock1 } from "react-icons/ci";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
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
  const { data: session } = useSession();
  const user = session?.user;
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("12:00");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await datageter();
        setProducts(fetchedProducts as Product[]);
      } catch (error) {
        toast.error("Error fetching doctors. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const bookAppointment = async (name: string, date: string, time: string) => {
    try {
      const updatedProducts = await appointmentupdater(
        name,
        user?.name as string,
        date,
        time
      );
      if (updatedProducts.status === 200) {
        toast.success(
          updatedProducts.text || "Appointment booked successfully!"
        );
      } else if (updatedProducts.status === 400) {
        toast.error(updatedProducts.text || "Failed to book appointment.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex justify-center pt-12 mb-12">
        <h1 className="text-2xl font-bold">Doctors to Book</h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <p className="text-lg font-medium">Loading doctors...</p>
        </div>
      ) : (
        <div className="flex justify-evenly gap-6 flex-wrap w-full px-6">
          {products.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <p className="text-lg font-medium">
                No doctors available at the moment.
              </p>
            </div>
          ) : (
            products.map((product) => (
              <Card
                key={product.id}
                className={cn(
                  "w-full sm:w-[44%] md:w-1/3 lg:w-1/4 shadow-lg p-6 mb-6 bg-white rounded-3xl",
                  product.appointmentStatus
                    ? "border-green-400 border-2"
                    : "border-gray-200 border"
                )}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        {product.specialization}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Experience: {product.experience}</p>
                  <p>Fees per Consultation: ${product.feesPerConsultation}</p>
                  <p>Contact Number: {product.phoneNum}</p>
                </CardContent>
                <CardContent>
                  <p className="font-bold mt-4">Additional Details:</p>
                  <p
                    className={`mt-2 ${
                      product.appointmentStatus
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    Appointment Status:{" "}
                    {product.appointmentStatus ? "Booked" : "Available"}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-blue-500 text-white hover:bg-blue-600"
                        variant="outline"
                      >
                        Book Appointment
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex justify-center mb-4">
                          Book the Appointment
                        </DialogTitle>
                        <DialogDescription className="flex justify-center">
                          Select the date and time for your appointment
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-2">
                        <div className="flex flex-col items-center">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
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
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(value: Date | undefined) =>
                                  setDate(value)
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="flex flex-col items-center">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !time && "text-muted-foreground"
                                )}
                              >
                                <CiClock1 className="mr-2 h-4 w-4" />
                                {time ? time : <span>Pick a time</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                              asChild
                            >
                              <input
                                type="time"
                                className="form-input w-full"
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
                            onClick={() =>
                              bookAppointment(
                                product.name,
                                date ? date.toISOString() : "",
                                time
                              )
                            }
                            className="bg-green-500 text-white hover:bg-green-600"
                          >
                            Save Changes
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      )}
      <Toaster />
    </>
  );
};

export default ProductCard;
