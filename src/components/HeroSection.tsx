"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Play,
  Star,
  Users,
  Clock,
  Award,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import ContactUsPage from "./ContactUsPage";

const CourseLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Estailo",
      description:
        "Estailo Fashion offers trendy, Korea-inspired jewelry (earrings, necklaces, rings, bracelets, hair accessories) with free shipping and stylish collections tailored for every occasion",

      image: "/estalio.jpeg",
      tag: "Digital marketing",
    },
    {
      id: 2,
      title: "Coral Haze",
      description:
        "blends Indian tradition with contemporary flair, creating handcrafted designer juttis, kolhapuris, and modern footwear—distinctive, elegant, and comfortably artisanal",
      duration: "6 weeks",
      rating: 4.9,
      image: "/coralhaze.jpg",
    },
    {
      id: 3,
      title: "Aakriti sonawala",
      description:
        "Director at Gurugram-based Katalystworld Gems & Jewels Pvt. Ltd., ",
      image: "/aakriti.png",
    },
  ];

  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Design Expert",
      experience: "8+ years",
      image: "/api/placeholder/80/80",
    },
    {
      name: "Mike Chen",
      role: "UX Specialist",
      experience: "6+ years",
      image: "/api/placeholder/80/80",
    },
    {
      name: "Emily Davis",
      role: "Business Analyst",
      experience: "10+ years",
      image: "/api/placeholder/80/80",
    },
    {
      name: "Alex Kumar",
      role: "Tech Lead",
      experience: "12+ years",
      image: "/api/placeholder/80/80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-emerald-600">
                CourseHub
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-blue-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center sm:p-4">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Up Your <span className="text-emerald-600">Skills</span>
                <br />
                To <span className="text-emerald-600">Advance</span> Your
                <br />
                <span className="text-emerald-600">Career Path</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Providing Life Changing Experiences Through Education. Class
                That Fits Your Busy Life, Designed For Today's Working
                Professional
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Get Started Today
                </button>
                <button className="flex items-center justify-center border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                  <Play size={20} className="mr-2" />
                  Watch Video
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <ContactUsPage />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-white text-2xl lg:text-3xl font-bold">
              Providing Life Changing Experiences Through Learning
            </h2>
            <p className="text-emerald-100 mt-4">
              Join thousands of students already learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">25,000+</div>
              <div className="text-emerald-100 mt-2">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-emerald-100 mt-2">Total Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-emerald-100 mt-2">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">99%</div>
              <div className="text-emerald-100 mt-2">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Brands I have worked with
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let's join our famous class, the knowledge provided will
              definitely be useful for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="ml-1 text-sm text-gray-600">
                        {course.rating}
                      </span>
                    </div>
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                      Learn More
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Mentors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from industry experts who bring real-world experience to the
              classroom.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-10 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src='/mentor.jpg'
                alt="Rakesh Kumar"
                className="w-60 h-60 rounded-full mx-auto mb-6 object-cover border-4 border-emerald-500"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Rakesh Kumar
              </h3>
              <p className="text-emerald-600 font-semibold text-lg mb-4">
                Lead
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                * years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Courses was Designed by a Mentor platform for those looking to start
            a new career, or level a skillset.
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students and start your learning journey today.
            Get access to expert-led courses and transform your career.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
            Start Learning Today
          </button>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-gray-600">
              Stay up to date with the latest trends in education and
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 3 - Instagram vs Facebook */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/fbvsinsta.png"
                alt="Instagram vs Facebook Performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-emerald-600 text-sm font-medium mb-2">
                  March 20, 2024
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do You Think Your Customers Are More Active on Instagram? You
                  Might Be Wrong!
                </h3>
                <p className="text-gray-600 mb-4">
                  Many brands assume Instagram is their best platform. But in
                  real campaigns, Facebook sometimes outperforms with higher AOV
                  and conversions.
                </p>
                <a
                  href="#"
                  className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center"
                >
                  Read More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </article>

            {/* Article 4 - Microsoft Clarity Integration */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="/micro.png"
                alt="Microsoft Clarity Google Ads Integration"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-emerald-600 text-sm font-medium mb-2">
                  March 22, 2024
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Microsoft Clarity Now Integrates with Google Ads
                </h3>
                <p className="text-gray-600 mb-4">
                  With session recordings, heatmaps, and campaign metrics in one
                  place, this integration bridges ad performance with real user
                  behavior.
                </p>
                <a
                  href="https://clarity.microsoft.com/blog/google-ads-integration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center"
                >
                  Read More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-4">
                CourseHub
              </div>
              <p className="text-gray-300 mb-6">
                Providing life-changing experiences through education. Your
                journey to success starts here.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Instructors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 CourseHub. All rights reserved. Made with ❤️ for learners
              worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseLandingPage;
