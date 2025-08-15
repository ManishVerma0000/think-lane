import { Star } from 'lucide-react';

export default function TestimonialCards() {
  const testimonials = [
    {
      id: 1,
      name: "Suraj Kapkoti",
      role: "Digital Marketing Manager",
      image: "/suraj.jpg",
      text: "The training gave me the exact skills I needed to land my role at Wolfpacklabs.",
      rating: 5
    },
    {
      id: 2,
      name: "Tansiha Arora ",
      role: "Marketing Consultant",
      image: "/tanisha.jpg",
      text: "Practical learning here helped me secure my dream job at BlaBliBlu Perfume.",
      rating: 5
    },
    {
      id: 3,
      name: "Garv Vij",
      role: "Business Owner",
      image: "/garv.jpg",
      text: "These classes boosted my confidence and got me placed at Katalyst.world.",
      rating: 5
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg p-8 flex flex-col justify-center space-y-6 ">
      <h1 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>Students Reviews</h1>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
        >
          {/* Left Content */}
          <div className="flex-1">
            {/* Testimonial Text */}
            <p className="text-gray-800 text-base mb-4 leading-relaxed">
              {testimonial.text}
            </p>
            
            {/* Author Info */}
            <div className="border-t border-gray-100 pt-4">
              <h4 className="font-semibold text-gray-900 text-lg">
                {testimonial.name}
              </h4>
              
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}