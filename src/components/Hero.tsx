import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const IMAGES = [
  "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1600&h=900&fit=crop", // Breakfast
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&h=900&fit=crop", // Salad
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&h=900&fit=crop", // Main
  "https://images.unsplash.com/photo-1513104890e38-7c7344062a4a?w=1600&h=900&fit=crop", // Pizza
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1600&h=900&fit=crop", // Sushi
  "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=1600&h=900&fit=crop", // Desserts
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] bg-[#333] overflow-hidden flex items-center justify-center">
      {/* Background Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentImageIndex}
          src={IMAGES[currentImageIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 pointer-events-none mix-blend-multiply" />

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-50 flex gap-2">
        {["ky", "ru", "en"].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
              language === lang
                ? "bg-[#E8734A] text-white shadow-lg scale-110"
                : "bg-white/90 text-[#333] hover:bg-white"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Logo in top-left corner */}
      <div className="absolute top-4 left-4 z-50">
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/logo.jpg" 
          alt="Food Mama Logo" 
          className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full shadow-lg border-2 border-white/20"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/100x100/4a3b32/f3a6b6?text=FM";
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-md"
        >
          Food Mama
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-3xl text-[#FFF8F0] font-medium mb-8 drop-shadow-sm"
        >
          {t("heroSlogan")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-xl text-white font-medium"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {t("openNow")}
        </motion.div>
      </div>
    </section>
  );
}
