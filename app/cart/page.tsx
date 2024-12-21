'use client';
import { useCart } from '../Context/CartContext';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { FiArrowRight } from 'react-icons/fi';

const CartPage = () => {
  const { cartItems, removeItem, updateQuantity } = useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  

  // Handle quantity change for a specific cart item
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(id, quantity); // Update the quantity of the item
    }
  };

  return (
    <div className="relative w-full bg-white min-h-screen">
       <div className="relative w-full h-[316px] flex items-center justify-center text-center text-4xl font-semibold text-black">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={1440}
          height={316}
          alt="Background"
          src="/images/rectangle-2.png"
        />
        <div className="relative">
          <Image
            className="mx-auto mb-4"
            width={77}
            height={77}
            alt="Logo"
            src="/images/Meubel House_Logos-05 (1).png"
          />
          <h1 className="text-5xl">Cart</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <FiArrowRight className="text-lg" />
            <span className="font-light">Cart</span>
          </div>
        </div>
      </div>

      {/* Main Cart Content */}
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-20 py-8 space-y-8 lg:space-y-0">
        {/* Cart Items */}
        <div className="w-full lg:w-3/4">
          {/* Table Headers */}
          <div className="grid grid-cols-5 gap-4 bg-[#f9f1e7] py-3 px-4 font-medium text-sm lg:text-base">
            <div>Product</div>
            <div>Price</div>
            <div>Size</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-xl space-y-4">
              <p>Your cart is empty.</p>
              <Link href="/">
                <Button label="Continue Shopping" />
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 gap-4 items-center py-4 px-4 border-b text-sm lg:text-base"
              >
                {/* Product Info */}
                <div className="flex items-center space-x-4">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name || 'Product'}
                      width={80}
                      height={80}
                      className="rounded-lg bg-[#f9f1e7] p-1"
                    />
                  ) : (
                    <div className="bg-gray-300 w-20 h-20 rounded-lg" /> // Placeholder for no image
                  )}
                  <span className="truncate">{item.name}</span>
                </div>

                {/* Price */}
                <div>Rs. {item.price.toLocaleString()}</div>

                {/* Size */}
                <div>{item.size || "N/A"}</div>

                {/* Quantity */}
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    className="w-16 border rounded-md text-center sm:w-20"
                  />
                  <FaTrash
                    size={20}
                    className="text-yellow-600 cursor-pointer hover:text-yellow-700"
                    onClick={() => removeItem(item.id)}
                  />
                </div>

                {/* Subtotal */}
                <div>Rs. {(item.price * item.quantity).toLocaleString()}</div>
              </div>
            ))
          )}
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/4 bg-[#f9f1e7] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal:</span>
            <span>Rs: {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total:</span>
            <span>Rs: {subtotal.toLocaleString()}</span>
          </div>
          <Link href={cartItems.length > 0 ? '/checkout' : '#'}>
            <Button
              label="Proceed to Checkout"
              disabled={cartItems.length === 0}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
