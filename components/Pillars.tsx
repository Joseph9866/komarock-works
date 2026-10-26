"use client";

import { Camera, Video, Mic, GraduationCap, Megaphone } from "lucide-react";
import { pillars } from "@/lib/data";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Video,
  Mic,
  GraduationCap,
  Megaphone,
};

export default function Pillars() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-navy mb-4">
            Five Core Expert Pillars
          </h2>
          <p className="text-xl text-muted-gray max-w-3xl mx-auto">
            Comprehensive creative and professional services designed to elevate your brand, amplify your message, and develop your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon];
            return (
              <div
                key={pillar.id}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="w-16 h-16 bg-royal-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-deep-navy transition-colors duration-200">
                  {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                </div>
                <h3 className="font-heading font-bold text-2xl text-deep-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-gray leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <Link
                  href="/services"
                  className="text-royal-blue font-semibold hover:text-deep-navy transition-colors duration-200 inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}