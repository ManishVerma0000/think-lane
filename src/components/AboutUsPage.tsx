import React from "react";
import {
  Users,
  Target,
  MessageCircle,
  Award,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const AboutUsPage: React.FC = () => {
  const benefits = [
    {
      number: "01",
      title: "Certification",
      description:
        "After completion of our comprehensive UX platform, all students will receive industry-recognized certification that validates their skills and expertise.",
      icon: <Award className="text-emerald-500" size={24} />,
    },
    {
      number: "02",
      title: "Relevant Cases",
      description:
        "Work with real-world case studies and projects from leading companies. Gain practical experience with actual design challenges.",
      icon: <Target className="text-emerald-500" size={24} />,
    },
    {
      number: "03",
      title: "Live Conversations",
      description:
        "Connect directly with industry experts and mentors through live sessions, Q&A, and interactive workshops.",
      icon: <MessageCircle className="text-emerald-500" size={24} />,
    },
    {
      number: "04",
      title: "Affordable Pricing",
      description:
        "Access world-class UX education at competitive prices. We believe quality education should be accessible to everyone.",
      icon: <BookOpen className="text-emerald-500" size={24} />,
    },
    {
      number: "05",
      title: "Lifetime Support",
      description:
        "Get continuous support even after course completion. Access our community, resources, and career guidance for life.",
      icon: <Users className="text-emerald-500" size={24} />,
    },
    {
      number: "06",
      title: "Placement Assistance",
      description:
        "Receive dedicated placement support with portfolio reviews, interview preparation, and direct connections to hiring partners.",
      icon: <Lightbulb className="text-emerald-500" size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* About Us Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  About Us
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-6">
                  WEEKENS UX Providing The Best Opportunities To The Students
                  Around The Globe.
                </h2>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  We are passionate about transforming lives through exceptional
                  UX education. Our comprehensive platform brings together
                  industry experts, real-world projects, and cutting-edge
                  curriculum to prepare students for successful careers in user
                  experience design.
                </p>
                <p>
                  Founded by leading professionals in the UX field, WEEKENS UX
                  Platform is designed to bridge the gap between academic
                  learning and industry requirements. We believe in practical,
                  hands-on learning that prepares students for the challenges of
                  modern design.
                </p>
                <p>
                  Our mission extends beyond just education - we're building a
                  global community of UX professionals who support each other
                  throughout their careers. From beginners to advanced
                  practitioners, we provide the tools, knowledge, and network
                  needed for success.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Modern workspace with laptop and design materials"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="text-blue-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">10k+</p>
                      <p className="text-sm text-gray-600">Global Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/api/placeholder/500/400"
                  alt="Colorful design elements and tools"
                  className="rounded-2xl w-full h-auto"
                />
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                  <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                </div>
                <div className="absolute bottom-8 left-4 bg-white p-3 rounded-full shadow-lg">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <div className="border-l-4 border-emerald-500 pl-6 mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Us
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-emerald-600 mb-6">
                  We are always working to provide you best of the features in
                  all aspects.
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  We stand out in the crowded online education space by offering
                  a unique blend of theoretical knowledge and practical
                  application. Our curriculum is constantly updated to reflect
                  the latest industry trends and best practices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Industry-Expert Instructors
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Real-World Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Flexible Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Career Support</span>
                  </div>
                </div>

                <p className="text-gray-600">
                  Our comprehensive approach ensures that every student not only
                  learns the fundamentals of UX design but also develops the
                  confidence and skills needed to excel in their chosen career
                  path.
                </p>

                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="border-l-4 border-emerald-500 pl-6 inline-block mb-6">
              <h2 className="text-left text-lg font-semibold text-emerald-600 mb-2">
                Our Benefits
              </h2>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              By Joining WEEKENS UX Platform, One Can Avail a Lot Of Benefits.
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unlock your potential with our comprehensive UX platform that
              offers unmatched value and support throughout your learning
              journey and beyond.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-bold text-gray-200">
                      {benefit.number}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career in UX Design?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already started their journey
            with WEEKENS UX Platform. Your future in UX design starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors">
              View Courses
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                15k+
              </div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Mentors</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
