"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaPinterest, FaChevronRight } from "react-icons/fa";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";

enum BadgeType {
  DISCOUNT = "discount",
  NEW = "new",
}

const ProductPage = () => {
  const items = [
    {
      id: 1,
      image: "/product1.jpg",
      name: "Syltherine",
      description: "Stylish cafe chair",
      currentPrice: "2.500.000",
      originalPrice: "3.500.000",
      badge: { type: BadgeType.DISCOUNT, label: "-30%" },
    },
    {
      id: 2,
      image: "/product2.jpg",
      name: "Leviosa",
      description: "Luxury sofa",
      currentPrice: "2.500.000",
      badge: { type: BadgeType.NEW, label: "New" },
    },
    {
      id: 3,
      image: "/product3.jpg",
      name: "Lolito",
      description: "Luxury big sofa",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    {
      id: 4,
      image: "/product4.jpg",
      name: "Respira",
      description: "Outdoor bar table and stool",
      currentPrice: "500.000",
      badge: { type: BadgeType.NEW, label: "New" },
    },
  ];
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-primary min-h-screen p-4 sm:p-8 pt-20 sm:pt-28">
      {/* Breadcrumb */}
      <div className="text-xs sm:text-sm text-grayDark mb-6 flex items-center">
        <Link href="/" className="text-grayDark hover:text-[#9F9F9F]">
          Home
        </Link>
        <FaChevronRight className="mx-2 text-grayDark" />
        <Link href="/shop" className="text-grayDark hover:text-[#9F9F9F]">
          Shop
        </Link>
        <FaChevronRight className="mx-2 text-grayDark" />
        <span className="text-[#9F9F9F]">Asgaard Sofa</span>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-product p-4 sm:p-6">
        {/* Left: Product Images */}
        <div>
          <div className="aspect-square bg-grayLight border rounded-lg flex items-center justify-center">
            <Image
              src="/productdetails/imag.png"
              alt="Asgaard Sofa"
              className="w-full bg-[#F9F1E7] h-full object-contain"
              width={400}
              height={400}
            />
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {[
              "/productdetails/Group94.png",
              "/productdetails/Group96.png",
              "/productdetails/Group97.png",
              "/productdetails/Group98.png",
            ].map((src, idx) => (
              <div
                key={idx}
                className="w-20 h-20 border rounded-md flex items-center justify-center cursor-pointer hover:text-[#9F9F9F]"
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  width={80}
                  height={80}
                  className="w-full bg-[#F9F1E7] h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">Asgaard Sofa</h1>
          <div className="flex items-center mt-2">
            <span className="text-accent text-lg">★★★★★</span>
            <p className="ml-2 text-xs sm:text-base text-[#9F9F9F]">
              (1 Customer Review)
            </p>
          </div>
          <div className="text-lg sm:text-3xl font-bold text-[#9F9F9F] mt-4">
            Rs. 250,000.00
          </div>
          <p className="mt-4 text-sm sm:text-base text-grayDark">
            This sofa is compact, ultra-comfortable, and upholstered with
            well-appointed cushions. It boasts a clear mid-range tone with
            extended highs for a fresh look.
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <p className="text-base font-medium text-[#9F9F9F]">Color:</p>
            <div className="flex space-x-4 mt-2">
              {["bg-accent", "bg-black", "bg-blue-500"].map((color, idx) => (
                <div
                  key={idx}
                  className={`w-8 h-8 ${color} rounded-full border cursor-pointer hover:ring-2 hover:ring-offset-1`}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="mt-4">
            <p className="text-base font-medium text-[#9F9F9F]">Size:</p>
            <select className="mt-2 border rounded-md p-2 text-sm text-grayDark">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          {/* Quantity and Actions */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button className="px-4 py-2 bg-grayLight hover:bg-gray-300">
                -
              </button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center border-none focus:ring-0"
              />
              <button className="px-4 py-2 bg-grayLight hover:bg-gray-300">
                +
              </button>
            </div>
            <button className="flex items-center px-6 py-2 border-2 rounded-md hover:bg-gray-300">
              <FiShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <button className="flex items-center px-6 py-2 bg-grayLight border-2 rounded-md hover:bg-gray-300">
              <FiHeart className="mr-2" />
              Compare
            </button>
          </div>

          {/* Share Options */}
          <div className="flex items-center space-x-4 mt-6">
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition"
            >
              <FaFacebookF size={20} />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition"
            >
              <FaTwitter size={20} />
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition"
            >
              <FaPinterest size={20} />
              <span>Pinterest</span>
            </a>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-medium text-gray-800">SKU:</span> #5001
            </p>
            <p>
              <span className="font-medium text-gray-800">Category:</span>{" "}
              Furniture
            </p>
            <p>
              <span className="font-medium text-gray-800">Tags:</span> Sofa,
              Home, Living Room
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8 bg-white rounded-lg shadow-product p-4 sm:p-6">
        <div className="flex space-x-4 border-b pb-2">
          <button
            onClick={() => setActiveTab("description")}
            className={`text-sm font-medium ${
              activeTab === "description"
                ? "text-[#9F9F9F] border-b-2 border-[#9F9F9F]"
                : "text-grayDark hover:text-[#9F9F9F]"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("additionalInfo")}
            className={`text-sm font-medium ${
              activeTab === "additionalInfo"
                ? "text-[#9F9F9F] border-b-2 border-[#9F9F9F]"
                : "text-grayDark hover:text-[#9F9F9F]"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`text-sm font-medium ${
              activeTab === "reviews"
                ? "text-[#9F9F9F] border-b-2 border-[#9F9F9F]"
                : "text-grayDark hover:text-[#9F9F9F]"
            }`}
          >
            Reviews [5]
          </button>
        </div>
        <div className="mt-4 text-center">
          {activeTab === "description" && (
            <p className="text-sm text-grayDark leading-relaxed">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
              <br />
              <br />
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            
            </p>
          )}
          {activeTab === "additionalInfo" && (
            <ul className="list-disc list-inside space-y-2 text-sm text-grayDark leading-relaxed">
              <li>Dimensions: 55 x 30 x 25 cm</li>
              <li>Weight: 7 lbs</li>
              <li>Material: Premium wood and metal finishes</li>
              <li>Connectivity: Bluetooth 5.0 and AUX</li>
              <li>Battery Life: Up to 8 hours</li>
            </ul>
          )}
          {activeTab === "reviews" && (
            <div className="space-y-4 text-sm text-grayDark leading-relaxed">
              <div>
                <p className="font-medium text-[#9F9F9F]">John Doe</p>
                <p>★★★★★</p>
                <p>
                  Amazing product! The sound quality is top-notch...
                </p>
              </div>
              <div>
                <p className="font-medium text-[#9F9F9F]">Jane Smith</p>
                <p>★★★★☆</p>
                <p>
                  Great product, but the battery life could be better...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Images Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/productdetails/buttom1.png"
            alt="Left Sofa"
            className="object-cover rounded-lg shadow-lg"
            width={740}
            height={360}
          />
          <Image
            src="/productdetails/buttom2.png"
            alt="Right Sofa"
            className="object-cover rounded-lg shadow-lg"
            width={740}
            height={360}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-lg sm:text-2xl font-bold text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              badge={product.badge}
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <Button label="Show More" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
