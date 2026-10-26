"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/trainings", label: "Trainings" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-off-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">K</span>
            </div>
            <span className="font-heading font-bold text-2xl text-deep-navy">
              Komarock Works
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-slate hover:text-royal-blue font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-royal-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-deep-navy transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-slate hover:text-royal-blue"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-off-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-dark-slate hover:text-royal-blue font-medium py-2 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-deep-navy transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}