import { coreValues, orgStructure } from "@/lib/data";
import { Target, Eye, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-deep-navy text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">About Komarock Works</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            A Nairobi-based creative studio and professional development partner, committed to elevating brands, empowering voices, and strengthening communities through the power of media and communication.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-deep-navy mb-6">Our Story</h2>
              <p className="text-lg text-muted-gray leading-relaxed mb-4">
                Komarock Works was founded on a simple but powerful belief: that authentic storytelling, professional communication, and creative excellence can transform organizations and uplift communities.
              </p>
              <p className="text-lg text-muted-gray leading-relaxed mb-4">
                What began as a small photography initiative in the Komarock estate has grown into a full-service media production house, public speaking consultancy, and creative training academy serving clients across East Africa.
              </p>
              <p className="text-lg text-muted-gray leading-relaxed">
                Today, we partner with brands, institutions, and community organizations to produce work that is visually compelling, strategically sound, and rooted in the real experiences of the people we serve.
              </p>
            </div>
            <div className="bg-off-white rounded-2xl p-8">
              <div className="aspect-square bg-deep-navy rounded-xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="font-heading font-bold text-3xl">K</span>
                  </div>
                  <p className="font-heading font-bold text-2xl mb-2">Est. Komarock, Nairobi</p>
                  <p className="text-gray-300">Rooted in community. Built for impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl">
              <div className="w-16 h-16 bg-royal-blue rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-deep-navy mb-4">Our Mission</h3>
              <p className="text-muted-gray leading-relaxed text-lg">
                To deliver professional media production, public speaking, and creative training services that empower brands, develop talent, and create measurable impact for organizations and communities across the region.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl">
              <div className="w-16 h-16 bg-royal-blue rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-deep-navy mb-4">Our Vision</h3>
              <p className="text-muted-gray leading-relaxed text-lg">
                To be East Africa's most trusted creative and professional development partner, recognized for the quality of our work, the integrity of our process, and the lasting impact we create for every client and community we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-gray max-w-3xl mx-auto">
              The principles that guide every project, partnership, and decision at Komarock Works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-off-white p-8 rounded-xl">
                <div className="w-12 h-12 bg-deep-navy rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-sky-blue" />
                </div>
                <h3 className="font-heading font-bold text-xl text-deep-navy mb-3">{value.title}</h3>
                <p className="text-muted-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-navy mb-4">Organizational Structure</h2>
            <p className="text-xl text-muted-gray max-w-3xl mx-auto">
              A clear leadership framework ensuring accountability, quality, and strategic direction across all departments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-deep-navy text-white p-8 rounded-xl text-center w-80">
                <h3 className="font-heading font-bold text-xl mb-2">{orgStructure.managingDirector.name}</h3>
                <p className="text-sky-blue">{orgStructure.managingDirector.title}</p>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-8 bg-royal-blue"></div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="bg-royal-blue text-white p-8 rounded-xl text-center w-80">
                <h3 className="font-heading font-bold text-xl mb-2">{orgStructure.deputyManagingDirector.name}</h3>
                <p className="text-sky-blue">{orgStructure.deputyManagingDirector.title}</p>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-3xl relative h-8">
                <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-royal-blue"></div>
                <div className="absolute top-4 left-[16.67%] right-[16.67%] h-0.5 bg-royal-blue"></div>
                <div className="absolute top-4 left-[16.67%] w-0.5 h-4 bg-royal-blue"></div>
                <div className="absolute top-4 left-1/2 w-0.5 h-4 bg-royal-blue"></div>
                <div className="absolute top-4 right-[16.67%] w-0.5 h-4 bg-royal-blue"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {orgStructure.departments.map((dept, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border-2 border-royal-blue">
                  <h3 className="font-heading font-bold text-lg text-deep-navy mb-2">{dept.name}</h3>
                  <p className="text-royal-blue font-semibold mb-3">{dept.head}</p>
                  <p className="text-muted-gray text-sm leading-relaxed">{dept.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}