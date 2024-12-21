import type { NextPage } from "next";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: NextPage = () => {
  return (
    <footer className=" text-gray-100 py-10 border-t border-gray-500">
      {/* Main Footer Content */}
      <div className="container mx-auto -ml-3 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {/* Branding and Address Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-500">Funiro</h2>
          <p className="text-sm text-gray-400">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              className="text-gray-500 hover:text-yellow-500 transition duration-300"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-yellow-500 transition duration-300"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-yellow-500 transition duration-300"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-yellow-500 transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-yellow-500  text-gray-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-500  text-gray-500 transition duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-500  text-gray-500 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-500 text-gray-500 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-yellow-500 text-gray-500 transition duration-300">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-500 text-gray-500 transition duration-300">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-500 text-gray-500 transition duration-300">
                Privacy Policies
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-500 text-gray-500 transition duration-300">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates, exclusive deals, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-gray-900 border border-gray-600 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-yellow-500 px-4 py-2 text-white rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-yellow-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Funiro. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
