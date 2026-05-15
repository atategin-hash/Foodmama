import React, { createContext, useContext, useState, ReactNode } from 'react';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  ky: {
    heroSlogan: "Үйдөгүдөй даамдуу",
    openNow: "Азыр ачык: 09:00 - 00:00",
    menuTitle: "Биздин Меню",
    careerTitle: "Биздин командага кошулуңуз",
    instagramTitle: "Биз Инстаграмда: @food_mama_coffee",
    aboutWarmSentence: "Ankara 1/35 дарегинде сиздерди үй тамактарынын даамы жана жылуу маанай менен күтөбүз.",
    whatsappTooltip: "Биз азыр ачыкпыз! 💬",
    breakfast: "Эртең мененки (Завтраки)",
    pizza: "Пицца",
    desserts: "Десерттер (Десерты)",
    salads: "Салаттар (Салаты)",
    soups: "Шорполор (Супы)",
    pasta: "Европа Ашканасы (Европейская кухня)",
    sandwiches: "Сэндвичтер",
    eastern: "Чыгыш Ашканасы (Восточная кухня)",
    rolls: "Роллдор (Роллы)",
    sides: "Гарнирлер (Гарниры)",
    drinks: "Суусундуктар (Напитки / Бар)",
    address: "Дарек",
    workingHours: "Иштөө убактысы",
    email: "Э-почта",
    phone: "Телефон",
    applyNow: "Анкета калтыруу",
    roleWaiter: "Официант",
    roleChef: "Ашпозчу",
    roleBarista: "Бариста",
    roleCleaner: "Тазалоочу жана Идиш жуугуч",
    formName: "Атыңыз",
    formPhone: "Телефон номериңиз",
    formSubmit: "Жөнөтүү",
    formSuccess: "Ийгиликтүү жөнөтүлдү!",
  },
  ru: {
    heroSlogan: "Вкус как дома",
    openNow: "Мы сейчас открыты: 09:00 - 00:00",
    menuTitle: "Наше Меню",
    careerTitle: "Присоединяйтесь к нашей команде",
    instagramTitle: "Мы в Инстаграм: @food_mama_coffee",
    aboutWarmSentence: "Ждем вас на ул. Анкара 1/35, где вкус дома встречается с уютом.",
    whatsappTooltip: "Мы сейчас открыты! 💬",
    breakfast: "Завтраки",
    pizza: "Пицца",
    desserts: "Десерты",
    salads: "Салаты",
    soups: "Супы",
    pasta: "Европейская кухня",
    sandwiches: "Сэндвичи / Бургеры",
    eastern: "Восточная кухня",
    rolls: "Роллы",
    sides: "Гарниры",
    drinks: "Бар / Напитки",
    address: "Адрес",
    workingHours: "Время работы",
    email: "E-mail",
    phone: "Телефон",
    applyNow: "Оставить заявку",
    roleWaiter: "Официант",
    roleChef: "Повар",
    roleBarista: "Бариста",
    roleCleaner: "Уборщик(ца) и Посудомойщик(ца)",
    formName: "Ваше имя",
    formPhone: "Ваш телефон",
    formSubmit: "Отправить",
    formSuccess: "Заявка отправлена!",
  },
  en: {
    heroSlogan: "The taste of home",
    openNow: "Open Now: 09:00 - 00:00",
    menuTitle: "Our Menu",
    careerTitle: "Join Our Team",
    instagramTitle: "Find us on Instagram: @food_mama_coffee",
    aboutWarmSentence: "We wait for you at Ankara 1/35, where the taste of home meets coziness.",
    whatsappTooltip: "We are open now! 💬",
    breakfast: "Breakfast",
    pizza: "Pizza",
    desserts: "Desserts",
    salads: "Salads",
    soups: "Soups",
    pasta: "European Cuisine",
    sandwiches: "Sandwiches & Burgers",
    eastern: "Eastern Cuisine",
    rolls: "Rolls",
    sides: "Side Dishes",
    drinks: "Drinks / Bar",
    address: "Address",
    workingHours: "Working Hours",
    email: "Email",
    phone: "Phone",
    applyNow: "Apply Now",
    roleWaiter: "Waiter / Server",
    roleChef: "Chef / Cook",
    roleBarista: "Barista",
    roleCleaner: "Dishwasher & Cleaner",
    formName: "Your Name",
    formPhone: "Your Phone",
    formSubmit: "Submit",
    formSuccess: "Application sent!",
  }
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('ru');

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
