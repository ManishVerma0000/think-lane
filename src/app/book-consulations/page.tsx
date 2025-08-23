"use client";
import BookConsultationForm from "@/components/BookConsultationForm";

export default function ContactUs() {
  return (
    <div className="flex justify-center mt-4 bg-gradient-to-r from-emerald-600 to-blue-600">
      <div className="w-full lg:max-w-5xl mb-2">
        <BookConsultationForm />
      </div>
    </div>
  );
}
