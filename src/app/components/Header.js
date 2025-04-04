'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[rgb(37,0,91)] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <Image src="/solvehireai_logo.png" alt="Logo" width={120} height={40} className="cursor-pointer" />
        </Link>

        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white-700 text-white hover:text-blue-500">Home</Link>
          <Link href="#why-solvehire" className="text-white-700 text-white hover:text-blue-500">Why SolveHire</Link>
          <Link href="#solutions" className="text-white-700    text-white hover:text-blue-500">Solutions</Link>
          <Link href="#how-to-source" className="text-white-700 text-white hover:text-blue-500">How to Source</Link>
          <Link href="#testimonials" className="text-white-700 text-white hover:text-blue-500">Testimonials</Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
        <Link 
  href="https://app.solvehire.ai/"
  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
>
  Login
</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="#why-solvehire" onClick={() => setMenuOpen(false)} className="text-white-700 text-black hover:text-blue-500">Why SolveHire</Link>
          <Link href="#solutions" onClick={() => setMenuOpen(false)} className="text-white-700   text-black  hover:text-blue-500">Solutions</Link>
          <Link href="#how-to-source" onClick={() => setMenuOpen(false)} className="text-white-700 text-black hover:text-blue-500">How to Source</Link>
          <Link href="#testimonials" onClick={() => setMenuOpen(false)} className="text-white-700  text-black hover:text-blue-500">Testimonials</Link>
            <Link href="https://app.solvehire.ai/" onClick={() => setMenuOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</Link>
          </nav>
        </div>
      )}

    </header>
  );
}
