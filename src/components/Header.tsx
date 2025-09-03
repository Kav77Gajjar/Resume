'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if user is logged in
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <header className="fixed top-4 left-8 right-8 z-50">
      <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ResumeHub</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Search
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Templates
              </a>
              {/* <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Tips
              </a> */}
            </nav>

            {/* CTA Buttons Container */}
            <div className="hidden md:block">
              {/* Buttons removed */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Templates
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Examples
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Tips
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Pricing
                </a>
                <Link href="/admin" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Admin
                </Link>
                {/* Mobile buttons removed */}
                {isLoggedIn && (
                  <button
                    onClick={handleLogout}
                    className="text-red-600 py-2 hover:text-red-700 transition-colors w-full text-center mt-2"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
