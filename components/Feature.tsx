import type { NextPage } from 'next';
import Image from 'next/image';

const Inspirations: NextPage = () => {
  return (
    <div className="relative bg-gray-50 py-16 px-8 md:px-16">
      {/* Title Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 mt-4">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
      </div>

      {/* Products Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Product Card 1 */}
        <div className="relative w-[404px] h-[582px] bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/Rectangle 24.png"
            alt="Bed Room"
            width={404}
            height={582}
            className="object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 via-transparent">
            <div className="flex items-center gap-2 mb-4 text-white">
              <span className="text-sm font-medium">01</span>
              <div className="w-8 h-[1px] bg-white"></div>
              <span className="text-sm font-medium">Bed Room</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Inner Peace</h3>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="w-[372px] h-[486px] bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/Rectangle 25.png"
            alt="Product 2"
            width={372}
            height={486}
            className="object-cover"
          />
        </div>

        {/* Product Card 3 */}
        <div className="w-[372px] h-[486px] bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/Rectangle 26.png"
            alt="Product 3"
            width={372}
            height={486}
            className="object-cover"
          />
        </div>
      </div>

      {/* Indicator Section */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Image src="/Active.svg" alt="Active" width={27} height={27} />
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
      </div>

      {/* Call-To-Action Section */}
      <div className="flex justify-center mt-12">
        <a
          href="#"
          className="px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Inspirations;
