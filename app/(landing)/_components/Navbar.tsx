import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#00416a] to-[#003255] w-screen py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
       
        <p className="text-[#b1c0ca] text-2xl font-bold">
          <Link href="/">Hopeful Heals</Link>
        </p>

        
        <p className="hidden md:block font-semibold text-lg text-[#b1c0ca]">
          Fighting One Step At a Time.
        </p>

        {/* Menu and Actions */}
        <div className="flex items-center space-x-8">
          {/* About Cancer Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white font-medium hover:underline">
              About Cancer
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-md">
              <DropdownMenuLabel className="text-gray-700">
                Explore About Cancer
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/AboutCancer/Understanding">
                <DropdownMenuItem className="hover:bg-gray-100">
                  Understanding Cancer
                </DropdownMenuItem>
              </Link>
              <Link href="/AboutCancer/Diag">
                <DropdownMenuItem className="hover:bg-gray-100">
                  Diagnosis & Staging
                </DropdownMenuItem>
              </Link>
              <Link href="/AboutCancer/Advanced">
                <DropdownMenuItem className="hover:bg-gray-100">
                  Advanced Cancer
                </DropdownMenuItem>
              </Link>
              <Link href="/AboutCancer/Causes">
                <DropdownMenuItem className="hover:bg-gray-100">
                  Causes & Prevention
                </DropdownMenuItem>
              </Link>
              <Link href="/AboutCancer/Managing">
                <DropdownMenuItem className="hover:bg-gray-100">
                  Managing Cancer Care
                </DropdownMenuItem>
              </Link>
              <Link href="/AboutCancer/Coping">
                <DropdownMenuItem className="hover:bg-gray-100">
                  Coping
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cancer Types Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white font-medium hover:underline">
              Cancer Types
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-md">
              <DropdownMenuLabel className="text-gray-700">
                Common Cancer Types
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-gray-100">
                Bladder Cancer
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100">
                Skin Cancer
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100">
                Pancreatic Cancer
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100">
                Kidney (Renal Cell) Cancer
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100">
                Breast Cancer
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100">
                Lymphoma
              </DropdownMenuItem>
              <Link href="/CancerTypes/Lung">
                <DropdownMenuItem className="hover:bg-gray-100">
                  Lung Cancer
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="hover:bg-gray-100">
                Brain Tumor
              </DropdownMenuItem>
              <Link href="/CancerTypes">
                <DropdownMenuItem className="hover:bg-gray-100">
                  All Types
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/appointment"
            className="text-white font-medium hover:underline"
          >
            Book Appointment
          </Link>
          <Link
            href="/doctor"
            className="text-white font-medium hover:underline"
          >
            Medicines
          </Link>
          <button className="text-white font-medium hover:underline">
            About Us
          </button>

          {/* Donate Button */}
          <button className="bg-[#ff6f61] hover:bg-[#ff4e45] text-white py-2 px-4 rounded-lg font-semibold">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
