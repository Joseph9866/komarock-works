export interface Service {
  id: string;
  title: string;
  category: "media-production" | "public-speaking" | "training";
  description: string;
  features?: string[];
}

export const services: Service[] = [
  {
    id: "commercial-photography",
    title: "Commercial Photography",
    category: "media-production",
    description:
      "High-impact product, brand, and editorial photography crafted to elevate your commercial presence across print and digital channels.",
    features: [
      "Product and brand photography",
      "Editorial and lifestyle shoots",
      "Professional retouching and color grading",
      "Full commercial usage licensing",
    ],
  },
  {
    id: "corporate-events",
    title: "Corporate Events Coverage",
    category: "media-production",
    description:
      "Comprehensive photographic and video documentation of conferences, AGMs, product launches, and corporate functions.",
    features: [
      "Multi-camera event coverage",
      "Same-day highlight edits",
      "Branded photo galleries",
      "Post-event archival delivery",
    ],
  },
  {
    id: "cinematic-videography",
    title: "Cinematic Videography",
    category: "media-production",
    description:
      "Cinematic storytelling for brands, documentaries, and promotional campaigns, delivered with professional color science and sound design.",
    features: [
      "4K cinematic production",
      "Professional color grading",
      "Licensed music and sound design",
      "Multi-format deliverables",
    ],
  },
  {
    id: "documentaries",
    title: "Documentary Production",
    category: "media-production",
    description:
      "Long-form documentary storytelling that captures authentic narratives, community impact, and organizational journeys.",
    features: [
      "Pre-production research and scripting",
      "Field production with cinema-grade equipment",
      "Post-production editing and mastering",
      "Distribution-ready deliverables",
    ],
  },
  {
    id: "interviews",
    title: "Interview Production",
    category: "media-production",
    description:
      "Professionally produced interview segments for podcasts, thought leadership, and brand storytelling.",
    features: [
      "Multi-camera studio or on-location setups",
      "Teleprompter and direction support",
      "Professional audio capture",
      "Edited masters with branded lower thirds",
    ],
  },
  {
    id: "podcasting",
    title: "Podcast Production",
    category: "media-production",
    description:
      "End-to-end podcast production services including recording, editing, mixing, and distribution support.",
    features: [
      "Studio or remote recording setups",
      "Audio editing and mastering",
      "Show notes and metadata",
      "Distribution to major platforms",
    ],
  },
  {
    id: "event-mcing",
    title: "Event MCing and Hosting",
    category: "public-speaking",
    description:
      "Professional master of ceremonies services for corporate events, galas, conferences, and community gatherings.",
    features: [
      "Pre-event scripting and run-of-show planning",
      "Bilingual hosting (English and Swahili)",
      "Audience engagement and crowd control",
      "Brand-aligned tone and delivery",
    ],
  },
  {
    id: "keynote-hosting",
    title: "Keynote Hosting",
    category: "public-speaking",
    description:
      "Dynamic keynote hosting for summits, product launches, and high-profile public engagements.",
    features: [
      "Custom keynote scripting",
      "Stage presence coaching",
      "Technical rehearsal coordination",
      "Live audience interaction",
    ],
  },
  {
    id: "camera-confidence",
    title: "Camera Confidence Coaching",
    category: "public-speaking",
    description:
      "One-on-one coaching to help professionals present with authority and authenticity on camera.",
    features: [
      "On-camera presence training",
      "Voice modulation and pacing",
      "Body language refinement",
      "Recorded practice sessions with feedback",
    ],
  },
  {
    id: "stage-coaching",
    title: "Stage Presence Coaching",
    category: "public-speaking",
    description:
      "Intensive coaching for speakers preparing for keynote addresses, panel discussions, or public appearances.",
    features: [
      "Speech structure and narrative design",
      "Delivery and projection techniques",
      "Audience engagement strategies",
      "Mock presentation rehearsals",
    ],
  },
];

export const contentTiers = [
  {
    id: "bronze",
    name: "Bronze",
    tagline: "Essential Digital Presence",
    features: [
      "4 professionally produced posts per week",
      "Basic graphic design and caption writing",
      "Monthly performance summary",
      "Single platform management",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    tagline: "Consistent Brand Growth",
    features: [
      "Daily content across two platforms",
      "Professional photography and short-form video",
      "Bi-weekly strategy reviews",
      "Community engagement management",
      "Monthly content calendar",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "Full-Scale Content Partnership",
    features: [
      "Daily multi-platform content production",
      "Weekly high-quality video reels",
      "Dedicated content strategist",
      "Advanced analytics and reporting",
      "Campaign planning and execution",
      "Priority turnaround on deliverables",
    ],
  },
];

export const trainingCourses = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    duration: "1 Month",
    certificateFee: 500,
    capacity: 20,
    enrolled: 14,
    description:
      "A comprehensive introduction to visual communication, covering typography, layout, color theory, and industry-standard design software.",
    modules: [
      "Design fundamentals and principles",
      "Typography and layout composition",
      "Color theory and brand identity",
      "Adobe Creative Suite essentials",
      "Portfolio development",
    ],
  },
  {
    id: "public-speaking",
    title: "Public Speaking",
    duration: "1 Month",
    certificateFee: 500,
    capacity: 15,
    enrolled: 9,
    description:
      "Build confidence, clarity, and command as a speaker through practical exercises, live coaching, and real-world presentation opportunities.",
    modules: [
      "Overcoming stage anxiety",
      "Speech structure and storytelling",
      "Voice projection and modulation",
      "Audience engagement techniques",
      "Live presentation capstone",
    ],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    duration: "1 Month",
    certificateFee: 500,
    capacity: 25,
    enrolled: 18,
    description:
      "An accessible, practical introduction to artificial intelligence concepts, tools, and applications for creative and business professionals.",
    modules: [
      "AI fundamentals and terminology",
      "Generative AI tools for content creation",
      "Prompt engineering essentials",
      "AI integration in business workflows",
      "Ethics and responsible AI use",
    ],
  },
];

export const portfolioItems = [
  {
    id: "corporate-summit-2024",
    title: "Nairobi Corporate Summit 2024",
    category: "photography",
    type: "image",
    thumbnail: "/portfolio/summit.jpg",
    client: "Regional Business Forum",
    challenge:
      "Document a three-day executive summit with over 40 speakers and 1,200 attendees while delivering same-day social media assets.",
    outcome:
      "Delivered 850+ edited images within 48 hours and produced a highlight reel viewed by over 25,000 stakeholders across partner channels.",
  },
  {
    id: "brand-campaign-heritage",
    title: "Heritage Brand Campaign",
    category: "brand-campaigns",
    type: "image",
    thumbnail: "/portfolio/heritage.jpg",
    client: "Heritage Lifestyle Group",
    challenge:
      "Reposition a legacy lifestyle brand for a younger demographic through a cohesive visual campaign across print and digital.",
    outcome:
      "Campaign assets drove a 42% increase in social engagement and a 28% uplift in qualified leads within the first quarter.",
  },
  {
    id: "community-documentary",
    title: "Voices of Komarock",
    category: "videography",
    type: "video",
    thumbnail: "/portfolio/komarock.jpg",
    client: "Komarock Community Initiative",
    challenge:
      "Produce a short documentary capturing the lived experiences and aspirations of young creatives in the Komarock estate.",
    outcome:
      "Screened at three regional film festivals and adopted as an advocacy tool by two county-level youth programs.",
  },
  {
    id: "keynote-tech-conference",
    title: "TechConnect Keynote Address",
    category: "public-speaking",
    type: "image",
    thumbnail: "/portfolio/keynote.jpg",
    client: "TechConnect Africa",
    challenge:
      "Host a 90-minute keynote panel featuring five industry leaders on the future of creative technology in East Africa.",
    outcome:
      "Session rated 4.8 out of 5 by attendees and generated over 1,500 social media mentions during the live broadcast.",
  },
  {
    id: "product-launch-luxury",
    title: "Luxe Collection Product Launch",
    category: "photography",
    type: "image",
    thumbnail: "/portfolio/luxe.jpg",
    client: "Luxe Collections Kenya",
    challenge:
      "Create a premium product photography series for a luxury fashion launch across e-commerce and billboard placements.",
    outcome:
      "Launch campaign achieved a 3.2x return on ad spend and secured featured placement in two regional lifestyle publications.",
  },
  {
    id: "ngo-impact-documentary",
    title: "Bridges of Impact",
    category: "videography",
    type: "video",
    thumbnail: "/portfolio/bridges.jpg",
    client: "East Africa Development Trust",
    challenge:
      "Produce an impact documentary showcasing the measurable outcomes of a five-year education initiative across three counties.",
    outcome:
      "Documentary supported a successful donor renewal cycle, contributing to a 60% increase in program funding for the following year.",
  },
];

export const pillars = [
  {
    id: "photography",
    title: "Photography",
    description:
      "Commercial, editorial, and event photography that communicates brand story with precision and visual authority.",
    icon: "Camera",
  },
  {
    id: "videography",
    title: "Videography",
    description:
      "Cinematic video production, documentaries, and digital content crafted for audience engagement and brand elevation.",
    icon: "Video",
  },
  {
    id: "public-speaking",
    title: "Public Speaking & Hosting",
    description:
      "Professional MC services, keynote hosting, and executive speaking coaching for high-impact public engagements.",
    icon: "Mic",
  },
  {
    id: "trainings",
    title: "Trainings & Workshops",
    description:
      "Hands-on creative and professional development programs designed to build practical, career-ready skills.",
    icon: "GraduationCap",
  },
  {
    id: "media-content",
    title: "Media & Content Creation",
    description:
      "End-to-end digital content management, from strategy and production to distribution and performance analytics.",
    icon: "Megaphone",
  },
];

export const coreValues = [
  {
    title: "Authenticity",
    description:
      "We tell true stories. Every frame, every word, and every engagement is rooted in honest representation of our clients and their communities.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest professional standards in craft, delivery, and client partnership, regardless of project scale.",
  },
  {
    title: "Impact",
    description:
      "We measure success by the tangible outcomes our work creates for brands, communities, and the individuals we train and mentor.",
  },
  {
    title: "Innovation",
    description:
      "We continuously adopt emerging tools, techniques, and creative approaches to keep our clients ahead of industry shifts.",
  },
];

