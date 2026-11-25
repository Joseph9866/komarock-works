import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Komarock Works | Speak. Create. Influence.",
  description:
    "Professional media production, public speaking, and creative training services. Photography, videography, event hosting, and sponsored short courses in Nairobi, Kenya.",
  keywords: [
    "Komarock Works",
    "Photography Nairobi",
    "Videography Kenya",
    "Public Speaking",
    "Event Hosting",
    "Media Production",
    "Training Courses",
    "Creative Agency",
  ],
  authors: [{ name: "Komarock Works" }],
  openGraph: {
    title: "Komarock Works | Speak. Create. Influence.",
    description:
      "Professional media production, public speaking, and creative training services.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-dark-slate" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
