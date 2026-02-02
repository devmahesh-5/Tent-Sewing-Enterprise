import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMyBookings();
    }, []);

    const fetchMyBookings = async () => {
        try {
            const response = await axios.get('/api/v1/bookings/my-bookings', {
                withCredentials: true
            });
            setBookings(response.data.data || []);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching bookings:", err);
            setError("Failed to load your bookings");
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed':
                return 'bg-green-100 text-green-800 border-green-300';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'delivered':
                return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'returned':
                return 'bg-gray-100 text-gray-800 border-gray-300';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-300';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                <div className="text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-700 text-lg">Loading your bookings...</p>
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
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                    My Bookings
                </motion.h1>

                {bookings.length === 0 ? (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-12"
                    >
                        <p className="text-gray-600 text-2xl mb-4">📦 No bookings yet</p>
                        <p className="text-gray-500 mb-6">Start exploring our products and make your first booking!</p>
                        <button
                            onClick={() => navigate('/products')}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-semibold"
                        >
                            Browse Products
                        </button>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bookings.map((booking, index) => (
                            <motion.div
                                key={booking._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-200"
                            >
                                {/* Product Image and Title */}
                                <div className="flex items-start gap-4 mb-4">
                                    {booking.product?.image && (
                                        <img
                                            src={booking.product.image}
                                            alt={booking.product.title}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                    )}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                                            {booking.product?.title || 'Product'}
                                        </h3>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(booking.status)}`}>
                                            {booking.status.toUpperCase()}
                                        </span>
                                    </div>
                                </div>

                                {/* Booking Details */}
                                <div className="space-y-2 border-t border-gray-200 pt-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Start Date:</span>
                                        <span className="font-medium text-gray-800">
                                            {new Date(booking.startDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">End Date:</span>
                                        <span className="font-medium text-gray-800">
                                            {new Date(booking.endDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Total Price:</span>
                                        <span className="font-bold text-indigo-700 text-lg">
                                            RS. {booking.totalPrice}
                                        </span>
                                    </div>
                                </div>

                                {/* Payment Proof */}
                                {booking.paymentProof && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <a
                                            href={booking.paymentProof}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 hover:text-indigo-800 text-sm underline"
                                        >
                                            View Payment Proof
                                        </a>
                                    </div>
                                )}

                                {/* Status Message */}
                                {booking.status === 'pending' && (
                                    <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                        <p className="text-yellow-800 text-sm">
                                            ⏳ Your booking is pending admin confirmation. We'll contact you soon!
                                        </p>
                                    </div>
                                )}
                                {booking.status === 'confirmed' && (
                                    <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                                        <p className="text-green-800 text-sm">
                                            ✅ Booking confirmed! We'll contact you for tent delivery details.
                                        </p>
                                    </div>
                                )}
                                {booking.status === 'delivered' && (
                                    <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                                        <p className="text-blue-800 text-sm">
                                            🎉 Tent delivered! Enjoy your adventure!
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Terms Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-indigo-200"
                >
                    <p className="text-sm text-gray-700 text-center">
                        📞 <strong>Note:</strong> Your contact information is kept private and secure.
                        We will only contact you regarding tent delivery upon booking confirmation.
                        See our <a href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</a> and{' '}
                        <a href="/terms" className="text-indigo-600 hover:underline">Terms & Conditions</a> for more details.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default MyBookings;
