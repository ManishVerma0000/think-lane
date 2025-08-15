"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (Object.values(formData).some((field) => field.trim() === "")) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setStatus("Sending...");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", city: "", phone: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="w-full lg:ml-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">CONTACT US</h1>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Leave us a message</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Your City"
                className="block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className="block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Type your message..."
                className="block w-full px-4 py-2 border rounded-lg resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold"
            >
              Send
            </button>

            {status && <p className="mt-2 text-sm">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
