import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-screen py-32 px-6 flex flex-col items-center justify-center text-center"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl relative z-10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 bg-clip-text text-transparent">
              Welcome to Nepal Tent<br className="hidden md:block" />
              Sewing Enterprises
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-800 font-medium">
            Your trusted partner in high-quality tents, ensuring comfort and safety for every adventurer.
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(79, 70, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 text-lg hover:shadow-2xl"
            >
              Explore Our Tents
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Tent Showcase Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full py-16 md:py-24 px-6"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 bg-clip-text text-transparent"
        >
          Our Premium Tents
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { emoji: "⛺", name: "Family Tents", desc: "Spacious and comfortable for group camping" },
            { emoji: "🏔️", name: "Mountain Tents", desc: "Built for extreme weather conditions" },
            { emoji: "🌲", name: "Adventure Tents", desc: "Lightweight and easy to set up" }
          ].map((tent, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg transition-all duration-300 border border-indigo-100 hover:shadow-2xl hover:border-indigo-300"
            >
              <div className="text-6xl mb-4 text-center">{tent.emoji}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{tent.name}</h3>
              <p className="text-gray-700">{tent.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full py-24 md:py-32 flex flex-col items-center text-center px-6 relative bg-white/40 backdrop-blur-sm"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 bg-clip-text text-transparent"
        >
          Who We Are
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg md:text-xl leading-relaxed max-w-4xl mb-12 text-gray-800 font-medium"
        >
          At <span className="font-bold text-indigo-700">Nepal Tent Sewing Enterprises</span>, we specialize in providing high-quality tents designed for every adventurer. Our mission is to make your outdoor experiences unforgettable by ensuring you have reliable and innovative solutions tailored to your unique needs.
        </motion.p>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-12"
        >
          {[
            { title: "Quality Materials", desc: "Premium fabrics built to last", icon: "🏔️", color: "from-blue-400 to-cyan-300" },
            { title: "Expert Craftsmanship", desc: "Decades of sewing experience", icon: "✂️", color: "from-indigo-400 to-purple-300" },
            { title: "Adventure Ready", desc: "Tested in extreme conditions", icon: "⛺", color: "from-purple-400 to-pink-300" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg transition-all duration-300 border border-white/50 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full py-24 md:py-32 flex flex-col items-center text-center px-6"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 bg-clip-text text-transparent"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg md:text-xl leading-relaxed max-w-4xl mb-6 text-gray-800 font-medium"
        >
          We offer a wide range of tents designed to withstand diverse climates and terrains, ensuring that your adventures remain worry-free and enjoyable.
        </motion.p>
        <motion.p
          variants={fadeIn}
          className="text-lg md:text-xl leading-relaxed max-w-4xl mb-12 text-gray-800 font-medium"
        >
          From individual travelers to large groups, we cater to all your tent needs with precision and care.
        </motion.p>
        <Link to="/achivements">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(79, 70, 229, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 text-lg hover:shadow-2xl"
          >
            View Our Achievements
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
};

export default About;
