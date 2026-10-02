/* =========================================================
   STRIVEN EGYPT
   Main JavaScript
   ========================================================= */

/* =========================================================
   PRODUCTS
   ========================================================= */

const products = [
  {
    id: 1,
    name: "STRIVEN Cyber Bolt Heavyweight Oversized Tee",
    category: "oversized",
    price: 550,
    rating: "4.9",
    tag: "BESTSELLER",
    colors: ["#000000", "#1E1E1E", "#CCFF00"],
    sizes: ["S", "M", "L", "XL", "XXL"],

    svgBg: `
            <svg viewBox="0 0 300 300" class="product-svg bg-brand-card">
                <rect width="300" height="300" fill="#141418"/>

                <path
                    d="M70,80 L110,60 L190,60 L230,80 L210,130 L190,120 L190,250 L110,250 L110,120 L90,130 Z"
                    fill="#1d1d24"
                    stroke="#26262e"
                    stroke-width="2"
                />

                <g transform="translate(125, 120) scale(0.5)">
                    <polygon
                        points="15,30 88,18 39,34 52,34 27,47 81,57 63,65 31,71 88,82 11,82 61,61 38,61 73,42 18,30"
                        fill="#CCFF00"
                    />
                </g>
            </svg>
        `,
  },

  {
    id: 2,
    name: "STRIVEN Pro Compression Performance Tee",
    category: "compression",
    price: 480,
    rating: "5.0",
    tag: "NEW DROP",
    colors: ["#000000", "#111111"],
    sizes: ["M", "L", "XL"],

    svgBg: `
            <svg viewBox="0 0 300 300" class="product-svg bg-brand-card">
                <rect width="300" height="300" fill="#0f0f13"/>

                <path
                    d="M80,75 L120,55 L180,55 L220,75 L200,125 L180,115 L180,245 L120,245 L120,115 L100,125 Z"
                    fill="#17171e"
                    stroke="#CCFF00"
                    stroke-width="1.5"
                />

                <circle
                    cx="150"
                    cy="130"
                    r="18"
                    fill="#000"
                    stroke="#CCFF00"
                    stroke-width="2"
                />

                <path
                    d="M145,122 L158,122 L148,131 L154,131 L142,140"
                    stroke="#CCFF00"
                    stroke-width="2"
                    fill="none"
                />
            </svg>
        `,
  },

  {
    id: 3,
    name: "STRIVEN Apex Heavy Drop-Shoulder Hoodie",
    category: "hoodies",
    price: 890,
    rating: "4.8",
    tag: "HEAVYWEIGHT 350 GSM",
    colors: ["#0A0A0C", "#2B2B2B"],
    sizes: ["M", "L", "XL", "XXL"],

    svgBg: `
            <svg viewBox="0 0 300 300" class="product-svg bg-brand-card">
                <rect width="300" height="300" fill="#141418"/>

                <path
                    d="M60,90 L100,50 L200,50 L240,90 L220,150 L190,135 L190,260 L110,260 L110,135 L80,150 Z"
                    fill="#181820"
                    stroke="#333"
                    stroke-width="2"
                />

                <path
                    d="M110,65 Q150,30 190,65"
                    fill="none"
                    stroke="#CCFF00"
                    stroke-width="3"
                />

                <text
                    x="150"
                    y="160"
                    text-anchor="middle"
                    fill="#CCFF00"
                    font-family="Montserrat"
                    font-weight="900"
                    font-size="14"
                    font-style="italic"
                >
                    STRIVEN
                </text>
            </svg>
        `,
  },

  {
    id: 4,
    name: "STRIVEN Flex-Motion 2-in-1 Athletic Shorts",
    category: "shorts",
    price: 420,
    rating: "4.9",
    tag: "POPULAR",
    colors: ["#000000", "#1C1C1C"],
    sizes: ["S", "M", "L", "XL"],

    svgBg: `
            <svg viewBox="0 0 300 300" class="product-svg bg-brand-card">
                <rect width="300" height="300" fill="#111116"/>

                <path
                    d="M80,100 L220,100 L230,210 L160,210 L150,150 L140,210 L70,210 Z"
                    fill="#1c1c24"
                    stroke="#CCFF00"
                    stroke-width="1.5"
                />

                <line
                    x1="80"
                    y1="120"
                    x2="220"
                    y2="120"
                    stroke="#CCFF00"
                    stroke-width="3"
                />
            </svg>
        `,
  },

  {
    id: 5,
    name: "STRIVEN Raw-Cut Muscle Workout Tank",
    category: "oversized",
    price: 390,
    rating: "4.7",
    tag: "PUMP COVER",
    colors: ["#000000", "#222222"],
    sizes: ["M", "L", "XL"],

    svgBg: `
            <svg viewBox="0 0 300 300" class="product-svg bg-brand-card">
                <rect width="300" height="300" fill="#141418"/>

                <path
                    d="M100,70 L130,60 L170,60 L200,70 L180,140 L180,250 L120,250 L120,140 Z"
                    fill="#1b1b22"
                    stroke="#26262e"
                    stroke-width="2"
                />

                <circle
                    cx="150"
                    cy="140"
                    r="15"
                    fill="#CCFF00"
                />
            </svg>
        `,
  },

  {
    id: 6,
    name: "STRIVEN Stealth Tech Lifting Hoodie",
    category: "hoodies",
    price: 850,
    rating: "5.0",
    tag: "LIMITED",
    colors: ["#0A0A0C"],
    sizes: ["M", "L", "XL", "XXL"],

    svgBg: `
            <svg viewBox="0 0 300 300" class="product-svg bg-brand-card">
                <rect width="300" height="300" fill="#0c0c10"/>

                <path
                    d="M60,90 L100,50 L200,50 L240,90 L220,150 L190,135 L190,260 L110,260 L110,135 L80,150 Z"
                    fill="#14141c"
                    stroke="#CCFF00"
                    stroke-width="1"
                />

                <polygon
                    points="135,140 165,130 145,150 155,150 140,170"
                    fill="#CCFF00"
                />
            </svg>
        `,
  },
];

/* =========================================================
   APPLICATION STATE
   ========================================================= */

let cart = [];
let wishlist = [];

/* =========================================================
   PRODUCT RENDERING
   ========================================================= */

function renderProducts(filter = "all") {
  const grid = document.getElementById("products-grid");

  if (!grid) return;

  grid.innerHTML = "";

  const filtered =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
            <div class="col-span-full text-center py-16 text-gray-400">
                <i class="fa-solid fa-box-open text-4xl mb-4 text-gray-600"></i>
                <p class="font-bold uppercase">
                    No products found
                </p>
            </div>
        `;

    return;
  }

  filtered.forEach((product) => {
    const card = document.createElement("div");

    card.className =
      "bg-brand-card border border-brand-border hover:border-brand-neon/60 rounded-xl overflow-hidden group transition-all duration-300 flex flex-col justify-between";

    card.innerHTML = `
            <div class="relative w-full aspect-square overflow-hidden bg-black flex items-center justify-center">

                ${product.svgBg}

                <span class="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-brand-neon border border-brand-neon/40 text-[10px] font-extrabold px-2.5 py-1 rounded tracking-wider uppercase">
                    ${product.tag}
                </span>

                <button
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Add to wishlist"
                    class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white hover:text-brand-neon flex items-center justify-center transition-colors"
                >
                    <i class="${
                      wishlist.includes(product.id)
                        ? "fa-solid text-brand-neon"
                        : "fa-regular"
                    } fa-heart"></i>
                </button>

            </div>

            <div class="p-5 flex-1 flex flex-col justify-between">

                <div>

                    <div class="flex items-center justify-between text-xs text-gray-400 mb-1">

                        <span class="uppercase tracking-widest font-semibold">
                            ${product.category}
                        </span>

                        <span class="text-amber-400">
                            <i class="fa-solid fa-star text-[10px]"></i>
                            ${product.rating}
                        </span>

                    </div>

                    <h3 class="font-bold text-white text-base group-hover:text-brand-neon transition-colors line-clamp-1">
                        ${product.name}
                    </h3>

                    <div class="flex items-center gap-1.5 my-3">

                        <span class="text-[11px] text-gray-400 mr-1">
                            Size:
                        </span>

                        ${product.sizes
                          .map(
                            (size) => `
                                    <span class="px-2 py-0.5 text-[10px] font-bold bg-brand-dark border border-brand-border rounded text-gray-300">
                                        ${size}
                                    </span>
                                `,
                          )
                          .join("")}

                    </div>

                </div>

                <div class="pt-3 border-t border-brand-border/60 flex items-center justify-between">

                    <div>

                        <span class="text-xs text-gray-400 block -mb-1">
                            Price
                        </span>

                        <span class="text-lg font-black font-display text-brand-neon">
                            ${product.price} EGP
                        </span>

                    </div>

                    <button
                        onclick="addToCart(${product.id})"
                        class="px-4 py-2 bg-brand-neon text-black font-extrabold text-xs uppercase tracking-wider rounded hover:bg-brand-neonHover transition-all flex items-center gap-2"
                    >
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>Add</span>
                    </button>

                </div>

            </div>
        `;

    grid.appendChild(card);
  });
}

/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function filterCategory(category, clickedButton) {
  document.querySelectorAll(".cat-btn").forEach((button) => {
    button.classList.remove("bg-brand-neon", "text-black", "border-brand-neon");

    button.classList.add(
      "bg-brand-card",
      "text-gray-300",
      "border-brand-border",
    );
  });

  if (clickedButton) {
    clickedButton.classList.remove(
      "bg-brand-card",
      "text-gray-300",
      "border-brand-border",
    );

    clickedButton.classList.add(
      "bg-brand-neon",
      "text-black",
      "border-brand-neon",
    );
  }

  renderProducts(category);
}

/* =========================================================
   CART
   ========================================================= */

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      ...product,
      qty: 1,
      selectedSize: product.sizes[0],
    });
  }

  updateCartUI();

  toggleCartDrawer(true);
}

function updateCartUI() {
  const badge = document.getElementById("cart-badge");
  const list = document.getElementById("cart-items-list");

  if (!badge || !list) return;

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  badge.innerText = totalQty;

  list.innerHTML = "";

  let subtotal = 0;

  if (cart.length === 0) {
    list.innerHTML = `
            <div class="text-center py-12 text-gray-400">

                <i class="fa-solid fa-bag-shopping text-4xl text-gray-600 mb-3"></i>

                <p class="text-sm font-bold uppercase">
                    Your cart is empty
                </p>

                <p class="text-xs mt-1">
                    Explore our 2026 collection to add items.
                </p>

            </div>
        `;
  } else {
    cart.forEach((item, index) => {
      subtotal += item.price * item.qty;

      const element = document.createElement("div");

      element.className =
        "flex items-center gap-4 bg-brand-dark p-3 rounded-lg border border-brand-border";

      element.innerHTML = `
                <div class="w-16 h-16 bg-black rounded overflow-hidden flex-shrink-0">
                    ${item.svgBg}
                </div>

                <div class="flex-1">

                    <h4 class="text-xs font-bold text-white line-clamp-1">
                        ${item.name}
                    </h4>

                    <span class="text-[11px] text-brand-neon font-bold block">
                        ${item.price} EGP
                    </span>

                    <div class="flex items-center gap-2 mt-2">

                        <button
                            onclick="changeQty(${index}, -1)"
                            class="w-5 h-5 bg-brand-card text-white text-xs rounded flex items-center justify-center"
                        >
                            -
                        </button>

                        <span class="text-xs font-bold text-white">
                            ${item.qty}
                        </span>

                        <button
                            onclick="changeQty(${index}, 1)"
                            class="w-5 h-5 bg-brand-card text-white text-xs rounded flex items-center justify-center"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    onclick="removeFromCart(${index})"
                    aria-label="Remove item"
                    class="text-gray-500 hover:text-red-400 text-sm p-1"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;

      list.appendChild(element);
    });
  }

  const shipping = subtotal > 1500 || subtotal === 0 ? 0 : 50;

  const total = subtotal + shipping;

  document.getElementById("cart-subtotal").innerText = `${subtotal} EGP`;

  document.getElementById("cart-total").innerText = `${total} EGP`;
}

function changeQty(index, delta) {
  if (!cart[index]) return;

  cart[index].qty += delta;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateCartUI();
}

function removeFromCart(index) {
  if (!cart[index]) return;

  cart.splice(index, 1);

  updateCartUI();
}

function toggleCartDrawer(forceOpen = false) {
  const drawer = document.getElementById("cart-drawer");

  if (!drawer) return;

  if (forceOpen === true) {
    drawer.classList.remove("hidden");
    document.body.classList.add("modal-open");
  } else {
    drawer.classList.toggle("hidden");

    if (drawer.classList.contains("hidden")) {
      document.body.classList.remove("modal-open");
    } else {
      document.body.classList.add("modal-open");
    }
  }
}

/* =========================================================
   WHATSAPP CHECKOUT
   ========================================================= */

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty! Please add products before checking out.");

    return;
  }

  let text = "Hello STRIVEN Egypt! ⚡ I would like to place an order:\n\n";

  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;

    subtotal += itemTotal;

    text +=
      `${index + 1}. ${item.name}\n` +
      `   Size: ${item.selectedSize} | Qty: ${item.qty} | Price: ${itemTotal} EGP\n`;
  });

  const shipping = subtotal > 1500 ? 0 : 50;

  const total = subtotal + shipping;

  text += `\nSubtotal: ${subtotal} EGP`;

  text += `\nDelivery: ${shipping === 0 ? "FREE" : shipping + " EGP"}`;

  text += `\n*TOTAL ORDER: ${total} EGP*`;

  text += "\n\nPlease confirm availability and shipping details!";

  const encoded = encodeURIComponent(text);

  window.open(
    `https://wa.me/201211271037?text=${encoded}`,
    "_blank",
    "noopener,noreferrer",
  );
}

/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((item) => item !== id);
  } else {
    wishlist.push(id);
  }

  const badge = document.getElementById("wishlist-badge");

  if (!badge) return;

  badge.innerText = wishlist.length;

  if (wishlist.length > 0) {
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }

  renderProducts();
}

/*
   The original HTML called toggleWishlistModal()
   but there was no function for it.

   This function makes the heart button useful
   without adding another modal.
*/

function toggleWishlistModal() {
  if (wishlist.length === 0) {
    alert("Your wishlist is empty. Tap the heart on any product to save it.");

    return;
  }

  const names = wishlist
    .map((id) => {
      const product = products.find((item) => item.id === id);

      return product ? `• ${product.name}` : "";
    })
    .filter(Boolean)
    .join("\n");

  alert(`Your STRIVEN Wishlist:\n\n${names}`);
}

/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");

  const icon = document.getElementById("menu-icon");

  if (!menu || !icon) return;

  menu.classList.toggle("hidden");

  const isOpen = !menu.classList.contains("hidden");

  if (isOpen) {
    icon.classList.remove("fa-bars");

    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");
  }
}

/* =========================================================
   SEARCH
   ========================================================= */

function toggleSearchModal() {
  const modal = document.getElementById("search-modal");

  if (!modal) return;

  modal.classList.toggle("hidden");

  const isOpen = !modal.classList.contains("hidden");

  if (isOpen) {
    document.body.classList.add("modal-open");

    setTimeout(() => {
      const input = document.getElementById("search-input");

      if (input) {
        input.focus();
      }
    }, 100);
  } else {
    document.body.classList.remove("modal-open");
  }
}

function handleSearch() {
  const input = document.getElementById("search-input");

  const resultsContainer = document.getElementById("search-results");

  if (!input || !resultsContainer) {
    return;
  }

  const query = input.value.toLowerCase().trim();

  resultsContainer.innerHTML = "";

  if (query === "") {
    return;
  }

  const matches = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.tag.toLowerCase().includes(query),
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
            <div class="text-center py-8 text-gray-400">

                <i class="fa-solid fa-magnifying-glass text-3xl mb-3 text-gray-600"></i>

                <p class="font-bold uppercase">
                    No products found
                </p>

            </div>
        `;

    return;
  }

  matches.forEach((product) => {
    const element = document.createElement("div");

    element.className =
      "p-3 bg-brand-card rounded-lg border border-brand-border flex items-center justify-between cursor-pointer hover:border-brand-neon";

    element.onclick = () => {
      toggleSearchModal();

      addToCart(product.id);
    };

    element.innerHTML = `

            <div>

                <p class="font-bold text-white text-sm">
                    ${product.name}
                </p>

                <p class="text-xs text-brand-neon">
                    ${product.price} EGP
                </p>

            </div>

            <i class="fa-solid fa-plus text-brand-neon"></i>
        `;

    resultsContainer.appendChild(element);
  });
}

/* =========================================================
   SIZE CALCULATOR
   ========================================================= */

function openSizeModal() {
  const modal = document.getElementById("size-modal");

  if (!modal) return;

  modal.classList.remove("hidden");

  document.body.classList.add("modal-open");
}

function closeSizeModal() {
  const modal = document.getElementById("size-modal");

  if (!modal) return;

  modal.classList.add("hidden");

  document.body.classList.remove("modal-open");
}

function calculateSize() {
  const weight = parseFloat(document.getElementById("calc-weight").value);

  const height = parseFloat(document.getElementById("calc-height").value);

  const fit = document.getElementById("calc-fit").value;

  if (!weight || !height) {
    alert("Please enter both weight and height.");

    return;
  }

  let resultSize = "M";

  if (weight < 70) {
    resultSize = "S";
  } else if (weight >= 70 && weight < 82) {
    resultSize = "M";
  } else if (weight >= 82 && weight < 95) {
    resultSize = "L";
  } else if (weight >= 95 && weight < 110) {
    resultSize = "XL";
  } else {
    resultSize = "XXL";
  }

  /*
       Oversized fit moves one size up.
    */

  if (fit === "oversized" && resultSize !== "XXL") {
    const sizes = ["S", "M", "L", "XL", "XXL"];

    const currentIndex = sizes.indexOf(resultSize);

    resultSize = sizes[currentIndex + 1] || "XXL";
  }

  document.getElementById("recommended-size-text").innerText = resultSize;

  document.getElementById("size-result").classList.remove("hidden");
}

/* =========================================================
   NEWSLETTER
   ========================================================= */

function subscribeNewsletter(event) {
  event.preventDefault();

  alert("Subscribed to STRIVEN updates!");

  event.target.reset();
}

/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener("keydown", function (event) {
  /*
           ESC closes open modals/drawers.
        */

  if (event.key === "Escape") {
    const sizeModal = document.getElementById("size-modal");

    const searchModal = document.getElementById("search-modal");

    const cartDrawer = document.getElementById("cart-drawer");

    if (sizeModal && !sizeModal.classList.contains("hidden")) {
      closeSizeModal();
    }

    if (searchModal && !searchModal.classList.contains("hidden")) {
      toggleSearchModal();
    }

    if (cartDrawer && !cartDrawer.classList.contains("hidden")) {
      toggleCartDrawer();
    }
  }
});

/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  renderProducts("all");

  updateCartUI();
});
