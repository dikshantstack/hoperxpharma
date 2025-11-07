'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-2 items-center">
            <Link href="/" className="shrink-0">
              <img src="/icon.png" alt="Logo" height={40} width={40} />
            </Link>
              <h1 className='text-2xl font-bold'>HopeRxPharma</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/features"
                className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="/login"
                className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#09ae77] hover:bg-[#078c60]"
              >
                Start Trial
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/features"
              className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            <Link
              href="/trial"
              className="text-white bg-[#09ae77] hover:bg-[#078c60] block px-3 py-2 rounded-md text-base font-medium"
            >
              Start Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
