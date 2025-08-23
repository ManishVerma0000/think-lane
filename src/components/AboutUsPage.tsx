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
      title: "Practical, Hands-On Training",
      description:
        "Manage real Meta Ads & Google Ads campaigns. Learn to set up, run, and optimize campaigns like a pro.",
      icon: <Award className="text-emerald-500" size={24} />,
    },
    {
      number: "02",
      title: "Personal Mentorship",
      description:
        "Max 4 students per batch ensures individual attention. Get feedback on your campaigns, ad copies, and strategies.",
      icon: <Target className="text-emerald-500" size={24} />,
    },
    {
      number: "03",
      title: "Job-Ready Portfolio",
      description:
        "Build live projects during the course and confidently showcase your skills to recruiters.",
      icon: <MessageCircle className="text-emerald-500" size={24} />,
    },
    {
      number: "04",
      title: "Certification That Matters",
      description:
        "Earn an industry-recognized certificate and boost your credibility as a Digital Marketing Specialist.",
      icon: <BookOpen className="text-emerald-500" size={24} />,
    },
    {
      number: "05",
      title: "Complete 360° Curriculum",
      description:
        "Meta Ads Mastery, Google Ads, Analytics (GA4 & Clarity), Resume building, LinkedIn optimization & mock interviews.",
      icon: <Users className="text-emerald-500" size={24} />,
    },
    {
      number: "06",
      title: "Guaranteed Career Edge",
      description:
        "Learn the exact strategies businesses need in 2025 and get personal guidance to land your dream role.",
      icon: <Lightbulb className="text-emerald-500" size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  About Us
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-emerald-500 mb-6">
                  At ThinkLane Digital Academy, digital marketing isn’t just a skill — it’s a career accelerator.
                </h2>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Our mission is to empower learners with hands-on training, real-time campaign experience, and personal mentorship to make them industry-ready from day one.
                </p>
                <p>
                  With small batches of just 4 students per class, we focus on personalized attention so every learner masters the strategies to plan, execute, optimize, and scale campaigns that drive real results.
                </p>
                <p>
                  We go beyond theory — you’ll learn exactly what top agencies, brands, and businesses expect in a real-world environment.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/priscilla-du-preez-XkKCui44iM0-unsplash.jpg"
                  alt="ThinkLane Digital Academy Training"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/modern-equipped-computer-lab.jpg"
                  alt="Students learning digital marketing in a modern lab"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <div className="border-l-4 border-emerald-500 pl-6 mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Us
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-emerald-600 mb-6">
                  Hands-on learning, personal mentorship, and a career-focused curriculum.
                </h3>
              </div>

              <div className="space-y-6 text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hands-On Learning → Work on live Meta Ads & Google Ads campaigns</li>
                  <li>Small Batches, Big Impact → Max 4 students per class</li>
                  <li>Career-Oriented Curriculum → Ads, Analytics, Interview Prep & Resume Building</li>
                  <li>Job-Ready Training → Build a portfolio recruiters love</li>
                  <li>Personalized Mentorship → 1-on-1 guidance from an expert trainer</li>
                  <li>Certification Advantage → Industry-recognized certificate</li>
                  <li>Real-World Approach → Learn how agencies & startups actually run campaigns</li>
                </ul>
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
                Course Benefits
              </h2>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Learn Digital Marketing the Right Way.
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From managing live campaigns to building a job-ready portfolio, we prepare you for a thriving career in digital marketing.
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
            Ready to Accelerate Your Career in Digital Marketing?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join ThinkLane Digital Academy and gain real-world skills, mentorship, and a portfolio that recruiters love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors">
              View Curriculum
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
