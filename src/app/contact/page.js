'use client'

import Link from "next/link";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

const ContactPage = () => {
    return (
        <>
            <Header />

            {/* Full-width Contact Section */}
            <main className="bg-gray-50  py-16 px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-lg">

                    {/* Left Side - Company Info */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-6">
                            We're here to help you find the right talent. Whether you have questions or need assistance, feel free to reach out.
                        </p>
                        <div className="space-y-4 text-gray-700 text-base">
                            <p><strong>Email:</strong> contact@solvehire.ai</p>
                            <p><strong>Phone:</strong> +91 XXXX XXXXX</p>
                            <p><strong>Location:</strong> Gurugram, India</p>
                            <div className="flex gap-4 mt-4">
                                <Link
                                    href="https://www.linkedin.com/company/solvehire"
                                    target="_blank"
                                    className="text-blue-600 hover:text-blue-800 text-2xl"
                                    aria-label="LinkedIn"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                required
                               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
             focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
             focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
             focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="privacy"
                                required
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <label htmlFor="privacy" className="text-sm text-gray-700">
                                I agree to the <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
    {/* Left Column */}
    <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 font-bold">
        7M+ Unique Tech Profiles. Trained over 10k + candidates feedback inputs.
        </p>
    </div>

    {/* Right Column */}
    <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 font-bold">
        Proprietary AI based sourcing and campaigning platform for recruiters.
        </p>
    </div>
</section>s
            </main>

            <FaqAccordion />
            <Footer />
        </>
    );
};

export default ContactPage;