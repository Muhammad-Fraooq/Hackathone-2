import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="bg-white text-black border-t py-10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Address Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Funiro</h2>
          <p className="text-sm text-gray-500">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-gray-900 border rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-yellow-500 px-4 py-2 text-white rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center">
        <p className="text-sm text-gray-500">
          © 2023 Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
