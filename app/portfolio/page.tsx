"use client";

import { useState } from "react";
import { portfolioItems } from "@/lib/data";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

type Category = "all" | "photography" | "videography" | "public-speaking" | "brand-campaigns";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxItem, setLightboxItem] = useState<string | null>(null);
  const [caseStudyItem, setCaseStudyItem] = useState<string | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All Work" },
    { id: "photography", label: "Photography" },
    { id: "videography", label: "Videography" },
    { id: "public-speaking", label: "Public Speaking" },
    { id: "brand-campaigns", label: "Brand Campaigns" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const lightboxPortfolioItem = portfolioItems.find((p) => p.id === lightboxItem);
  const caseStudyPortfolioItem = portfolioItems.find((p) => p.id === caseStudyItem);

  return (
    <>
      <section className="bg-deep-navy text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">Portfolio & Media Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            A curated selection of our work across photography, videography, public speaking, and brand campaigns.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? "bg-royal-blue text-white"
                    : "bg-off-white text-dark-slate hover:bg-deep-navy hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group bg-off-white rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
              >
                <div
                  className="aspect-video bg-deep-navy relative overflow-hidden"
                  onClick={() => setLightboxItem(item.id)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200">
                        {item.type === "video" ? (
                          <svg className="w-8 h-8 ml-1" fill="white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-300">
                        {item.type === "video" ? "Play Video" : "View Image"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal-blue">
                      {item.category.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-deep-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-gray mb-4">Client: {item.client}</p>
                  <button
                    onClick={() => setCaseStudyItem(item.id)}
                    className="text-royal-blue font-semibold hover:text-deep-navy transition-colors duration-200 inline-flex items-center text-sm"
                  >
                    View Case Study
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {lightboxPortfolioItem && (
        <Lightbox item={lightboxPortfolioItem} onClose={() => setLightboxItem(null)} />
      )}

      {caseStudyPortfolioItem && (
        <CaseStudyDrawer item={caseStudyPortfolioItem} onClose={() => setCaseStudyItem(null)} />
      )}
    </>
  );
}

function Lightbox({ item, onClose }: { item: typeof portfolioItems[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-sky-blue transition-colors"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>
      <div className="max-w-5xl w-full">
        <div className="aspect-video bg-deep-navy rounded-xl flex items-center justify-center">
          {item.type === "video" ? (
            <div className="text-center text-white p-8">
              <div className="w-24 h-24 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 ml-1" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-heading font-bold text-2xl mb-2">{item.title}</p>
              <p className="text-gray-300">Video preview placeholder</p>
            </div>
          ) : (
            <div className="text-center text-white p-8">
              <div className="w-24 h-24 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-heading font-bold text-2xl mb-2">{item.title}</p>
              <p className="text-gray-300">High-definition image preview</p>
            </div>
          )}
        </div>
        <div className="mt-6 text-center text-white">
          <h3 className="font-heading font-bold text-2xl mb-2">{item.title}</h3>
          <p className="text-gray-300">Client: {item.client}</p>
        </div>
      </div>
    </div>
  );
}

function CaseStudyDrawer({ item, onClose }: { item: typeof portfolioItems[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-2xl h-full overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-off-white p-6 flex justify-between items-center">
          <h2 className="font-heading font-bold text-2xl text-deep-navy">Case Study</h2>
          <button
            onClick={onClose}
            className="text-muted-gray hover:text-dark-slate transition-colors"
            aria-label="Close drawer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-royal-blue">
              {item.category.replace("-", " ")}
            </span>
            <h3 className="font-heading font-bold text-3xl text-deep-navy mt-2 mb-4">{item.title}</h3>
            <p className="text-muted-gray">Client: {item.client}</p>
          </div>

          <div className="aspect-video bg-deep-navy rounded-xl flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-20 h-20 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-4">
                {item.type === "video" ? (
                  <svg className="w-10 h-10 ml-1" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <p className="font-heading font-semibold">{item.title}</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl text-deep-navy mb-3 flex items-center">
              <ChevronLeft className="w-5 h-5 mr-2 text-royal-blue" />
              The Challenge
            </h4>
            <p className="text-muted-gray leading-relaxed">{item.challenge}</p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl text-deep-navy mb-3 flex items-center">
              <ChevronRight className="w-5 h-5 mr-2 text-royal-blue" />
              Measurable Outcomes
            </h4>
            <p className="text-muted-gray leading-relaxed">{item.outcome}</p>
          </div>

          <div className="bg-off-white p-6 rounded-xl">
            <h4 className="font-heading font-bold text-lg text-deep-navy mb-3">Interested in similar results?</h4>
            <p className="text-muted-gray mb-4">
              Let us discuss how we can bring this level of craft and strategic thinking to your next project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-navy transition-colors duration-200"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}