'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      isActive: (path: string | null) => path === '/',
    },
    {
      label: 'About Us',
      href: '/about',
      isActive: (path: string | null) => path === '/about',
    },
    {
      label: 'Our Courses',
      href: '/courses',
      isActive: (path: string | null) => path === '/courses',
    },
    {
      label: 'Educators',
      href: '/instructors',
      isActive: (path: string | null) => path === '/instructors',
    },
    {
      label: 'Promoters',
      href: '/#promoters',
      // Treat Promoters as part of the home page section
      isActive: (path: string | null) => path === '/',
    },
    {
      label: 'Gallery',
      href: '/gallery',
      isActive: (path: string | null) => path === '/gallery',
    },
    {
      label: 'News & Blogs',
      href: '/blog',
      isActive: (path: string | null) =>
        path === '/blog' || (path ?? '').startsWith('/blog/'),
    },
    {
      label: 'Contact Us',
      href: '/contact',
      isActive: (path: string | null) => path === '/contact',
    },
  ];

  const handlePromotersClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If already on the homepage, smooth-scroll to the promoters section
    if (pathname === '/') {
      const element = document.getElementById('promoters');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // If on another page, navigate to the homepage with hash
    router.push('/#promoters');
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-6 lg:gap-10">
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/images/aarti_logo.jpeg"
                alt="AARTI Logo"
                width={60}
                height={66}
                className="h-14 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary block">AARTI</span>
                <span className="text-xs text-paragraph">Aausaheb Research & Training Institute</span>
              </div>
              <span className="text-xl font-bold text-primary sm:hidden">AARTI</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
              {navItems.map((item) => {
                const isPromoters = item.label === 'Promoters';
                const active = item.isActive(pathname);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={isPromoters ? handlePromotersClick : undefined}
                    className={`font-medium transition relative ${
                      active ? 'text-primary' : 'text-black hover:text-primary'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center justify-end flex-shrink-0">
              {/* Search input removed */}
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
              {navItems.map((item) => {
                const isPromoters = item.label === 'Promoters';
                const active = item.isActive(pathname);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={isPromoters ? handlePromotersClick : undefined}
                    className={`block font-medium transition ${
                      active ? 'text-primary' : 'text-black hover:text-primary'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
