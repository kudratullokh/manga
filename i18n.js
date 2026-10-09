// MANGA — Translations (English, O‘zbekcha, Русский)
// Static text in index.html is marked with data-i18n / data-i18n-ph attributes.

const LANGS = ["en", "uz", "ru"];

const TRANSLATIONS = {
  en: {
    title: "Manga — Coffeehouse, Tashkent",

    nav_home: "Home",
    nav_about: "About",
    nav_menu: "Menu",
    nav_contact: "Contact",

    hero_tag: "An old-money coffeehouse",
    hero_desc: "Select beans, handcrafted pastries, and the quiet art of slowing down.",
    hero_menu: "View Menu",
    hero_reserve: "Reserve a Table",
    scroll_cue: "SCROLL DOWN",

    marquee: "COFFEE ✦ PASTRY ✦ HANDCRAFTED ✦ SELECT BEANS ✦ SLOW MORNINGS ✦ TASHKENT ✦",

    about_label: "Our Philosophy",
    about_title: "Slowness is a luxury",
    about_p1: "Manga has offered guests more than coffee since 2019 — a few minutes of quiet in a busy city.",
    about_p2: "Every bean is hand-selected, every plate carefully made. Nothing here is ever rushed.",
    about_quote: "\"True taste speaks through quality, not through excess words.\"",

    menu_label: "Menu",
    menu_title: "Taste the moment",
    tab_all: "All",
    tab_coffee: "Coffee",
    tab_pastry: "Pastry",
    currency: "UZS",

    contact_label: "Visit Us",
    contact_title: "We'll be expecting you",
    contact_sub: "Reach out for questions or reservations. Open daily 08:00 – 23:00, Tashkent.",
    c_call: "Call",
    c_map: "Map",

    f_name: "Your name",
    f_name_ph: "John Smith",
    f_phone: "Phone number",
    f_guests: "Number of guests",
    f_guests_ph: "Select guests",
    guests: n => n === 1 ? "1 guest" : `${n} guests`,
    f_date: "Reservation date",
    f_time: "Reservation time",
    f_msg: "Special request",
    f_msg_ph: "Birthday, window table...",

    form_send: "Send Reservation Request",
    form_sending: "Sending...",
    form_received: "Request Received ✓",
    note_default: "We'll receive your request and contact you shortly.",
    note_required: "Please complete all required fields.",
    note_sending: "Sending your reservation request...",
    note_error: "Something went wrong. Please try again.",
    note_success: "Your reservation request has been received. MANGA will contact you soon.",

    footer_city: "MANGA — TASHKENT"
  },

  uz: {
    title: "Manga — Qahvaxona, Toshkent",

    nav_home: "Bosh sahifa",
    nav_about: "Biz haqimizda",
    nav_menu: "Menyu",
    nav_contact: "Aloqa",

    hero_tag: "Zodagonlar uslubidagi qahvaxona",
    hero_desc: "Saralangan qahva donlari, qo‘lda tayyorlangan pishiriqlar va shoshilmaslikning sokin san’ati.",
    hero_menu: "Menyuni ko‘rish",
    hero_reserve: "Stol band qilish",
    scroll_cue: "PASTGA SURING",

    marquee: "QAHVA ✦ PISHIRIQLAR ✦ QO‘LDA TAYYORLANGAN ✦ SARALANGAN DONLAR ✦ SHOSHILMAS TONGLAR ✦ TOSHKENT ✦",

    about_label: "Bizning falsafamiz",
    about_title: "Shoshilmaslik — bu hashamat",
    about_p1: "Manga 2019-yildan beri mehmonlarga qahvadan ko‘proq narsani taqdim etadi — gavjum shaharda bir necha daqiqalik sokinlik.",
    about_p2: "Har bir don qo‘lda saralanadi, har bir taom e’tibor bilan tayyorlanadi. Bu yerda hech narsa shoshilib qilinmaydi.",
    about_quote: "“Haqiqiy did ortiqcha so‘zlar bilan emas, sifat bilan namoyon bo‘ladi.”",

    menu_label: "Menyu",
    menu_title: "Lahzaning ta’mini his qiling",
    tab_all: "Barchasi",
    tab_coffee: "Qahva",
    tab_pastry: "Pishiriqlar",
    currency: "so‘m",

    contact_label: "Bizga tashrif buyuring",
    contact_title: "Sizni kutib qolamiz",
    contact_sub: "Savollar yoki stol band qilish uchun biz bilan bog‘laning. Har kuni 08:00 – 23:00, Toshkent.",
    c_call: "Qo‘ng‘iroq",
    c_map: "Xarita",

    f_name: "Ismingiz",
    f_name_ph: "Aziz Karimov",
    f_phone: "Telefon raqami",
    f_guests: "Mehmonlar soni",
    f_guests_ph: "Mehmonlar sonini tanlang",
    guests: n => `${n} mehmon`,
    f_date: "Bron sanasi",
    f_time: "Bron vaqti",
    f_msg: "Maxsus istak",
    f_msg_ph: "Tug‘ilgan kun, deraza yonidagi stol...",

    form_send: "Bron so‘rovini yuborish",
    form_sending: "Yuborilmoqda...",
    form_received: "So‘rov qabul qilindi ✓",
    note_default: "So‘rovingizni qabul qilib, tez orada siz bilan bog‘lanamiz.",
    note_required: "Iltimos, barcha majburiy maydonlarni to‘ldiring.",
    note_sending: "Bron so‘rovingiz yuborilmoqda...",
    note_error: "Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.",
    note_success: "Bron so‘rovingiz qabul qilindi. MANGA tez orada siz bilan bog‘lanadi.",

    footer_city: "MANGA — TOSHKENT"
  },

  ru: {
    title: "Manga — Кофейня, Ташкент",

    nav_home: "Главная",
    nav_about: "О нас",
    nav_menu: "Меню",
    nav_contact: "Контакты",

    hero_tag: "Кофейня в аристократическом стиле",
    hero_desc: "Отборные зёрна, выпечка ручной работы и тихое искусство никуда не спешить.",
    hero_menu: "Смотреть меню",
    hero_reserve: "Забронировать стол",
    scroll_cue: "ЛИСТАЙТЕ ВНИЗ",

    marquee: "КОФЕ ✦ ВЫПЕЧКА ✦ РУЧНАЯ РАБОТА ✦ ОТБОРНЫЕ ЗЁРНА ✦ НЕСПЕШНЫЕ УТРА ✦ ТАШКЕНТ ✦",

    about_label: "Наша философия",
    about_title: "Неспешность — это роскошь",
    about_p1: "С 2019 года Manga дарит гостям больше, чем кофе, — несколько минут тишины в шумном городе.",
    about_p2: "Каждое зерно отобрано вручную, каждое блюдо приготовлено с заботой. Здесь никто никуда не торопится.",
    about_quote: "«Истинный вкус говорит качеством, а не лишними словами».",

    menu_label: "Меню",
    menu_title: "Почувствуйте вкус момента",
    tab_all: "Все",
    tab_coffee: "Кофе",
    tab_pastry: "Выпечка",
    currency: "сум",

    contact_label: "Приходите к нам",
    contact_title: "Мы будем вас ждать",
    contact_sub: "Свяжитесь с нами по любым вопросам или для бронирования. Ежедневно 08:00 – 23:00, Ташкент.",
    c_call: "Позвонить",
    c_map: "Карта",

    f_name: "Ваше имя",
    f_name_ph: "Иван Петров",
    f_phone: "Номер телефона",
    f_guests: "Количество гостей",
    f_guests_ph: "Выберите количество",
    guests: n => `${n} ${ruPlural(n, "гость", "гостя", "гостей")}`,
    f_date: "Дата бронирования",
    f_time: "Время бронирования",
    f_msg: "Особые пожелания",
    f_msg_ph: "День рождения, столик у окна...",

    form_send: "Отправить заявку на бронь",
    form_sending: "Отправка...",
    form_received: "Заявка принята ✓",
    note_default: "Мы получим вашу заявку и скоро свяжемся с вами.",
    note_required: "Пожалуйста, заполните все обязательные поля.",
    note_sending: "Отправляем вашу заявку...",
    note_error: "Что-то пошло не так. Попробуйте ещё раз.",
    note_success: "Ваша заявка принята. MANGA скоро свяжется с вами.",

    footer_city: "MANGA — ТАШКЕНТ"
  }
};

// Menu item translations, keyed by item id from menu-data.js.
// English uses the item's own title/desc.
const MENU_I18N = {
  uz: {
    americano: { title: "Amerikano", desc: "Kuchli va sof, sokin intizom bilan tayyorlangan." },
    espresso: { title: "Espresso", desc: "Mukammallikning quyuq tomchisi." },
    cappuccino: { title: "Kapuchino", desc: "Krema va baxmal ko‘pikning abadiy uyg‘unligi." },
    icedlatte: { title: "Muzli latte", desc: "Billur muz va mayin sut — sof va tetiklantiruvchi." },
    caramel: { title: "Karamel makiato", desc: "Oltin karamel va espressoning nozik raqsi." },
    cinnamon: { title: "Darchinli bulochka", desc: "Yumshoq, ziravorli pishiriqdagi iliqlik." },
    kurasan: { title: "Kruassan", desc: "Qatlamli, oltinrang, sabr bilan tayyorlangan." },
    cheesecake: { title: "Nyu-York chizkeyki", desc: "Maydalangan asos ustidagi mayin krem." },
    tiramisu: { title: "Tiramisu", desc: "Maskarpone, espresso va achchiq kakao qatlamlari." }
  },

  ru: {
    americano: { title: "Американо", desc: "Насыщенный и чистый, приготовленный со спокойной точностью." },
    espresso: { title: "Эспрессо", desc: "Концентрированная капля совершенства." },
    cappuccino: { title: "Капучино", desc: "Вечный баланс крема и бархатной пенки." },
    icedlatte: { title: "Айс латте", desc: "Кристальный лёд и нежное молоко — чисто и освежающе." },
    caramel: { title: "Карамельный макиато", desc: "Изящный танец золотой карамели и эспрессо." },
    cinnamon: { title: "Булочка с корицей", desc: "Тепло в мягкой пряной выпечке." },
    kurasan: { title: "Круассан", desc: "Слоёный, золотистый, приготовленный с терпением." },
    cheesecake: { title: "Нью-Йорк чизкейк", desc: "Нежный сливочный крем на хрустящей основе." },
    tiramisu: { title: "Тирамису", desc: "Слои маскарпоне, эспрессо и горького какао." }
  }
};

function ruPlural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;

  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

// Saved choice first, then the browser's language, then English.
function detectLang() {
  try {
    const saved = localStorage.getItem("mangaLang");

    if (LANGS.includes(saved)) {
      return saved;
    }
  } catch (error) {}

  const browserLangs = navigator.languages || [navigator.language || ""];

  return browserLangs
    .map(code => String(code).slice(0, 2).toLowerCase())
    .find(code => LANGS.includes(code)) || "en";
}

let currentLang = detectLang();

function t(key, n) {
  const value = TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.en[key] ?? key;

  return typeof value === "function" ? value(n) : value;
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  document.title = t("title");

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n, Number(element.dataset.i18nN));
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPh);
  });

  document.querySelectorAll("[data-lang]").forEach(button => {
    const active = button.dataset.lang === currentLang;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active);
  });
}

function setLang(lang) {
  if (!LANGS.includes(lang) || lang === currentLang) {
    return;
  }

  currentLang = lang;

  try {
    localStorage.setItem("mangaLang", lang);
  } catch (error) {}

  applyI18n();

  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => setLang(button.dataset.lang));
});

applyI18n();
