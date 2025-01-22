import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';


const CartIcon = () => {
  const cart = useSelector((state) => state.cart);
  const totalItems = Object.values(cart).reduce((acc, count) => acc + count, 0);

  return (
    <div className="flex items-center space-x-4">
      {/* MY ORDERS Text */}
      <span className="hidden sm:block">My Orders</span>

      {/* Cart icon with badge */}
      <div className="relative">
        <FaShoppingCart className="text-gray-500 text-2xl" />

        <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>

      </div>
    </div>

  );
};

export default CartIcon;