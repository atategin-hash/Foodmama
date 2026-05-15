import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { ChefHat, ConciergeBell, Coffee, SprayCan } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AboutUs() {
  const { t } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ROLES = [
    { id: "waiter", titleKey: "roleWaiter", icon: ConciergeBell },
    { id: "chef", titleKey: "roleChef", icon: ChefHat },
    { id: "barista", titleKey: "roleBarista", icon: Coffee },
    { id: "cleaner", titleKey: "roleCleaner", icon: SprayCan },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedRole(null);
    }, 4000);
  };

  return (
    <footer className="bg-[#FFF8F0] py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-8">
          {t("careerTitle")}
        </h2>
        
        <p className="text-xl md:text-2xl text-[#E8734A] italic font-medium mb-12">
          {t("aboutWarmSentence")}
        </p>

        {/* Career Application Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#333] mb-6">{t("applyNow")}</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {ROLES.map((role) => {
              const Icon = role.icon;
              const isActive = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => {
                    setSelectedRole(isActive ? null : role.id);
                    setIsSubmitted(false);
                  }}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 shadow-md border ${
                    isActive 
                      ? "bg-[#E8734A] text-white border-[#E8734A] scale-105" 
                      : "bg-white text-[#555] border-[#F5E6D3] hover:border-[#E8734A] hover:text-[#E8734A]"
                  }`}
                >
                  <Icon className="w-8 h-8 mb-3" />
                  <span className="text-sm font-semibold">{t(role.titleKey)}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {selectedRole && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#F5E6D3] max-w-lg mx-auto">
                  {isSubmitted ? (
                    <div className="text-green-600 font-bold text-lg py-8">
                      {t("formSuccess")}
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                      <div>
                        <label className="block text-[#555] font-medium mb-1">{t("formName")}</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8734A]/50 focus:border-[#E8734A]"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div>
                        <label className="block text-[#555] font-medium mb-1">{t("formPhone")}</label>
                        <input 
                          type="tel" 
                          required 
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8734A]/50 focus:border-[#E8734A]"
                          placeholder="+996 555 123 456"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="mt-2 w-full bg-[#E8734A] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66138] transition-colors shadow-md"
                      >
                        {t("formSubmit")}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#F5E6D3]">
          
          <div className="space-y-4">
            <h3 className="text-[#333] font-bold text-lg mb-2 uppercase tracking-wider">{t("email")}</h3>
            <a href="mailto:atategin@gmail.com" className="text-[#E8734A] hover:underline text-xl">
              atategin@gmail.com
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#333] font-bold text-lg mb-2 uppercase tracking-wider">{t("phone")}</h3>
            <a href="tel:+996706040582" className="text-[#E8734A] hover:underline text-xl">
              +996 706 040 582
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#333] font-bold text-lg mb-2 uppercase tracking-wider">{t("address")}</h3>
            <p className="text-[#555] text-xl">
              ул. Анкара, 1/35
            </p>
          </div>

          <div className="space-y-4">
             <h3 className="text-[#333] font-bold text-lg mb-2 uppercase tracking-wider">{t("workingHours")}</h3>
            <p className="text-[#555] text-xl">
              09:00 — 00:00
            </p>
          </div>

        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-16">
          <span className="block w-16 h-[2px] bg-[#F5E6D3]" />
          <span className="block w-2 h-2 rounded-full bg-[#E8734A]" />
          <span className="block w-16 h-[2px] bg-[#F5E6D3]" />
        </div>
        
        <p className="text-[#888] text-sm mt-8">
          © {new Date().getFullYear()} Food Mama. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
