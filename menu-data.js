// MANGA — Shared Menu Data
// Used by the main site and admin panel.

const DEFAULT_MENU = [
  {
    id: "americano",
    title: "Americano",
    desc: "Bold and pure, crafted with quiet discipline.",
    price: "22,000 UZS",
    cat: "coffee",
    video: "videos/americano.mp4"
  },
  {
    id: "espresso",
    title: "Espresso",
    desc: "A concentrated drop of perfection.",
    price: "20,000 UZS",
    cat: "coffee",
    video: "videos/espresso.mp4"
  },
  {
    id: "cappuccino",
    title: "Cappuccino",
    desc: "The timeless balance of crema and velvet foam.",
    price: "28,000 UZS",
    cat: "coffee",
    video: "videos/cappuccino.mp4"
  },
  {
    id: "icedlatte",
    title: "Iced Latte",
    desc: "Crystal ice meeting smooth milk, pure and refreshing.",
    price: "28,000 UZS",
    cat: "coffee",
    video: "videos/icedlatte.mp4"
  },
  {
    id: "caramel",
    title: "Caramel Macchiato",
    desc: "A delicate dance of golden caramel and espresso.",
    price: "32,000 UZS",
    cat: "coffee",
    video: "videos/caramel.mp4"
  },
  {
    id: "cinnamon",
    title: "Cinnamon Roll",
    desc: "Warmth embodied in soft, spiced pastry.",
    price: "26,000 UZS",
    cat: "pastry",
    video: "videos/cinnamon.mp4"
  },
  {
    id: "kurasan",
    title: "Croissant",
    desc: "Flaky, golden, laminated with patience.",
    price: "24,000 UZS",
    cat: "pastry",
    video: "videos/kurasan.mp4"
  },
  {
    id: "cheesecake",
    title: "New York Cheesecake",
    desc: "Decadent cream on a crushed foundation.",
    price: "38,000 UZS",
    cat: "pastry",
    video: "videos/cheesecake.mp4"
  },
  {
    id: "tiramisu",
    title: "Tiramisu",
    desc: "Layers of mascarpone, espresso, and bitter cocoa.",
    price: "36,000 UZS",
    cat: "pastry",
    video: "videos/tiramisu.mp4"
  }
];

function loadMenu() {
  try {
    const saved = localStorage.getItem("mangaMenu");

    if (saved) {
      return JSON.parse(saved);
    }

    return DEFAULT_MENU.map(item => ({ ...item }));
  } catch (error) {
    console.error("Failed to load menu:", error);
    return DEFAULT_MENU.map(item => ({ ...item }));
  }
}

function saveMenu(items) {
  localStorage.setItem("mangaMenu", JSON.stringify(items));
}

function resetMenu() {
  localStorage.removeItem("mangaMenu");
}