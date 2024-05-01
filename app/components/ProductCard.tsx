'use client'
import React from 'react';

export const ProductCard = ({ product, onAddToCart, onToggleFavorite }) => {
  const { title, imageUrl, isFavorite } = product;

  return (
    <div className="max-w-sm mx-auto bg-white border-2 border-gray-400 p-4 shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
        <button
          className={`text-xl ${isFavorite ? 'text-red-600' : 'text-gray-400'}`}
          onClick={onToggleFavorite}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};
