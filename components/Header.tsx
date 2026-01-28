'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
            <div className="hidden lg:flex items-center space-x-6">
              <Link 
                href="/" 
                className={`font-medium transition relative ${
                  pathname === '/' 
                    ? 'text-primary' 
                    : 'text-black hover:text-primary'
                }`}
              >
                Home
                {pathname === '/' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </Link>
              <Link 
                href="/courses" 
                className={`font-medium transition relative ${
                  pathname === '/courses' 
                    ? 'text-primary' 
                    : 'text-black hover:text-primary'
                }`}
              >
                Courses
                {pathname === '/courses' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </Link>
              <Link 
                href="/about" 
                className={`font-medium transition relative ${
                  pathname === '/about' 
                    ? 'text-primary' 
                    : 'text-black hover:text-primary'
                }`}
              >
                About
                {pathname === '/about' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </Link>
              <Link 
                href="/#promoters"
                className={`font-medium transition relative ${
                  'text-black hover:text-primary'
                }`}
              >
                Promoters
              </Link>
              <Link 
                href="/instructors" 
                className={`font-medium transition relative ${
                  pathname === '/instructors' 
                    ? 'text-primary' 
                    : 'text-black hover:text-primary'
                }`}
              >
                Educators
                {pathname === '/instructors' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </Link>
              <Link 
                href="/blog" 
                className={`font-medium transition relative ${
                  pathname === '/blog' || pathname?.startsWith('/blog/')
                    ? 'text-primary' 
                    : 'text-black hover:text-primary'
                }`}
              >
                Blog
                {(pathname === '/blog' || pathname?.startsWith('/blog/')) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium transition relative ${
                  pathname === '/contact' 
                    ? 'text-primary' 
                    : 'text-black hover:text-primary'
                }`}
              >
                Contact Us
                {pathname === '/contact' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </Link>
            </div>

            {/* Search & CTA */}
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
                href="/contribute"
                className="bg-secondary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition flex items-center shadow-md shadow-secondary/30"
              >
                Contribute
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
            <div className="lg:hidden mt-4 space-y-3 pb-4 bg-white rounded-lg shadow-lg p-4">
              <Link 
                href="/" 
                className={`block font-medium transition ${
                  pathname === '/' ? 'text-primary' : 'text-black hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                className={`block font-medium transition ${
                  pathname === '/courses' ? 'text-primary' : 'text-black hover:text-primary'
                }`}
              >
                Courses
              </Link>
              <Link 
                href="/about" 
                className={`block font-medium transition ${
                  pathname === '/about' ? 'text-primary' : 'text-black hover:text-primary'
                }`}
              >
                About
              </Link>
              <Link 
                href="/#promoters"
                className={`block font-medium transition ${
                  'text-black hover:text-primary'
                }`}
              >
                Promoters
              </Link>
              <Link 
                href="/instructors" 
                className={`block font-medium transition ${
                  pathname === '/instructors' ? 'text-primary' : 'text-black hover:text-primary'
                }`}
              >
                Educators
              </Link>
              <Link 
                href="/blog" 
                className={`block font-medium transition ${
                  pathname === '/blog' || pathname?.startsWith('/blog/') ? 'text-primary' : 'text-black hover:text-primary'
                }`}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className={`block font-medium transition ${
                  pathname === '/contact' ? 'text-primary' : 'text-black hover:text-primary'
                }`}
              >
                Contact Us
              </Link>
              <div className="pt-4 space-y-2 border-t">
                <Link
                  href="/contribute"
                  className="block bg-secondary text-white px-6 py-3 rounded-full text-center font-semibold shadow-md"
                >
                  Contribute
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
