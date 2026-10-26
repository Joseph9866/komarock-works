import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Industry-leading quality standards with cinema-grade equipment and experienced creative professionals.",
    },
    {
      icon: Users,
      title: "Client-Centered Approach",
      description: "Every project begins with understanding your unique goals, audience, and brand identity.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "We deliver content and campaigns designed to drive tangible business outcomes and audience engagement.",
    },
    {
      icon: CheckCircle,
      title: "End-to-End Service",
      description: "From concept and production to distribution and analytics, we handle the complete creative workflow.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-navy mb-4">
            Why Choose Komarock Works
          </h2>
          <p className="text-xl text-muted-gray max-w-3xl mx-auto">
            We combine creative excellence with strategic thinking to deliver results that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-sky-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-deep-navy mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-gray leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}