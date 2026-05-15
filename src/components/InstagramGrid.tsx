import { useLanguage } from "@/lib/i18n";
import { Copy } from "lucide-react";

export default function InstagramGrid() {
  const { t } = useLanguage();

  const INSTAGRAM_IMAGES = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=800&fit=crop", // Cafe Interior
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=800&fit=crop", // Guests
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=800&fit=crop", // Coffee Art
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=800&fit=crop", // Turkish breakfast
  ];

  return (
    <section className="py-16 px-4 bg-white border-y border-[#F5E6D3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333] mb-10">
          {t("instagramTitle")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM_IMAGES.map((img, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/food_mama_coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100 shadow-sm transition-shadow hover:shadow-lg focus:outline-none"
            >
              <img
                src={img}
                alt="Instagram feed"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-white bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full font-medium shadow-xl">
                    View on Instagram
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
