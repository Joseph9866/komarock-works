import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">K</span>
              </div>
              <span className="font-heading font-bold text-2xl">Komarock Works</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional media production, public speaking, and creative training services based in Nairobi, Kenya.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/254740061365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center hover:bg-sky-blue transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-sky-blue transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-sky-blue transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="text-gray-300 hover:text-sky-blue transition-colors duration-200">
                  Trainings
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-sky-blue transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-sky-blue transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Photography</li>
              <li className="text-gray-300">Videography</li>
              <li className="text-gray-300">Public Speaking</li>
              <li className="text-gray-300">Event Hosting</li>
              <li className="text-gray-300">Content Creation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+254740061365" className="text-gray-300 hover:text-sky-blue transition-colors duration-200">
                    +254 740 061 365
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                <a href="mailto:info@komarockworks.co.ke" className="text-gray-300 hover:text-sky-blue transition-colors duration-200">
                  info@komarockworks.co.ke
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2026 Komarock Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}