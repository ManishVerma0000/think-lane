"use client";
import React, { useState } from "react";
import {
  Play,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import ContactUsPage from "./ContactUsPage";
import CoursesCarousel from "./CoursesCarousel";
import { useRouter } from "next/navigation";
import TestimonialCards from "./TestimonialCards";
import Modal from "./ContactModal";
import ContactUsPageForModal from "./ContactUsForModel";


const CourseLandingPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  const router=useRouter()

const courses = [
  {
    id: 1,
    title: "Estailo",
    image: "/estalio.jpeg",
    url: "https://estailo.com",
  },
  {
    id: 2,
    title: "Coral Haze",
    image: "/coralhaze.jpg",
    url: "https://coralhaze.com",
  },
  {
    id: 3,
    title: "Aakriti Sonawala",
    image: "/aakriti.png",
    url: "https://katalystworld.com",
  },
  {
    id: 4,
    title: "Tatsat",
    image: "/tatsat.png",
    url: "https://tatsat.co.in",
  },
  {
    id: 5,
    title: "Umbrashield",
    image: "/umbrashield.png",
    url: "https://umbrashields.com",
  },
  {
    id: 6,
    title: "RoadGods",
    image: "/roadgods.png",
    url: "https://www.roadgods.com",
  },
  {
    id: 7,
    title: "Divinity decor",
    image: "/divinity.jpg",
    url: "https://divinitydecor.com/",
  },
];


function redirectToContactPageHandler(){
  router.push('/contact-us')
}

function handlerMentorDetails(){
  router.push('/mentor-details')
}


  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-blue-50 py-4 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center sm:p-4">
            <div className="lg:w-1/2 lg:pr-12">
    <h1
  className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-3 leading-tight animate-fade-in text-center lg:text-left"
>
  The{" "}
  <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
    Ultimate
  </span>{" "}
  Performance Marketing{" "}
  <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
    Mastery
  </span>{" "}
  Program
</h1>

              <p className="text-lg text-gray-600 mb-8 max-w-lg">
               Run live Meta & Google Ads campaigns, track analytics, and build a portfolio that lands your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Get Started Today
                </button>
                
              </div>
            </div>
            <div className="lg:w-1/2 lg:mt-0">
              <ContactUsPage />
            </div>
          </div>
        </div>
      </section>


      {/* Popular Courses */}
      <section className="">
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
          <CoursesCarousel courses={courses}/>

        </div>
      </section>

      {/* Instructors */}
      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
      Is This Course Right for You?
    </h2>

    <div className="text-left text-emerald-100 text-lg mb-8 max-w-2xl mx-auto space-y-4">
      <p>Yes! This program is designed to empower learners from all walks of life</p>
      <p> College Students & Freshers - Kickstart your performance marketing career with hands-on training and become industry-ready in 12 Weeks.</p>
      <p> Career Switchers - Transition smoothly into the high-growth digital industry with practical tools, strategies, and real projects.</p>
      <p>Business Owners & Entrepreneurs - Learn to run profitable Meta & Google Ads campaigns and scale your business online.</p>
      <p>Job Seekers & Professionals - Build a strong digital portfolio with live campaign experience that makes you stand out in interviews.</p>
      <p>Freelancers & Side-Hustlers - Become a client-ready digital marketer and unlock opportunities to work independently.</p>
      <p>With Thinklane Media, you don’t just learn you practice, implement, and succeed.</p>
    </div>

    <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
    onClick={redirectToContactPageHandler}
    >
      Start Learning Today
    </button>
  </div>
</section>




<section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600  mt-4">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

  

    {/* SECTION 3: What You'll Learn */}
    <div className="text-left text-white text-lg mb-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2"></span>  What You Will Learn from This Course
      </h3>
      
      <ul className="space-y-3 text-emerald-100">
        <li> During these 12 weeks, you’ll gain hands-on expertise in:</li>
        <li> Meta Ads Mastery → Run high-converting campaigns, create funnels & retargeting strategies</li>
        <li> Google Ads Mastery → Search, Display, Video & Shopping campaigns for maximum ROI</li>
        <li>Google Analytics 4 (GA4) → Track conversions, analyse audience behaviour & optimize campaigns</li>
        <li>  Microsoft Clarity → Heatmaps, scroll tracking & improving landing page performance</li>
        <li>Resume & Portfolio Building → Showcase your projects to employers</li>
        <li>nterview Preparation → Mock interviews, job-oriented Q&A, and confidence-building techniques</li>
        <li>
           Capstone Project → Build a full paid marketing funnel with live Meta + Google campaigns
        </li>
        <li>
          By the end of this course, you’ll have the skills, portfolio, and confidence to land high-paying digital marketing roles or grow your business online
        </li>
      </ul>
    </div>

    {/* <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
    onClick={redirectToContactPageHandler}
    >
      Download Course Details
    </button> */}

    <div>
      {/* Trigger button */}
      <button
        className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(true)}
      >
        Download Course Details
      </button>

      {/* Modal with ContactUsPage inside */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ContactUsPageForModal onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  </div>
</section>


<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        Class Structure & Fee Details
      </h2>

      {/* Class Schedule */}
      <h3 className="text-xl font-semibold text-emerald-600 mb-2">Class Schedule</h3>
      <ol className="space-y-2 text-gray-700 mb-6">
        <li>Every Monday, Wednesday & Friday</li>
        <li> 1 Hour per session</li>
        <li> Live classes with step-by-step guidance</li>
        <li> Course Duration: 3 Months</li>
      </ol>

      {/* Doubt Solving */}
      <h3 className="text-xl font-semibold text-emerald-600 mb-2"> Doubt Solving & Q&amp;A</h3>
      <ul className="space-y-2 text-gray-700 mb-6">
        <li> Every Tuesday & Friday</li>
        <li> Interactive Q&amp;A with real campaign troubleshooting & feedback</li>
      </ul>

      {/* Group Learning */}
      <h3 className="text-xl font-semibold text-emerald-600 mb-2"> Group Learning Format</h3>
      <p className="text-gray-700 mb-4">
        All sessions are group classes with collaborative learning and discussion.
      </p>

      {/* Fee */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-4 rounded-lg mt-6">
        <h3 className="text-2xl font-bold text-emerald-700 mb-2"> Course Fee</h3>
        <p className="text-lg text-gray-900 font-semibold">
          ₹20,000 (One-Time Payment)
        </p>
        <p className="text-sm text-black mt-2">
          No hidden charges. All tools, templates & support included. Limited seats per batch.
        </p>
      </div>
    </div>
    <div className="lg:ml-10">
    <TestimonialCards/>
    </div>
    

  </div>
</section>

  <section className="py-4 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Text */}
    <div className="text-black">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
        Meet Our Mentor
      </h2>
      <p className="text-gray-600 mb-4">
        Learn from <span className="text-emerald-600 font-semibold">Rakesh Kumar</span>, 
        an industry leader in Performance Marketing with over <strong>8 years of hands-on experience</strong>.
      </p>
      <p className="text-gray-600 mb-6">
        Rakesh has worked with startups and Fortune 500 companies, managing multi-crore ad budgets and 
        generating high-ROI campaigns across Meta Ads and Google Ads.
      </p>
      
      {/* Achievements */}
      <ul className="space-y-3 mb-8 text-black">
        <li className="flex items-start">
          <span className="text-emerald-500 text-lg mr-2">✅</span>
          Trained over 1,000 students & professionals
        </li>
        <li className="flex items-start">
          <span className="text-emerald-500 text-lg mr-2">✅</span>
          Scaled 100+ businesses using data-driven strategies
        </li>
        <li className="flex items-start">
          <span className="text-emerald-500 text-lg mr-2">✅</span>
          Managed ad spends exceeding ₹5 Crore
        </li>
      </ul>

      {/* CTA */}
      <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg"
      onClick={handlerMentorDetails}
      >
        Know More
      </button>
    </div>

    {/* Right Column - Image */}
    <div className="relative">
      <img
        src="/mentor.jpg"
        alt="Rakesh Kumar"
        className="rounded-2xl shadow-xl object-cover w-full max-h-[500px]"
      />
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500 rounded-full opacity-20"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-20"></div>
    </div>

  </div>
</section>




      {/* Blog/News Section */}
      <section className="py-4">
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
