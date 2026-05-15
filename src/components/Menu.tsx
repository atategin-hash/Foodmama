import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Cookie, CupSoda, Croissant, Drumstick, Pizza, Salad, Sandwich, Soup, Fish, Utensils, UtensilsCrossed } from "lucide-react";

type MenuItem = {
  name: string;
  price: string;
  badge?: string;
  badgeColor?: string;
};

type MenuCategory = {
  id: string;
  titleKey: string;
  image?: string;
  icon?: React.ElementType;
  items: MenuItem[];
};

const FEATURED_CATEGORIES: MenuCategory[] = [
  {
    id: "breakfast_highlight",
    titleKey: "breakfast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop",
    items: [
      { name: "Эртең мененки Түрк тамагы / Турецкий завтрак", price: "655 сом", badge: "🔥 TOP SELLER", badgeColor: "bg-[#F4A261]" },
    ],
  },
  {
    id: "desserts_highlight",
    titleKey: "desserts",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&h=600&fit=crop",
    items: [
      { name: "Сан Себастьян / Сан Себастьян", price: "390 сом", badge: "🍰 MUST TRY", badgeColor: "bg-[#F4A261]" },
    ],
  },
];

const ALL_CATEGORIES: MenuCategory[] = [
  { id: "breakfast", titleKey: "breakfast", icon: Coffee, items: [
      { name: "Эртең мененки Түрк тамагы / Турецкий завтрак", price: "655 сом", badge: "🔥 TOP SELLER", badgeColor: "bg-[#F4A261]" },
      { name: "Эртең мененки Англия тамагы / Английский завтрак", price: "540 сом" },
      { name: "Сырниктер / Сырники", price: "400 сом" },
      { name: "Куурулган жумуртка / Яичница", price: "365 сом" },
      { name: "Шакшука / Шакшука", price: "275 сом" },
      { name: "Сулу боткосу / Каша овсяная", price: "275 сом" },
      { name: "Күрүч боткосу / Каша рисовая", price: "275 сом" },
      { name: "Таттуу сүт менен куймак / Блины с сгущенкой", price: "255 сом" },
      { name: "Шоколад менен куймак / Блины с шоколадом", price: "255 сом" },
      { name: "Каймак менен куймак / Блины со сметаной", price: "245 сом" },
  ]},
  { id: "pizza", titleKey: "pizza", icon: Pizza, items: [
      { name: "Пицца Чили / Пицца Чили", price: "780 сом" },
      { name: "Фрикасе / Фрикасе", price: "750 сом" },
      { name: "Цезарь пицца / Цезарь пицца", price: "750 сом" },
      { name: "Пицца Пепперони / Пицца Пепперони", price: "700 сом" },
      { name: "Маргарита / Маргарита", price: "580 сом" },
      { name: "Аджар хачапуриси / Хачапури по Аджарски", price: "535 сом" },
  ]},
  { id: "desserts", titleKey: "desserts", icon: Cookie, items: [
      { name: "Фисташка малина / Фисташка малина", price: "420 сом" },
      { name: "Сан Себастьян / Сан Себастьян", price: "390 сом", badge: "🍰 MUST TRY", badgeColor: "bg-[#F4A261]" },
      { name: "Напалеон / Напалеон", price: "380 сом" },
      { name: "Медовик Трайфл / Медовик Трайфл", price: "380 сом" },
      { name: "Трайфл манго / Трайфл манго", price: "380 сом" },
      { name: "Чизкейк ассорти / Чизкейк ассорти", price: "350 сом" },
      { name: "Трайфл клубника / Трайфл клубника", price: "350 сом" },
      { name: "Трайфл сникерс / Трайфл сникерс", price: "350 сом" },
      { name: "Сникерс / Сникерс", price: "320 сом" },
      { name: "Красный бархат / Красный бархат", price: "250 сом" },
      { name: "Три шоколада / Три шоколада", price: "220 сом" },
      { name: "Макаронс ассорти / Макаронс ассорти", price: "210 сом" },
  ]},
  { id: "salads", titleKey: "salads", icon: Salad, items: [
    { name: "Руколла кошулган кызылча салаты / Свекольный салат с рукколой", price: "495 сом" },
    { name: "Фунчоза", price: "495 сом" },
    { name: "Кытыраак баклажан / Хрустящий баклажан", price: "495 сом" },
    { name: "Ачуу салат эт менен / Острый салат с мясом", price: "485 сом" },
    { name: "Грек салаты / Греческий салат", price: "475 сом" },
    { name: "Цезарь тоок эти менен / Цезарь с курицей", price: "465 сом" },
    { name: "Гемоглобин", price: "435 сом" },
    { name: "Чабан салаты / Свежий салат", price: "335 сом" },
  ]},
  { id: "soups", titleKey: "soups", icon: Soup, items: [
    { name: "Рамен тоок эти менен / Рамен с курицей", price: "455 сом" },
    { name: "Рамен уй эти менен / Рамен с говядиной", price: "455 сом" },
    { name: "Козу карын шорпосу / Грибной крем суп", price: "395 сом" },
    { name: "Шорпо", price: "395 сом" },
    { name: "Окрошка", price: "395 сом" },
    { name: "Чүчвара / Пельмени", price: "335 сом" },
    { name: "Суп лапша из домашней курицы", price: "285 сом" },
    { name: "Жасмык шорпосу / Чечевичный крем суп", price: "275 сом" },
  ]},
  { id: "pasta", titleKey: "pasta", icon: Utensils, items: [
    { name: "Форель жашылчалар жана каймак соус менен / Форель с овощами под сливочным соусом", price: "700 сом" },
    { name: "Боул балык менен / Боул с рыбой", price: "610 сом" },
    { name: "Бефстроганов", price: "610 сом" },
    { name: "Болонез", price: "600 сом" },
    { name: "Фетучини тоок эти менен / Фетучини с курицей", price: "575 сом" },
    { name: "Фрикасе", price: "565 сом" },
    { name: "Боул тоок эти менен / Боул с курицей", price: "560 сом" },
  ]},
  { id: "sandwiches", titleKey: "sandwiches", icon: Sandwich, items: [
    { name: "Цыплята табака с овощами", price: "800 сом" },
    { name: "Бургер от шефа с говядиной", price: "510 сом" },
    { name: "Бургер с курицей", price: "500 сом" },
    { name: "Кесадилья", price: "455 сом" },
    { name: "Клаб сэндвич балык менен / Клаб сэндвич с рыбой", price: "455 сом" },
    { name: "Клаб сэндвич ышталган тоок эти менен / Клаб сэндвич с копченой курицей", price: "435 сом" },
  ]},
  { id: "eastern", titleKey: "eastern", icon: Drumstick, items: [
    { name: "Куурдак (2 кг)", price: "3920 сом" },
    { name: "Плов (1 кг)", price: "3220 сом" },
    { name: "Куурдак из баранины", price: "800 сом" },
    { name: "Фри тоок эти менен / Фри с курицей", price: "580 сом" },
    { name: "Плов", price: "510 сом" },
    { name: "Манты (порция)", price: "510 сом" },
    { name: "Босо лагман", price: "475 сом" },
    { name: "Лагман Гуйру", price: "460 сом" },
    { name: "Ганфан", price: "410 сом" },
    { name: "Манты (1 даанасы / штучно)", price: "160 сом" },
  ]},
  { id: "rolls", titleKey: "rolls", icon: Fish, items: [
    { name: "Запеченные роллы с рыбой", price: "510 сом" },
    { name: "Жаренные роллы с рыбой", price: "510 сом" },
    { name: "Куурулган ролл лосось менен / Жаренные роллы с лососем", price: "510 сом" },
    { name: "Бышырылган ролл тоок эти менен / Чикен ролл запеченный", price: "500 сом" },
    { name: "Жаренные роллы с курицей", price: "500 сом" },
    { name: "Бышырылган ролл сыр менен / Запеченные сырные роллы", price: "500 сом" },
    { name: "Калифорния", price: "460 сом" },
    { name: "Бышырылган ролл краб менен / Запеченный с крабом", price: "460 сом" },
    { name: "Куурулган ролл краб менен / Жаренные роллы с крабом", price: "455 сом" },
    { name: "Жашылча менен / Овощной", price: "400 сом" },
  ]},
  { id: "sides", titleKey: "sides", icon: UtensilsCrossed, items: [
    { name: "Овощной ассорти", price: "405 сом" },
    { name: "Нагетсы с кетчупом", price: "305 сом" },
    { name: "Пюре копченое", price: "265 сом" },
    { name: "Картошка фри кетчуп менен / Картофель фри с кетчупом", price: "235 сом" },
    { name: "Картошка фри / Картофель по деревенски с кетчупом", price: "225 сом" },
    { name: "Боорсок каймак менен / Боорсоки со сметаной", price: "205 сом" },
    { name: "Крокеттер кетчуп менен / Крокеты с кетчупом", price: "195 сом" },
    { name: "Бууга бышырылган күрүч / Рис на пару", price: "175 сом" },
    { name: "Нан / Хлеб", price: "75 сом" },
  ]},
  { id: "drinks", titleKey: "drinks", icon: CupSoda, items: [
    { name: "Мохито классика / Мохито классический (1л)", price: "375 сом" },
    { name: "Кулпунай мохитосу / Мохито клубничный (1л)", price: "375 сом" },
    { name: "Апельсин ширеси / Апельсиновый сок (1л)", price: "315 сом" },
    { name: "Мохито классика / Мохито классический (0,5л)", price: "215 сом" },
    { name: "Кулпунай мохитосу / Мохито клубничный (0,5л)", price: "215 сом" },
    { name: "Капучино", price: "210 сом" },
    { name: "Латте", price: "210 сом" },
    { name: "Ташкент чайы / Ташкентский чайник", price: "185 сом" },
    { name: "Кара чай / Черный чай", price: "145 сом" },
    { name: "Көк чай / Зеленый чай", price: "145 сом" },
    { name: "Американо", price: "130 сом" },
    { name: "Апельсин ширеси / Апельсиновый сок (0,5л)", price: "125 сом" },
    { name: "Эспрессо", price: "100 сом" },
  ]},
];

export default function Menu() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const renderItems = (items: MenuItem[]) => (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center border-b border-[#F5E6D3] pb-3 last:border-0 relative">
          <div className="flex flex-col">
            <span className="font-semibold text-[#333] text-lg">{item.name}</span>
            {item.badge && (
              <span className={`inline-block w-max mt-1 px-2 py-0.5 text-xs font-bold text-white rounded shadow-sm ${item.badgeColor}`}>
                {item.badge}
              </span>
            )}
          </div>
          <span className="font-bold text-[#E8734A] text-lg ml-4 whitespace-nowrap">{item.price}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 px-4 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#333] mb-12">
          {t("menuTitle")}
        </h2>

        {/* Featured Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {FEATURED_CATEGORIES.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl shadow-lg border border-[#F5E6D3] overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <div className="h-56 overflow-hidden relative">
                <img src={cat.image} alt={t(cat.titleKey)} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-[#333] mb-4 border-b-2 border-[#E8734A] inline-block pb-1">
                  Атайын сунуш / Специальное предложение
                </h3>
                {renderItems(cat.items)}
              </div>
            </div>
          ))}
        </div>

        {/* Other Categories Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {ALL_CATEGORIES.map((cat) => {
            const Icon = cat.icon!;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(isActive ? null : cat.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl w-28 h-28 transition-all duration-300 shadow-md ${
                  isActive ? "bg-[#E8734A] text-white scale-110" : "bg-white text-[#555] hover:bg-[#F5E6D3] hover:text-[#E8734A]"
                }`}
              >
                <Icon className="w-10 h-10 mb-2" />
                <span className="text-sm font-semibold text-center leading-tight">{t(cat.titleKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Other Category Details Expansion */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {ALL_CATEGORIES.filter(c => c.id === activeCategory).map(cat => (
                <div key={cat.id} className="bg-white rounded-2xl shadow-lg border border-[#F5E6D3] p-6 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[#333] mb-6 flex items-center gap-3">
                    {cat.icon && <cat.icon className="text-[#E8734A] w-8 h-8" />}
                    {t(cat.titleKey)}
                  </h3>
                  {renderItems(cat.items)}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
