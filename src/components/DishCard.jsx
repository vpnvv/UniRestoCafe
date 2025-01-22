import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//lazy loading can be especially helpful for users on mobile devices or with slow connections.
//improved user experience

const DishCard = ({ dish }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart[dish.dish_id] || 0);

  const handleAdd = () => dispatch(addToCart({ dishId: dish.dish_id }));
  const handleRemove = () => dispatch(removeFromCart({ dishId: dish.dish_id }));

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div
        style={{ maxWidth: '200px' }}
        className="sm:max-w-none"
      >
        <h2 className="text-lg font-semibold">{dish?.dish_name}</h2>
        <p className="text-sm text-black-500">{dish?.dish_currency}{" "}{dish?.dish_price}</p>
        <p
          className="text-sm text-gray-500 "

        >
          {dish?.dish_description}
        </p>
        {
          dish?.dish_Availability ?
            <div className="flex items-center space-x-2">
              <button
                onClick={handleRemove}
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                -
              </button>
              <span className="bg-green-500 text-white px-2 py-1 rounded">{count}</span>
              <button
                onClick={handleAdd}
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                +
              </button>
            </div>
            :
            <div className="flex items-center space-x-2">
              <p className="text-xs text-red-500">Not Available</p>
            </div>
        }
      </div>
      <div className="flex items-center ml-auto">
        <p className="mr-2 text-sm ">{dish?.dish_calories} Calories</p>
        <LazyLoadImage
          alt={`${dish?.dish_name}_image`}
          src={dish?.dish_image}
          effect="opacity"
          className='w-16 h-16 object-cover rounded'
        />
      </div>
    </div>


  );
};

export default DishCard;
