"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceCategory: "",
    projectDate: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceCategory: "",
        projectDate: "",
        message: "",
      });
    }, 3000);
  };

  const serviceCategories = [
    "Commercial Photography",
    "Corporate Events",
    "Cinematic Videography",
    "Documentary Production",
    "Interview Production",
    "Podcast Production",
    "Event MCing and Hosting",
    "Keynote Hosting",
    "Camera Confidence Coaching",
    "Stage Presence Coaching",
    "Content Management",
    "Training Programs",
    "Other",
  ];

  return (
    <>
      <section className="bg-deep-navy text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">Contact & Booking</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Ready to start your project? Get in touch with our team to discuss your vision and requirements.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading font-bold text-4xl text-deep-navy mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-gray mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours to discuss your project.
              </p>

              {isSubmitted ? (
                <div className="bg-sky-blue/10 border-2 border-royal-blue p-6 rounded-xl text-center">
                  <h3 className="font-heading font-bold text-xl text-deep-navy mb-2">Thank You!</h3>
                  <p className="text-muted-gray">
                    Your message has been received. We will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-semibold text-dark-slate mb-2">
                      Service Category
                    </label>
                    <select
                      id="serviceCategory"
                      required
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-3 border border-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                    >
                      <option value="">Select a service</option>
                      {serviceCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectDate" className="block text-sm font-semibold text-dark-slate mb-2">
                      Preferred Project Date
                    </label>
                    <input
                      type="date"
                      id="projectDate"
                      value={formData.projectDate}
                      onChange={(e) => setFormData({ ...formData, projectDate: e.target.value })}
                      className="w-full px-4 py-3 border border-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-slate mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-royal-blue text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-deep-navy transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="bg-off-white p-8 rounded-xl mb-8">
                <h3 className="font-heading font-bold text-2xl text-deep-navy mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-royal-blue rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-deep-navy mb-1">Phone / WhatsApp</h4>
                      <a
                        href="tel:+254740061365"
                        className="text-muted-gray hover:text-royal-blue transition-colors duration-200"
                      >
                        +254 740 061 365
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-royal-blue rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-deep-navy mb-1">Email</h4>
                      <a
                        href="mailto:info@komarockworks.co.ke"
                        className="text-muted-gray hover:text-royal-blue transition-colors duration-200"
                      >
                        info@komarockworks.co.ke
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-royal-blue rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-deep-navy mb-1">Location</h4>
                      <p className="text-muted-gray">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-deep-navy text-white p-8 rounded-xl">
                <h3 className="font-heading font-bold text-2xl mb-4">Quick WhatsApp Contact</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Prefer to chat directly? Reach out to us on WhatsApp for immediate assistance.
                </p>
                <a
                  href="https://wa.me/254740061365?text=Hello%20Komarock%20Works%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-blue transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-sky-blue/10 p-8 rounded-xl mt-8">
                <h3 className="font-heading font-bold text-2xl text-deep-navy mb-4">Payment Information</h3>
                <p className="text-muted-gray mb-4 leading-relaxed">
                  For training course registrations and service deposits, we accept payments via Lipa na M-Pesa.
                </p>
                <div className="bg-white p-4 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-gray font-semibold">Till Number:</span>
                    <span className="font-heading font-bold text-deep-navy">714888</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-gray font-semibold">Account Number:</span>
                    <span className="font-heading font-bold text-deep-navy">215097</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-gray font-semibold">Account Name:</span>
                    <span className="font-heading font-bold text-deep-navy">Komarock Works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}