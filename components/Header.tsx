'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/aarti-logo.png"
                alt="AARTI Logo"
                width={50}
                height={55}
                className="h-12 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary block">AARTI</span>
                <span className="text-xs text-paragraph">Aausaheb Research & Training Institute</span>
              </div>
              <span className="text-xl font-bold text-primary sm:hidden">AARTI</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-black font-medium hover:text-primary transition">
                Home
              </Link>
              <Link href="/courses" className="text-black font-medium hover:text-primary transition">
                Courses
              </Link>
              <Link href="/about" className="text-black font-medium hover:text-primary transition">
                About
              </Link>
              <Link href="/instructors" className="text-black font-medium hover:text-primary transition">
                Educators
              </Link>
              <Link href="/blog" className="text-black font-medium hover:text-primary transition">
                Blog
              </Link>
              <Link href="/contact" className="text-black font-medium hover:text-primary transition">
                Contact Us
              </Link>
            </div>

            {/* Search & Auth */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <Link
                href="/register"
                className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition flex items-center"
              >
                Register - It&apos;s Free
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-4 pb-4">
              <Link href="/" className="block text-black hover:text-primary font-medium">
                Home
              </Link>
              <Link href="/courses" className="block text-black hover:text-primary font-medium">
                Courses
              </Link>
              <Link href="/about" className="block text-black hover:text-primary font-medium">
                About
              </Link>
              <Link href="/instructors" className="block text-black hover:text-primary font-medium">
                Educators
              </Link>
              <Link href="/blog" className="block text-black hover:text-primary font-medium">
                Blog
              </Link>
              <Link href="/contact" className="block text-black hover:text-primary font-medium">
                Contact Us
              </Link>
              <div className="pt-4 space-y-2 border-t">
                <Link
                  href="/register"
                  className="block bg-secondary text-white px-6 py-2 rounded-full text-center font-semibold"
                >
                  Register - It&apos;s Free
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
