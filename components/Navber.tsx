'use client'
import Image from "next/image";
import Logo from "@/public/Logo.jpg";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react"; // Import useState for toggling the mobile menu

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={Logo} width={185} height={41} alt="Brand Logo" className="cursor-pointer" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-10 text-gray-700">
          <Link href="/" className="hover:text-gray-900 text-base transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-900 text-base transition">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-gray-900 text-base transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-900 text-base transition">
            Contact
          </Link>
        </nav>

        {/* Icon Section */}
        <div className="flex space-x-6 text-gray-600">
          <MdPersonOutline className="text-2xl cursor-pointer hover:text-gray-800 transition" />
          <CiSearch className="text-2xl cursor-pointer hover:text-gray-800 transition" />
          <GoHeart className="text-2xl cursor-pointer hover:text-gray-800 transition" />
          <AiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-gray-800 transition" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white border-t shadow-md ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link href="/" className="block text-gray-700 hover:text-gray-900 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="block text-gray-700 hover:text-gray-900 transition">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block text-gray-700 hover:text-gray-900 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block text-gray-700 hover:text-gray-900 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
