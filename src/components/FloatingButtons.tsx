import { MessageCircle, Phone, MapPin, Instagram, Send, Bike } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Glovo Button */}
      <a
        href="https://glovoapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#FFC244] text-[#00A082] flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="Glovo Delivery"
      >
        <Bike className="w-6 h-6" />
      </a>

      {/* Telegram Button */}
      <a
        href="https://t.me/food_mama_coffee"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#0088cc] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="Telegram"
      >
        <Send className="w-5 h-5 -ml-1" />
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/food_mama_coffee"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>

      {/* 2GIS Button */}
      <a
        href="https://2gis.kg/bishkek/search/Ankara%201%2F35"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#fbbc04] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="2GIS Location"
      >
        <MapPin className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+996706040582"
        className="w-12 h-12 rounded-full bg-[#4285f4] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button with Tooltip and Pulse */}
      <div className="relative group">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-[#333] px-3 py-1.5 rounded-xl shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {t("whatsappTooltip")}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45"></div>
        </div>

        <a
          href="https://wa.me/996706040582"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
          aria-label="WhatsApp"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40"></div>
          <MessageCircle className="w-8 h-8 relative z-10" />
        </a>
      </div>
    </div>
  );
}
