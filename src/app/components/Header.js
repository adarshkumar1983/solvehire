'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'why-solvehire', label: 'Why SolveHire', href: '#why-solvehire' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'how-to-source', label: 'How to Source', href: '#how-to-source' },

];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef({});
  const router = useRouter();

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const activeRef = navRefs.current[activeSection];
    if (activeRef) {
      const { offsetLeft, offsetWidth, offsetHeight } = activeRef;
      const extraHeight = window.innerWidth < 640 ? 0 : window.innerWidth < 1024 ? 6 : 5;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight + extraHeight,
      });
    }
  }, [activeSection]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleScroll = (id) => {
    if (id === 'home') {
      router.push('/'); // Redirect to the home page, even if already on home
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMenuOpen(false); // Close the menu if it's mobile
  };
  
  return (
    <header className="bg-[rgb(37,0,91)] shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between gap-4 h-16 relative">
        <Link href="/">
          <Image
            src="/solvehireai_logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="cursor-pointer mb-2 justify-center items-center w-24 sm:w-28 lg:w-32"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-4 lg:space-x-5 xl:space-x-6 relative items-center">
          <div
            className="absolute bottom-0 bg-blue-200/40 rounded-full transition-all duration-300 ease-in-out"
            style={{
              ...indicatorStyle,
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              height: `${indicatorStyle.height}px`,
            }}
          />
           {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            ref={(el) => (navRefs.current[item.id] = el)}
            className={`${
              activeSection === item.id ? 'font-semibold text-blue-300' : 'text-white'
            } px-2 pb-1 bg-transparent hover:text-blue-300 transition-colors justify-center items-center relative text-sm lg:text-base cursor-pointer`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Employer Login Button */}
      <div className="hidden md:flex">
          <Link
            href="https://app.solvehire.ai/"
            className="group relative overflow-hidden bg-blue-500 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
            aria-label="Employer Login"
          >
            <div className="flex items-center gap-2 justify-center">
              <div className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-[100.8]" />
              <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                Employer Login
              </span>
            </div>
            <div className="absolute top-0 left-5 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
              <span>Employer Login</span>
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>

        {/* Mobile Toggle buttom */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/*// Mobile Menu views */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 z-40">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${
                  activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-black'
                } hover:text-blue-500`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://app.solvehire.ai/"
              className="group relative  px-10 overflow-hidden bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
              aria-label="Employer Login"
            >
              Employer Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}