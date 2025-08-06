'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <span className="text-lg font-semibold text-yellow-500">WEEKEND</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center border rounded-md px-2 py-1">
            <input
              type="text"
              placeholder="Want to learn?"
              className="outline-none px-2 py-1 w-40"
            />
            <button className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm">
              Explore ⌄
            </button>
          </div>

          <Link href="/" className="text-gray-700 hover:text-green-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-green-500">About us</Link>
          <Link href="/courses" className="text-gray-700 hover:text-green-500">Courses</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-500">Contact us</Link>
          <Link href="/faqs" className="text-gray-700 hover:text-green-500">FAQ’s</Link>
          <Link href="/signin" className="text-gray-700 hover:text-green-500">Sign in</Link>
          <Link
            href="/signup"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow"
          >
            Create free account
          </Link>
        </nav>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <input
            type="text"
            placeholder="Want to learn?"
            className="w-full px-3 py-2 border rounded-md"
          />
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-gray-700">Home</Link>
            <Link href="/about" className="text-gray-700">About us</Link>
            <Link href="/courses" className="text-gray-700">Courses</Link>
            <Link href="/contact" className="text-gray-700">Contact us</Link>
            <Link href="/faqs" className="text-gray-700">FAQ’s</Link>
            <Link href="/signin" className="text-gray-700">Sign in</Link>
            <Link
              href="/signup"
              className="bg-green-500 text-white text-center py-2 rounded-md"
            >
              Create free account
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
