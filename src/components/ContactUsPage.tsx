"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
  });

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
      toast.error("Please fill in all fields");
      return;
    }

    try {
      toast.info("Sending...");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", city: "", phone: "" });
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:ml-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-1 sm:text-4xl">
            CONTACT US
          </h1>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Leave us a message
          </h2>

          <div className="space-y-5">
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Full Name" },
              { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
              { label: "City", name: "city", type: "text", placeholder: "Your City" },
              { label: "Phone Number", name: "phone", type: "text", placeholder: "Your Phone Number" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="block w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-black"
                />
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors text-white py-2.5 px-5 rounded-lg font-semibold text-sm sm:text-base"
            >
              Register Here
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactUsPage;
