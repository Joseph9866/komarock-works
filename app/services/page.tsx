"use client";

import { useState } from "react";
import { services, contentTiers } from "@/lib/data";
import InquiryModal from "@/components/InquiryModal";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const mediaServices = services.filter((s) => s.category === "media-production");
  const speakingServices = services.filter((s) => s.category === "public-speaking");

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-navy text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Comprehensive media production and public speaking services tailored to your unique goals. Every project begins with a conversation.
          </p>
        </div>
      </section>

      {/* Media Production Services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading font-bold text-4xl text-deep-navy mb-4">Branch A: Media Production</h2>
            <p className="text-xl text-muted-gray">
              Professional photography, videography, and content production services for brands, organizations, and events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {mediaServices.map((service) => (
              <div key={service.id} className="bg-off-white p-8 rounded-xl">
                <h3 className="font-heading font-bold text-2xl text-deep-navy mb-3">{service.title}</h3>
                <p className="text-muted-gray leading-relaxed mb-6">{service.description}</p>
                {service.features && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  onClick={() => handleOpenModal(service.title)}
                  className="bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition-colors duration-200"
                >
                  Request Custom Quote
                </button>
              </div>
            ))}
          </div>

          {/* Content Management Tiers */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-3xl text-deep-navy mb-4">Weekly Digital Content Management</h3>
            <p className="text-lg text-muted-gray mb-8">
              Structured content partnership tiers designed to match your brand&apos;s growth stage and communication needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {contentTiers.map((tier) => (
                <div key={tier.id} className="bg-white border-2 border-royal-blue p-8 rounded-xl">
                  <h4 className="font-heading font-bold text-2xl text-deep-navy mb-2">{tier.name}</h4>
                  <p className="text-royal-blue font-semibold mb-6">{tier.tagline}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-slate text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleOpenModal(`Content Management - ${tier.name}`)}
                    className="w-full bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition-colors duration-200"
                  >
                    Request Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Public Speaking Services */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading font-bold text-4xl text-deep-navy mb-4">Branch B: Public Speaking & Coaching</h2>
            <p className="text-xl text-muted-gray">
              Professional hosting, keynote delivery, and executive coaching for leaders, speakers, and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {speakingServices.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl">
                <h3 className="font-heading font-bold text-2xl text-deep-navy mb-3">{service.title}</h3>
                <p className="text-muted-gray leading-relaxed mb-6">{service.description}</p>
                {service.features && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-royal-blue mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  onClick={() => handleOpenModal(service.title)}
                  className="bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition-colors duration-200"
                >
                  Request Custom Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService}
      />
    </>
  );
}
