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
  { name: "Courses", href: "/" },
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
 <Link
  href="/"
  className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
>
  <Image
    src="/digitalnewlogo.jpg"
    alt="ThinkLane Logo"
    width={100}
    height={100}
    className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
  />
</Link>

</div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="/"
                  className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/contact-us"
                  className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
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
        <div className="bg-white border-t mt-4 shadow-lg rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 
                    ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
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
