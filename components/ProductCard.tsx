"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiHeart, FiShare2, FiBarChart2 } from "react-icons/fi";
import Link from "next/link";
type BadgeType = "discount" | "new";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  currentPrice: string;
  originalPrice?: string;
  badge?: { type: BadgeType; label: string };
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  currentPrice,
  originalPrice,
  badge,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt={name}
        width={150}
        height={200}
        className="w-full h-64 object-cover"
      />
      {badge && (
        <span
          className={`absolute top-3 right-3 text-white text-sm font-bold px-3 py-1 rounded ${
            badge.type === "discount" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {badge.label}
        </span>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="mt-2">
          <span className="text-lg font-bold text-gray-900">
            Rp {currentPrice}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              Rp {originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Hover actions */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center space-y-4 transition-opacity">
          <Link href='/productdetails'>
            <button className="px-6 py-2 bg-white text-yellow-500 text-yellow font-medium transition">
              Add to Cart
            </button>
          </Link>
          <div className="flex space-x-4 text-white">
            <button className="hover:text-gray-200 flex gap-1 transition">
              <FiShare2 size={20} />
              Share
            </button>
            <button className="hover:text-gray-200 flex gap-1 transition">
              <FiBarChart2 size={20} /> Compare
            </button>
            <button className="hover:text-gray-200 flex gap-1 transition">
              <FiHeart size={20} /> Like
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

// enum BadgeType {
//   DISCOUNT = 'discount',
//   NEW = 'new',
// }
