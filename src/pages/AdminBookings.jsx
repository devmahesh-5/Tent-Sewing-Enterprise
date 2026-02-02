import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function AdminBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('/api/v1/bookings/all', {
                withCredentials: true
            });
            setBookings(response.data.data || []);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching bookings:", err);
            setError("Failed to load bookings");
            setLoading(false);
        }
    };

    const updateBookingStatus = async (bookingId, newStatus) => {
        try {
            await axios.patch(`/api/v1/bookings/${bookingId}/status`,
                { status: newStatus },
                { withCredentials: true }
            );
            fetchBookings(); // Refresh list
        } catch (err) {
            console.error("Error updating booking:", err);
            alert("Failed to update booking status");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600">Loading bookings...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center text-red-600">
                    <p className="text-xl mb-4">⚠️ {error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    All Bookings
                </h1>

                {bookings.length === 0 ? (
                    <div className="text-center text-gray-600 py-12">
                        <p className="text-2xl mb-4">📋 No bookings yet</p>
                        <p>Bookings will appear here once customers make reservations</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left">Product</th>
                                    <th className="px-6 py-4 text-left">Customer</th>
                                    <th className="px-6 py-4 text-left">Email</th>
                                    <th className="px-6 py-4 text-left">Phone</th>
                                    <th className="px-6 py-4 text-left">Dates</th>
                                    <th className="px-6 py-4 text-left">Price</th>
                                    <th className="px-6 py-4 text-left">Status</th>
                                    <th className="px-6 py-4 text-left">Payment Proof</th>
                                    <th className="px-6 py-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {bookings.map((booking, index) => (
                                    <motion.tr
                                        key={booking._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="hover:bg-blue-50 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">
                                                {booking.product?.title || 'N/A'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {booking.user?.fullName || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {booking.user?.email || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {booking.user?.phoneNumber || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <div>{new Date(booking.startDate).toLocaleDateString()}</div>
                                            <div className="text-gray-500">to</div>
                                            <div>{new Date(booking.endDate).toLocaleDateString()}</div>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-green-600">
                                            RS. {booking.totalPrice}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                                booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {booking.paymentProof ? (
                                                <a
                                                    href={booking.paymentProof}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 underline"
                                                >
                                                    View
                                                </a>
                                            ) : 'N/A'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2 flex-wrap">
                                                {booking.status === 'pending' && (
                                                    <>
                                                        <button
                                                            onClick={() => updateBookingStatus(booking._id, 'confirmed')}
                                                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold"
                                                        >
                                                            Confirm
                                                        </button>
                                                        <button
                                                            onClick={() => updateBookingStatus(booking._id, 'cancelled')}
                                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </>
                                                )}
                                                {booking.status === 'confirmed' && (
                                                    <button
                                                        onClick={() => updateBookingStatus(booking._id, 'delivered')}
                                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold"
                                                    >
                                                        Mark Delivered
                                                    </button>
                                                )}
                                                {booking.status === 'delivered' && (
                                                    <button
                                                        onClick={() => updateBookingStatus(booking._id, 'returned')}
                                                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs font-semibold"
                                                    >
                                                        Mark Returned
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminBookings;
