import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Productcard } from '../components';
import services from '../services/product';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        services.getAllProducts()
            .then((response) => {
                setProducts(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Failed to load products. Please try again later.");
                setLoading(false);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600 text-lg">Loading products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 px-4">
                <div className="text-center">
                    <p className="text-red-600 text-xl mb-4">⚠️ {error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!Array.isArray(products) || products.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <p className="text-gray-600 text-2xl mb-4">📦 No products available yet</p>
                    <p className="text-gray-500">Check back soon for amazing tent products!</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen py-12 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto"
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Our Products
                </h1>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product._id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="w-full"
                        >
                            <Productcard {...product} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Products;
