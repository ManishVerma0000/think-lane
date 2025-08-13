"use client"
import React, { useState } from 'react';
import { Star, Mail, MessageCircle, X, Instagram, Facebook } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Work experience' },
    { id: 'reviews', label: 'Reviews (30)' },
    { id: 'education', label: 'Education' },
    { id: 'availability', label: 'Availability' }
  ];

  const skills = [
    'User Interface',
    'User Experience', 
    'Interaction Design',
    '3D Design',
    'Information Architecture',
    'User Research',
    'Wireframing'
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
                  src='/mentor.jpg' 
                  alt="Nguyen Shane"
                  className="w-32 h-32 rounded-2xl object-cover"
                />
                {/* <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                  <span className="text-lg font-bold text-gray-600">#2</span>
                </div> */}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">Rahul Kumar</h1>
                  <span className="text-xl">🇬🇧</span>
                </div>
                <p className="text-gray-600 mb-3">
                  Passionate Software Engineer Crafting Innovative Solutions
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span>💬 Speaks: English</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">NATIVE</span>
                  <span>, Hindi</span>
                </div>
                
                {/* Rating Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      8
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">A highly rated and experienced tutor</div>
                      <div className="text-gray-500">SUPER TUTOR</div>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">Top 1%</div>
                      <div className="text-gray-500">ENGLISH TUTOR</div>
                    </div>
                  </div> */}
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
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
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
          {/* Left Column - About Content */}
          <div className="lg:col-span-2">
            {activeTab === 'about' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <div className="prose text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Greetings, fellow software enthusiasts! I'm thrilled to see your interest in exploring 
                    my profile. I'm Nguyen Shane, a 24-year-old software engineer from the United 
                    Kingdom. My educational path led me to earn a Bachelor's Degree in Computer 
                    Science, specializing in Software Engineering. With this qualification, I'm equipped 
                    to dive deep into the world of coding and development, ready to tackle exciting 
                    projects and contribute to cutting-edge technological advancements...
                  </p>
                  <button className="text-green-600 hover:text-green-700 font-medium">
                    See more
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'experience' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
                <p className="text-gray-600">Experience details would go here...</p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Reviews (30)</h2>
                <p className="text-gray-600">Student reviews would be displayed here...</p>
              </div>
            )}
            
            {activeTab === 'education' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <p className="text-gray-600">Educational background details...</p>
              </div>
            )}
            
            {activeTab === 'availability' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Availability</h2>
                <p className="text-gray-600">Schedule and availability information...</p>
              </div>
            )}
          </div>

          {/* Right Column - Contact Details */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Email Address
                  </h4>
                  <a 
                    href="mailto:hello@nguyen.shane.com" 
                    className="text-blue-600 hover:text-blue-700"
                  >
                    hello@nguyen.shane.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                    Social Media
                  </h4>
                  <div className="flex gap-3">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <Facebook className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <MessageCircle className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <Instagram className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
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
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Book a lesson
              </button>
              <button className="w-full border border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;