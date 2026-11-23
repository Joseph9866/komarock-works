import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-deep-navy text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Speak. Create. Influence.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional media production, public speaking, and creative training services that elevate brands and empower voices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-royal-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-blue transition-colors duration-200 text-center"
              >
                Explore Services
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-deep-navy bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-deep-navy hover:text-white transition-all duration-200 text-center"
                style={{ borderColor: "#FFFFFF" }}
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="relative">
            <video
              src="/komarockvideo.mp4"
              className="aspect-video w-full rounded-2xl bg-dark-slate object-cover shadow-2xl"
              controls
              controlsList="nodownload"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Komarock Works showreel"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
