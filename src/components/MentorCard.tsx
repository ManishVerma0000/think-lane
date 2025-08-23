"use client";
import React, { useState } from "react";
import {Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfilePage: React.FC = () => {
  const router=useRouter()
  const [activeTab, setActiveTab] = useState("about");
  function handlerMentorDetails(){
  router.push('/book-consulations')
}


  const tabs = [
    { id: "about", label: "About" },
    // { id: "experience", label: "Work Experience" },
    // { id: "reviews", label: "Reviews (30)" },
    // { id: "education", label: "Education" },
    // { id: "availability", label: "Availability" },
  ];

  const skills = [
    "Meta Ads (Facebook & Instagram)",
    "Google Ads (Search, Display, YouTube)",
    "Amazon Sponsored Ads",
    "Paid Media Strategy",
    "Budget Management",
    "Campaign Optimization",
    "Data Analysis",
    "ROI-Focused Scaling",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Profile Image and Basic Info */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="relative">
                <img
                  src="/mentor.jpg"
                  alt="Rakesh Kumar"
                  className="w-32 h-32 rounded-2xl object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Rakesh Kumar
                  </h1>
                  <span className="text-xl">🇮🇳</span>
                </div>
                <p className="text-gray-600 mb-3">
                  🚀 Performance Marketing Consultant
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span>💬 Speaks: English, Hindi</span>
                </div>

                {/* Rating Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      8+
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">
                        Years of experience
                      </div>
                      <div className="text-gray-500">Paid Media Expert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {activeTab === "about" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-700 leading-relaxed">
                  I’m a freelance performance marketing consultant with a proven
                  track record of helping D2C brands scale profitably using paid
                  media.  
                  <br />
                  With over ₹5.4 Cr+ in ad spend managed and ₹24 Cr+ in revenue
                  generated, I bring data-driven strategies that focus on ROI —
                  not just ROAS.  
                  <br />
                  My core expertise lies in building and scaling
                  high-performing campaigns across Meta (Facebook & Instagram),
                  Google, and Amazon Ads.
                </p>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    Senior Manager - Performance Marketing @ Wolfpack Labs
                    (Dec 2024 - Jul 2025)
                  </li>
                  <li>
                    Performance Marketing Manager @ 1verse (Jan 2024 - Nov 2024)
                  </li>
                  <li>
                    Manager - Performance Marketing @ Big Cash (Jun 2023 - Sep
                    2023)
                  </li>
                  <li>
                    Assistant Marketing Manager @ Quadrific Media (Sep 2021 -
                    Apr 2023)
                  </li>
                  <li>
                    Senior SEM Executive @ Adda52.com (Mar 2019 - Sep 2021)
                  </li>
                  <li>
                    Digital Marketing Executive @ Techspakes.com (Jun 2017 - Feb
                    2019)
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "education" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <p className="text-gray-700">
                  Associate's degree in Computer Science — IEC University
                  (2016-2019)
                </p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">
                    Email Address
                  </h4>
                  <p
                    // href="mailtorakeshkumar94@gmail.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                     rakesh@thinklane.in
                    </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase mb-3">
                    Social Media
                  </h4>
                  <div className="flex gap-3">
                    

                    <a className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    href="https://www.linkedin.com/in/rakesh-kumar1994/"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
              onClick={handlerMentorDetails}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
