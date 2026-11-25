export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  bio: string;
  focusAreas: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Hon. (Amb.) Shawn Gitau Kariuki",
    role: "Managing Director",
    image: "/shawn.png",
    imageAlt: "Hon. (Amb.) Shawn Gitau Kariuki",
    imagePosition: "object-top",
    bio: "As Managing Director of Komarock Works, Hon. (Amb.) Shawn Gitau Kariuki leads strategic direction, high-level stakeholder relationships, and organizational growth. Drawing on diplomatic and public-facing leadership experience, he guides how Komarock Works positions clients, builds institutional partnerships, and delivers impactful media, campaign, and speaking engagements.",
    focusAreas: [
      "Executive Leadership",
      "Strategic Partnerships",
      "Public Diplomacy & Speaking",
      "Brand & Institutional Growth",
    ],
  },
  {
    name: "Miss Victoria Barasa Nabwire",
    role: "Deputy Managing Director",
    image: "/barasa.jpeg",
    imageAlt: "Miss Victoria Barasa Nabwire",
    imagePosition: "object-top",
    bio: "As Deputy Managing Director of Komarock Works, Miss Victoria Barasa Nabwire oversees day-to-day operations, project delivery, and cross-functional coordination across photography, videography, brand campaigns, and training initiatives. She ensures client briefs move smoothly from concept to polished execution with consistent quality and accountability.",
    focusAreas: [
      "Operations & Execution",
      "Creative & Campaign Direction",
      "Client Delivery",
      "Team & Program Coordination",
    ],
  },
];
