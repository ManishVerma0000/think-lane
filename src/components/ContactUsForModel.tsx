"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsPageForModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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

       window.open(
    "https://thinklane.s3.ap-south-1.amazonaws.com/Performance+Marketing+Course.pdf",
    "_blank"
  );

      onClose(); // close modal after success
    } else {
      toast.error(data.error || "Failed to send message");
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
};


  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-black">CONTACT US</h1>
        <div className="w-16 h-1 bg-black mx-auto mt-2"></div>
      </div>

      <div className="space-y-5">
        {[
          { label: "Name", name: "name", type: "text", placeholder: "Full Name" },
          { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
          { label: "City", name: "city", type: "text", placeholder: "Your City" },
          { label: "Phone Number", name: "phone", type: "text", placeholder: "Your Phone Number" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-large text-gray-700 mb-1 text-start">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleInputChange}
              placeholder={field.placeholder}
              className="block w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactUsPageForModal;
