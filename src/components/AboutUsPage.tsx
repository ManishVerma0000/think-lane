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
      title: "Proven Strategies",
      description:
        "We craft data-driven marketing strategies that have helped hundreds of businesses boost their visibility, leads, and sales.",
      icon: <Award className="text-emerald-500" size={24} />,
    },
    {
      number: "02",
      title: "Real Results",
      description:
        "From increasing website traffic to improving conversion rates, we deliver measurable results you can track and trust.",
      icon: <Target className="text-emerald-500" size={24} />,
    },
    {
      number: "03",
      title: "Direct Communication",
      description:
        "We keep you in the loop with transparent reporting, regular updates, and open conversations about your campaigns.",
      icon: <MessageCircle className="text-emerald-500" size={24} />,
    },
    {
      number: "04",
      title: "Affordable Plans",
      description:
        "Our tailored packages are designed to suit businesses of all sizes, ensuring maximum ROI without breaking the bank.",
      icon: <BookOpen className="text-emerald-500" size={24} />,
    },
    {
      number: "05",
      title: "Ongoing Support",
      description:
        "From campaign launch to ongoing optimization, our team is always here to guide and support your growth.",
      icon: <Users className="text-emerald-500" size={24} />,
    },
    {
      number: "06",
      title: "Growth Partnerships",
      description:
        "We build long-term partnerships with our clients, acting as an extension of your marketing team.",
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
                <h2 className="text-2xl lg:text-3xl font-semibold text-emerald-500 mb-6">
                  Driving Growth & Visibility for Businesses Worldwide.
                </h2>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  We are a full-service digital marketing agency dedicated to
                  helping businesses grow their online presence, generate more
                  leads, and increase revenue.
                </p>
                <p>
                  Our team of strategists, creatives, and tech experts work
                  together to create impactful campaigns across SEO, social
                  media, paid advertising, content marketing, and more.
                </p>
                <p>
                  We believe in building strong, lasting partnerships with our
                  clients — delivering not just campaigns, but long-term growth
                  strategies tailored to your unique goals.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/priscilla-du-preez-XkKCui44iM0-unsplash.jpg"
                  alt="Digital marketing workspace with analytics dashboard"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                
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
                  src="/modern-equipped-computer-lab.jpg"
                  alt="Marketing strategy and creative tools"
                  className="rounded-2xl w-full h-auto"
                />
                {/* Floating Elements */}
                
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <div className="border-l-4 border-emerald-500 pl-6 mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Us
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-emerald-600 mb-6">
                  We combine creativity, technology, and data to deliver
                  exceptional results.
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  Unlike many agencies, we don’t believe in one-size-fits-all
                  marketing. Every strategy is personalized to your business
                  goals and audience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">SEO & Content Experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Social Media Specialists
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Data-Driven Campaigns
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Dedicated Account Managers
                    </span>
                  </div>
                </div>

                <p className="text-gray-600">
                  We measure success by your business growth — more traffic,
                  better engagement, and higher conversions.
                </p>

                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Let’s Grow Your Brand
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
              Partnering With Us Means More Than Just Marketing.
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We go beyond running ads — we craft experiences, tell stories, and
              build strategies that make your brand unforgettable.
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
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Let’s create a marketing strategy that gets real results and grows
            your brand faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors">
              View Our Services
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
                500+
              </div>
              <div className="text-gray-600">Brands Served</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">150%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Marketing Experts</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Client Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
