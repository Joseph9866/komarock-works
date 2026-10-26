"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function InquiryModal({ isOpen, onClose, serviceName }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceName || "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Close modal and reset form
    onClose();
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-off-white p-6 flex justify-between items-center">
          <h2 className="font-heading font-bold text-2xl text-deep-navy">
            Request Custom Quote
          </h2>
          <button
            onClick={onClose}
            className="text-muted-gray hover:text-dark-slate transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-dark-slate mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark-slate mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-dark-slate mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-dark-slate mb-2">
              Service of Interest
            </label>
            <input
              type="text"
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 border border-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
              placeholder={serviceName || "Select a service"}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-dark-slate mb-2">
              Project Details
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue resize-none"
              placeholder="Tell us about your project, timeline, and any specific requirements..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-deep-navy text-deep-navy px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy hover:text-white transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition-colors duration-200"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}