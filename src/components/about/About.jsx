import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold">[TentExplorer]</span>, your trusted partner in providing high-quality tents and camping solutions for tourists and adventurers. Our mission is to enhance your outdoor experiences by offering durable, reliable, and innovative tent solutions tailored to meet your unique needs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At <span className="font-semibold">[TentExplorer]</span>, we understand the importance of comfort and safety in the great outdoors. That’s why we offer a wide range of tents designed to withstand diverse climates and terrains, ensuring that your adventures remain worry-free and enjoyable.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our team is passionate about the outdoors and is dedicated to delivering exceptional products and services. From individual travelers to large groups, we cater to all your tent needs with precision and care, making your journey as seamless as possible.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for choosing <span className="font-semibold">[TentExplorer]</span> as your outdoor companion. We look forward to being a part of your unforgettable adventures and helping you make memories that last a lifetime.
        </p>
      </div>
    </div>
  );
};

export default About;
