import React from 'react';
import { motion } from 'framer-motion';

function TermsAndConditions() {
    return (
        <div className="min-h-screen py-12 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Terms & Conditions
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Booking Agreement</h2>
                            <p>
                                By making a booking through Nepal Tent Sewing Enterprises, you agree to these terms and conditions.
                                All bookings are subject to confirmation by our team.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Payment & Confirmation</h2>
                            <p>
                                Payment proof must be uploaded at the time of booking. Your booking will be confirmed once
                                we verify the payment. We will contact you within 2 hours regarding your booking status.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Delivery & Pickup</h2>
                            <p>
                                Upon booking confirmation, we will contact you to arrange tent delivery. Delivery charges
                                may apply based on your location. You are responsible for the safe return of the tent in
                                the same condition as received.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Contact Information</h2>
                            <p>
                                <strong>Your contact information is kept strictly confidential.</strong> We will only use
                                your phone number and email to contact you regarding:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>Booking confirmation</li>
                                <li>Tent delivery arrangements</li>
                                <li>Pickup scheduling</li>
                                <li>Important updates about your booking</li>
                            </ul>
                            <p className="mt-2">
                                We will never share your contact information with third parties or use it for marketing purposes
                                without your explicit consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cancellation Policy</h2>
                            <p>
                                Cancellations must be made before the delivery of tent. Refunds will be
                                processed according to our refund policy. Last-minute cancellations may incur charges.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Damage & Loss</h2>
                            <p>
                                You are responsible for any damage or loss to the rented equipment. Any damages beyond normal
                                wear and tear will be charged to you. Please inspect the tent upon delivery and report any
                                issues immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
                            <p>
                                If you have any questions about these terms, please contact us through our website or
                                customer service channels.
                            </p>
                        </section>

                        <div className="mt-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                            <p className="text-sm text-indigo-800">
                                <strong>Last Updated:</strong> February 2026
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default TermsAndConditions;
