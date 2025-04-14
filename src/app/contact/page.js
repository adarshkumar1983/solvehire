'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FaqAccordion from '../components/FaqAccordion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company_name: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email } = formData;
    if (!name || !email) {
      setMessage('Please fill out all required fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/public/contact-solvehire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: formData }),
      });

      if (response.ok) {
        setMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', company_name: '' });
      } else {
        const errorData = await response.json();
        setMessage(errorData?.message || 'Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-100 py-12 px-4 min-h-screen">
        <div className="container mt-30 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Contact Info Section */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're here to help you find the right talent. Reach out with any questions or for assistance.
                </p>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-center gap-2">
                    <i className="bi bi-envelope-fill text-blue-600 text-xl"></i>
                    <span>contact@solvehire.ai</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="bi bi-telephone-fill text-blue-600 text-xl"></i>
                    <span>+91 80024 94490</span>
                  </p>
                  <div className="flex items-center gap-4">
  <Link
    href="https://www.linkedin.com/company/solvehire"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 text-2xl transition-colors"
    aria-label="Visit Solvehire LinkedIn Page"
  >
    <i className="bi bi-linkedin"></i>
  </Link>
  <span>
    <a
      href="https://www.linkedin.com/company/solvehire"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-800 transition-colors"
    >
      https://www.linkedin.com/company/solvehire
    </a>
  </span>
</div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Our Locations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <i className="bi bi-geo-alt-fill text-blue-600 text-2xl mt-1"></i>
                        <div>
                          <p className="font-semibold">India</p>
                          <p className="text-sm">Plus office, 1st & 2nd Floor</p>
                          <p className="text-sm">Landmark Cyber Park</p>
                          <p className="text-sm">Gurugram, Haryana 122101</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="bi bi-geo-alt-fill text-blue-600 text-2xl mt-1"></i>
                        <div>
                          <p className="font-semibold">USA</p>
                          <p className="text-sm">16192, Coastal Highway</p>
                          <p className="text-sm">Lewes, Delaware 19958</p>
                        </div>
                      </div>
                    </div>
                  </div>
              
                </div>
              </div>

              {/* Form Section */}
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500 ">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    I agree to the{' '}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
                {message && (
                  <p
                    className={`mt-3 text-sm text-center ${
                      message.includes('successfully') ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <FaqAccordion />
      <Footer />
    </>
  );
};

export default ContactPage;