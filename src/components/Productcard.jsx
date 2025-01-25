import React from 'react';
import { Link } from 'react-router-dom';

function Productcard({ _id, title, image, price, category, status }) {
  return (
    <Link
      to={`/products/${_id}`}
      className="block group"
    >
      <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Product Image */}
        <div className="w-full h-60 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-md text-gray-600 mt-2">Category: {category}</p>
          <p className="text-md text-gray-600 mt-1">
            Status: <span className={status === 'available' ? 'text-green-600' : 'text-red-600'}>{status}</span>
          </p>
          <p className="text-xl font-semibold text-gray-800 mt-2">Rs.{price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Productcard;
