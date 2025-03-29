import React from 'react';

function Logo({ className="text-blue-600 hover: cursor-pointer" }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-10 h-10 fill-blue-500"
      >
        {/* Tent Base */}
        <polygon points="50,10 90,80 10,80" fill="currentColor" />
        {/* Tent Opening */}
        <polygon points="50,20 65,75 35,75" fill="white" />
      </svg>
    </div>
  );
}

export default Logo;
