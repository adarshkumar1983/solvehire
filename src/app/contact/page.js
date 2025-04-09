'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FaqAccordion from '../components/FaqAccordion';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company_name: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, company_name } = formData;

        if (!name || !email) {
            setMessage('Please fill out all required fields.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('https://app.solvehire.ai/public/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contact: {
                        name,
                        company_name,
                        email,
                    },
                }),
            });

            if (response.ok) {
                setMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', company_name: '' });
            } else {
                setMessage('Failed to send your message. Please try again later.');
            }
        } catch (error) {
            setMessage('An error occurred. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />

            <main className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-lg">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-6">
                            We&apos;re here to help you find the right talent. Whether you have questions or need
                            assistance, feel free to reach out.
                        </p>
                        <div className="space-y-4 text-gray-700 text-base">
                            <p><strong>Email:</strong> contact@solvehire.ai</p>
                            <p><strong>Phone:</strong> +91 80024 94490</p>
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

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                type="text"
                                name="company_name"
                                value={formData.company_name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
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
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition"
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                        {message && (
                            <p className="mt-4 text-sm text-center text-gray-700">
                                {message}
                            </p>
                        )}
                    </form>
                </div>
            </main>

            <FaqAccordion />
            <Footer />
        </>
    );
};

export default ContactPage;