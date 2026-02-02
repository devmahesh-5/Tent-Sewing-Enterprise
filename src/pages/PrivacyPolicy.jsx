import React from 'react';
import { motion } from 'framer-motion';

function PrivacyPolicy() {
    return (
        <div className="min-h-screen py-12 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                            <p>
                                When you create an account or make a booking, we collect the following information:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Booking details (dates, products, payment information)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
                            <p>
                                Your personal information is used exclusively for:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li><strong>Booking Management:</strong> Processing and confirming your tent reservations</li>
                                <li><strong>Delivery Coordination:</strong> Contacting you to arrange tent delivery and pickup</li>
                                <li><strong>Customer Service:</strong> Responding to your inquiries and providing support</li>
                                <li><strong>Order Updates:</strong> Sending you important information about your bookings</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
                            <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-4">
                                <p className="text-green-800 font-semibold">
                                    🔒 We do NOT share, sell, or distribute your contact information to third parties.
                                </p>
                            </div>
                            <p>
                                Your contact information (email and phone number) is kept strictly confidential and is only
                                accessible to our authorized team members for the purposes stated above. We will never use
                                your information for unsolicited marketing or share it with external companies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your personal information from
                                unauthorized access, alteration, or disclosure. Your data is stored securely and is only
                                accessible to authorized personnel.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Communication</h2>
                            <p>
                                We will contact you via phone or email only for:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>Booking confirmation notifications</li>
                                <li>Tent delivery scheduling</li>
                                <li>Pickup arrangements</li>
                                <li>Critical updates about your reservation</li>
                            </ul>
                            <p className="mt-2">
                                You will not receive spam, promotional emails, or marketing calls unless you explicitly opt-in.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>Access your personal information</li>
                                <li>Request corrections to your data</li>
                                <li>Request deletion of your account and data</li>
                                <li>Opt-out of communications (except essential booking-related messages)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookies</h2>
                            <p>
                                We use cookies to maintain your login session and improve your browsing experience.
                                These cookies do not track your personal activities outside our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Us</h2>
                            <p>
                                If you have any questions about how we handle your data or wish to exercise your rights,
                                please contact us through our website.
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

export default PrivacyPolicy;
