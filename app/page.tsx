import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <WhyChooseUs />
      
      {/* Partner/Community Impact Section */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Partner & Community Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building stronger communities through creative empowerment and professional development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-slate p-8 rounded-xl">
              <div className="text-5xl font-heading font-bold text-sky-blue mb-4">500+</div>
              <h3 className="font-heading font-bold text-xl mb-2">Projects Delivered</h3>
              <p className="text-gray-300">
                Successful media productions, events, and campaigns across East Africa.
              </p>
            </div>
            <div className="bg-dark-slate p-8 rounded-xl">
              <div className="text-5xl font-heading font-bold text-sky-blue mb-4">200+</div>
              <h3 className="font-heading font-bold text-xl mb-2">Professionals Trained</h3>
              <p className="text-gray-300">
                Creative and communication skills developed through our training programs.
              </p>
            </div>
            <div className="bg-dark-slate p-8 rounded-xl">
              <div className="text-5xl font-heading font-bold text-sky-blue mb-4">50+</div>
              <h3 className="font-heading font-bold text-xl mb-2">Community Partners</h3>
              <p className="text-gray-300">
                Collaborations with organizations committed to youth empowerment and development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
