import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "254740061365";
  const message = encodeURIComponent(
    "Hello Komarock Works, I would like to inquire about your services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}