"use client"
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function TopNavigations() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
       const pathname = usePathname();
     const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blogs", href: "/" },
];
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
    <Link href="/" className="flex items-center">
  <Image
    src="/digitalnewlogo.jpg"
    alt="ThinkLane Logo"
    width={140}
    height={40}
    className="object-contain h-10 sm:h-18 rounded-full"
  />
</Link>


</div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="/"
                  className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-md font-medium "
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-md font-medium"
                >
                  About
                </a>
                <a
                  href="/contact-us"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-md font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-md font-medium">
                Blog
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

        {isMenuOpen && (
        <div className="bg-white  mt-4 shadow-lg rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200  bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md`}
                   
                >
                  {item.name}
                </a>
              );
            })}
             </div>
        </div>
      )}               
      </nav>
    </>
  );
}
