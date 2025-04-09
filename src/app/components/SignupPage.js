'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
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
            name: '',
            company_name: '',
            email,
          },
        }),
      });
    
      const data = await response.json();
      console.log('Response:', data);
    
      if (response.ok) {
        setMessage('Signup successful! Check your email for next steps.');
      } else {
        setMessage(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please check your connection and try again.');
    }}

  return (
    <div className="w-full h-1/2 flex justify-center items-center bg-[rgb(37,0,91)] text-white">
      <Head>
        <title>Signup Page</title>
      </Head>

      <div className="w-full max-w-xl p-8 mt-20 mb-20 bg-[rgb(37,0,91)] rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
          <div className="relative flex">
            <Image
              src="/emoji_female.png"
              alt="User 2"
              width={50}
              height={50}
              className="rounded-full border-2 border-white absolute left-6 sm:left-8 z-0"
            />
            <Image
              src="/emoji_male.png"
              alt="User 1"
              width={50}
              height={50}
              className="rounded-full border-2 border-white relative z-10"
            />
          </div>
          <span className="font-semibold mt-4 sm:mt-0 sm:ml-10 text-center sm:text-left">
            + Trusted by 50+ organizations
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          Sign up to start{' '}
          <span
            className="relative inline-block text-white"
            style={{
              backgroundImage: "url('background.png')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              padding: "2px 8px",
            }}
          >
            sourcing
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md text-white border border-white bg-transparent focus:outline-none focus:ring-1"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full text-black bg-white bg-[rgb(37,0,91)] rounded-md py-3 px-6 hover:bg-purple-200 transition duration-300"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">
            {message}
          </p>
        )}

        <p className="mt-6 text-gray-300 text-center max-w-md">
          Ready to experience AI-powered hiring? Sign up now and start sourcing top talent effortlessly.
        </p>
      </div>
    </div>
  );
}