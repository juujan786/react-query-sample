import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const handleAddClick = (e) => {
    e.stopPropagation(); // Prevents navigation
    // Add functionality for the Add button here (e.g., adding to cart)
    console.log(`Added ${product.title} to cart`);
  };

  return (
    <div className='max-w-[240px] rounded-md border-2 border-gray-500 p-2'>
      <Link to={`/products/${product.id}`} className='w-full rounded-md block'>
        <img src={product?.images[0]} alt={`${product?.title}'s image`} />
        <h2>{product?.title}</h2>
      </Link>
      <div className='flex justify-between items-center mt-3'>
        <span>${product?.price}</span>
        <button
          className='bg-black text-white rounded-md px-6 py-1'
          onClick={handleAddClick} // Prevents navigation on click
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
