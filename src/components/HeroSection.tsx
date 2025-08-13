"use client";
import React from "react";
import {
  Play,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import ContactUsPage from "./ContactUsPage";

const CourseLandingPage: React.FC = () => {

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


  return (
    <div className="min-h-screen bg-white">

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
              Meet Our Mentor
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from industry experts who bring real-world experience to the
              classroom.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-10 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/mentor.jpg"
                alt="Rakesh Kumar"
                className="w-60 h-60 rounded-full mx-auto mb-6 object-cover border-4 border-emerald-500"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Rakesh Kumar
              </h3>
              <p className="text-emerald-600 font-semibold text-lg mb-4">
                Lead
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                8 years of experience
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300">
                Know More
              </button>
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
  
    </div>
  );
};

export default CourseLandingPage;
