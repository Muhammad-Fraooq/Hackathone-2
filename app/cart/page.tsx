"use client";
import CartPage from "@/components/CartComponents";
import Frame from "@/components/Frame";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Carts = () => {
  return (
    <>
      <div className="relative w-screen h-[316px] flex overflow-x-hidden items-center justify-center text-center text-[48px] text-black font-poppins py-6 sm:pt-8">
        {/* Background Image */}
        <Image
          className="absolute top-0 left-0 w-screen object-cover h-[316px]"
          width={1440}
          height={316}
          alt=""
          src="/images/rectangle-2.png"
        />

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Logo and Title */}
          <div className="flex flex-col items-center">
            <Image
              className="w-[77px] h-[77px] object-cover"
              width={77}
              height={77}
              alt="Logo"
              src="/images/Meubel House_Logos-05 (1).png"
            />
            <div className="font-medium text-black">Cart</div>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-[16px]">
            <Link
              href="/"
              className="font-medium text-black hover:text-gray-600"
            >
              Home
            </Link>
            <FiArrowRight className="text-[20px] text-black" />
            <Link
              href="/cart"
              className="font-light text-black hover:text-gray-600"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Cart Page Section */}
      <CartPage />
      
      {/* Footer Frame */}
      <Frame />
    </>
  );
};

export default Carts;
