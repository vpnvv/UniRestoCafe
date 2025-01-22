import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Using react-icons for the cart icon

const Header = () => {
  // Dummy cart count
  const cartCount = 8;

  return (
    <header className="bg-white-600 text-black p-4 flex justify-between items-center">
      {/* Left side: Logo */}
      <div className="text-2xl">
        <span>UNI Resto Cafe</span>
      </div>

      {/* Right side: MY ORDERS with cart icon */}
      <div className="flex items-center space-x-4">
        {/* MY ORDERS Text */}
        <span className="hidden sm:block">My Orders</span>

        {/* Cart icon with badge */}
        <div className="relative">
          <FaShoppingCart className="text-gray-500 text-2xl" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
