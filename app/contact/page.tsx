import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div>
    <div className="w-full h-[316px] relative py-8">
        <Image
          className="object-cover"
          layout="fill"
          alt="Background"
          src="/images/rectangle-1.png" // Ensure the correct public folder path
        />
      </div>
 <div className="relative py-10 px-6 md:px-12 bg-gray-50">
 {/* Container for the background and content */}
 <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
   <div className="text-center mb-8">
     <div className="text-3xl font-semibold text-gray-800">Get In Touch With Us</div>
     <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
       For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
       Our Staff Always Be There To Help You Out. Do Not Hesitate!
     </p>
   </div>

   {/* Contact Details Section */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
     {/* Address */}
     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
       <FaMapMarkerAlt className="w-8 h-8 mb-4 text-yellow-500" />
       <div className="font-semibold text-lg text-gray-800">Address</div>
       <p className="text-sm text-gray-600 mt-2 text-center">236 5th SE Avenue, New York NY10000, United States</p>
     </div>

     {/* Working Time */}
     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
       <FaRegClock className="w-8 h-8 mb-4 text-yellow-500" />
       <div className="font-semibold text-lg text-gray-800">Working Time</div>
       <div className="text-sm text-gray-600 mt-2 text-center">
         <p>Monday-Friday: 9:00 - 22:00</p>
         <p>Saturday-Sunday: 9:00 - 21:00</p>
       </div>
     </div>

     {/* Phone */}
     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
       <FaPhoneAlt className="w-8 h-8 mb-4 text-yellow-500" />
       <div className="font-semibold text-lg text-gray-800">Phone</div>
       <div className="text-sm text-gray-600 mt-2 text-center">
         <p>Mobile: +(84) 546-6789</p>
         <p>Hotline: +(84) 456-6789</p>
       </div>
     </div>
   </div>

   {/* Contact Form Section */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-gray-100 p-6 rounded-lg shadow-md">
       <div className="text-center mb-8">
         <div className="text-2xl font-semibold text-gray-800">Contact Us</div>
         <p className="text-sm text-gray-600 mt-2">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
       </div>

       <div className="space-y-4">
         {/* Your Name */}
         <div>
           <label className="block text-sm font-semibold text-gray-800">Your Name</label>
           <input
             type="text"
             placeholder="Enter your name"
             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
           />
         </div>

         {/* Email Address */}
         <div>
           <label className="block text-sm font-semibold text-gray-800">Email Address</label>
           <input
             type="email"
             placeholder="Abc@def.com"
             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
           />
         </div>

         {/* Subject */}
         <div>
           <label className="block text-sm font-semibold text-gray-800">Subject</label>
           <input
             type="text"
             placeholder="This is an optional"
             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
           />
         </div>

         {/* Message */}
         <div>
           <label className="block text-sm font-semibold text-gray-800">Message</label>
           <textarea
             placeholder="Hi! I’d like to ask about..."
             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
           ></textarea>
         </div>

         {/* Submit Button */}
         <div className="mt-6 text-center">
           <button className="bg-yellow-500 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-yellow-600 transition">
             Submit
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
  )
}

export default Contact