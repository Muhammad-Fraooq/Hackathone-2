import type { NextPage } from "next";
import Image from "next/image";
import { FaFilter, FaList, FaThLarge } from "react-icons/fa"; // Import the required icons
import ProductCard from "@/components/ProductCard";
import Frame from "@/components/Frame";

enum BadgeType {
  DISCOUNT = "discount",
  NEW = "new",
}
  const products = [
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
      id: 2, // Changed to a unique id
      image: "/product3.jpg",
      name: "Lolito",
      description: "Luxury big sofa",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    {
      id: 3,
      image: "/product4.jpg",
      name: "Respira",
      description: "Outdoor bar table and stool",
      currentPrice: "500.000",
      badge: { type: BadgeType.NEW, label: "New" },
    },
    {
      id: 4,
      image: "/product7.png",
      name: "Pingky",
      description: "Cute bed set",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    // Ensure all subsequent products have unique ids as well
    {
      id: 5,
      image: "/product1.jpg",
      name: "Syltherine",
      description: "Stylish cafe chair",
      currentPrice: "2.500.000",
      originalPrice: "3.500.000",
      badge: { type: BadgeType.DISCOUNT, label: "-30%" },
    },
    {
      id: 6,
      image: "/product3.jpg",
      name: "Lolito",
      description: "Luxury big sofa",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    {
      id: 7,
      image: "/product4.jpg",
      name: "Respira",
      description: "Outdoor bar table and stool",
      currentPrice: "500.000",
      badge: { type: BadgeType.NEW, label: "New" },
    },
    {
      id: 8,
      image: "/product7.png",
      name: "Pingky",
      description: "Cute bed set",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    {
      id: 9,
      image: "/product1.jpg",
      name: "Syltherine",
      description: "Stylish cafe chair",
      currentPrice: "2.500.000",
      originalPrice: "3.500.000",
      badge: { type: BadgeType.DISCOUNT, label: "-30%" },
    },
    {
      id: 10, // Changed to a unique id
      image: "/product3.jpg",
      name: "Lolito",
      description: "Luxury big sofa",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    {
      id: 11,
      image: "/product4.jpg",
      name: "Respira",
      description: "Outdoor bar table and stool",
      currentPrice: "500.000",
      badge: { type: BadgeType.NEW, label: "New" },
    },
    {
      id: 12,
      image: "/product7.png",
      name: "Pingky",
      description: "Cute bed set",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    // Ensure all subsequent products have unique ids as well
    {
      id: 13,
      image: "/product1.jpg",
      name: "Syltherine",
      description: "Stylish cafe chair",
      currentPrice: "2.500.000",
      originalPrice: "3.500.000",
      badge: { type: BadgeType.DISCOUNT, label: "-30%" },
    },
    {
      id: 14,
      image: "/product3.jpg",
      name: "Lolito",
      description: "Luxury big sofa",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    {
      id: 15,
      image: "/product4.jpg",
      name: "Respira",
      description: "Outdoor bar table and stool",
      currentPrice: "500.000",
      badge: { type: BadgeType.NEW, label: "New" },
    },
    {
      id: 16,
      image: "/product7.png",
      name: "Pingky",
      description: "Cute bed set",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    {
      id: 17,
      image: "/product1.jpg",
      name: "Syltherine",
      description: "Stylish cafe chair",
      currentPrice: "2.500.000",
      originalPrice: "3.500.000",
      badge: { type: BadgeType.DISCOUNT, label: "-30%" },
    },
    {
      id: 18,
      image: "/product3.jpg",
      name: "Lolito",
      description: "Luxury big sofa",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    {
      id: 19,
      image: "/product4.jpg",
      name: "Respira",
      description: "Outdoor bar table and stool",
      currentPrice: "500.000",
      badge: { type: BadgeType.NEW, label: "New" },
    },
    {
      id: 20,
      image: "/product7.png",
      name: "Pingky",
      description: "Cute bed set",
      currentPrice: "7.000.000",
      originalPrice: "14.000.000",
      badge: { type: BadgeType.DISCOUNT, label: "-50%" },
    },
    // Repeat this pattern for the other products, ensuring unique IDs
  ];
  

const Group: NextPage = () => {
  return (
    <div className="relative w-full py-8 ">
      {/* Background Image */}
      <div className="w-full h-[316px] relative">
        <Image
          className="object-cover"
          layout="fill"
          alt="Background"
          src="/images/rectangle-1.png" // Ensure the correct public folder path
        />
      </div>

      <div className="w-full bg-[#e7cb8c] p-4 md:p-6">
        {/* Filter and View Options */}
        <div className="flex flex-wrap items-center justify-between mb-4">
          {/* Filter Section */}
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base font-medium">Filter</span>
            <FaFilter className="w-6 h-6 text-gray-600" />
          </div>

          {/* View Options */}
          <div className="flex items-center space-x-3">
            <FaList className="w-6 h-6 cursor-pointer text-gray-600" />
            <FaThLarge className="w-7 h-7 cursor-pointer text-gray-600" />
          </div>
        </div>

        {/* Results Info */}
        <div className="flex flex-wrap items-center justify-between border-b border-gray-300 pb-2 mb-4">
          <div className="text-sm md:text-base text-gray-600">
            Showing <strong>1–16</strong> of <strong>32</strong> results
          </div>
        </div>

        {/* Combined Show and Sort By Options in One Row */}
        <div className="flex justify-between items-center space-x-6">
          {/* Show Options */}
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base text-gray-600">Show</span>
            <div className="relative w-14 h-8 border rounded-md flex items-center justify-center bg-white">
              <span className="text-sm font-medium">16</span>
            </div>
          </div>

          {/* Sort By Options */}
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base text-gray-600">Sort by</span>
            <div className="relative w-28 h-8 border rounded-md flex items-center justify-center bg-white">
              <span className="text-sm font-medium">Default</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
      <div className="flex justify-center items-center space-x-2 md:space-x-4">
        {/* First Block (Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-500 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-600 transition">
            1
          </div>
        </div>

        {/* Second Block (Light Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            2
          </div>
        </div>

        {/* Third Block (Light Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            3
          </div>
        </div>

        {/* Next Button (Same Yellow for Consistency) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            Next
          </div>
        </div>
      </div>
      <Frame/>
    </div>
  );
};

export default Group;
