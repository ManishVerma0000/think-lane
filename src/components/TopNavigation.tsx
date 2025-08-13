"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function TopNavigations() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-emerald-600">
                Think Lane
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  Courses
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                Login
              </button>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-gray-900 block px-3 py-2 text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 block px-3 py-2 text-base font-medium"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-600 block px-3 py-2 text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 block px-3 py-2 text-base font-medium"
              >
                Contact
              </a>
              <div className="pt-2 border-t">
                <button className="text-gray-600 block px-3 py-2 text-base font-medium w-full text-left">
                  Login
                </button>
                <button className="bg-emerald-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-emerald-700 w-full text-left mt-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
