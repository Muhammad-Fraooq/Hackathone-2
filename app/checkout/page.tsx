"use client";
import Button from "@/components/Button";
import Frame from "@/components/Frame";
import type { NextPage } from "next";
import { useState } from "react";

const CheckoutPage: NextPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [provinces, setProvinces] = useState<string[]>([]); // Specify the type here

  const countries = [
    {
      name: "Sri Lanka",
      provinces: [
        "Western Province",
        "Central Province",
        "Southern Province",
        "North Western Province",
        "North Central Province",
        "Eastern Province",
        "Northern Province",
      ],
    },
    {
      name: "United States",
      provinces: ["California", "Texas", "Florida", "New York", "Illinois"],
    },
    {
      name: "Canada",
      provinces: [
        "Ontario",
        "Quebec",
        "British Columbia",
        "Alberta",
        "Nova Scotia",
      ],
    },
    {
      name: "India",
      provinces: [
        "Maharashtra",
        "Tamil Nadu",
        "Karnataka",
        "Uttar Pradesh",
        "West Bengal",
      ],
    },
    {
      name: "United Kingdom",
      provinces: ["England", "Scotland", "Wales", "Northern Ireland"],
    },
    {
      name: "Pakistan",
      provinces: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],
    },
  ];

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const selectedCountryData = countries.find((c) => c.name === country);

    // Ensure that selectedCountryData is not undefined before setting provinces
    if (selectedCountryData) {
      setProvinces(selectedCountryData.provinces);
    } else {
      setProvinces([]); // If no country is selected or found, reset provinces to empty array
    }
  };
  return (
    <div className="w-full h-auto bg-white font-poppins pt-20">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-8">
        {/* Billing Details Section */}
        <div className="w-full md:w-1/2 p-5 bg-white">
          <h2 className="text-2xl font-semibold mb-8">Billing details</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Street Address</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Town / City</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2">
                  Country / Region
                </label>
                <select
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium mb-2">Province</label>
                <select className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Province</option>
                  {provinces.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">ZIP Code</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Phone</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">
                Additional Information
              </label>
              <textarea
                className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/2 p-6 pt-4">
          <div className="space-y-4">
            <div className="flex justify-between pb-4">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between">
              <span>Asgaard sofa</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between pt-4">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-xl text-yellow-600 font-semibold">
                Rs. 250,000.00
              </span>
            </div>
          </div>
          <hr className="mt-7" />
          <div className="mt-8 space-y-4 ">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  className="rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <span>Direct Bank Transfer</span>
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  className="rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <Button label="Place Order"/>
        </div>
      </div>
      <Frame/>
    </div>
  );
};

export default CheckoutPage;
