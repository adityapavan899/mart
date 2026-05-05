// ===================================
//   SPICERUSH – FOOD DELIVERY APP
//   script.js
// ===================================

// ---- DATA ----
const FOOD_DATA = [
  // TIFFINS
  {
    id: 1, category: "tiffins", name: "Classic Idly",
    desc: "Soft steamed rice cakes served with sambar and three chutneys.",
    price: 60, oldPrice: 80, rating: 4.8, time: "15 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80"
  },
  {
    id: 2, category: "tiffins", name: "Masala Dosa",
    desc: "Crispy golden dosa stuffed with spiced potato filling, with sambar.",
    price: 90, oldPrice: 120, rating: 4.9, time: "20 min",
    badge: "Bestseller", badgeClass: "bestseller",
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80"
  },
  {
    id: 3, category: "tiffins", name: "Rava Upma",
    desc: "Fluffy semolina upma tempered with mustard, curry leaves & veggies.",
    price: 55, oldPrice: null, rating: 4.5, time: "12 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=500&q=80"
  },
  {
    id: 4, category: "tiffins", name: "Poha",
    desc: "Flattened rice flakes sautéed with onion, peas, and turmeric.",
    price: 50, oldPrice: null, rating: 4.6, time: "10 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?w=500&q=80"
  },
  {
    id: 5, category: "tiffins", name: "Medu Vada",
    desc: "Crispy deep-fried lentil donuts, perfect with sambar and chutney.",
    price: 70, oldPrice: 90, rating: 4.7, time: "18 min",
    badge: "Bestseller", badgeClass: "bestseller",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80"
  },
  {
    id: 6, category: "tiffins", name: "Pesarattu",
    desc: "Green moong dal crepe, a healthy Andhra breakfast specialty.",
    price: 75, oldPrice: null, rating: 4.4, time: "20 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=500&q=80"
  },
  // RICE ITEMS
  {
    id: 7, category: "rice", name: "Chicken Biryani",
    desc: "Aromatic basmati rice layered with spiced chicken, saffron & fried onions.",
    price: 180, oldPrice: 220, rating: 4.9, time: "30 min",
    badge: "Bestseller", badgeClass: "bestseller",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80"
  },
  {
    id: 8, category: "rice", name: "Veg Pulao",
    desc: "Fragrant rice cooked with fresh garden vegetables and whole spices.",
    price: 120, oldPrice: 150, rating: 4.6, time: "25 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=500&q=80"
  },
  {
    id: 9, category: "rice", name: "Sambar Rice",
    desc: "Comfort bowl of rice mixed with tangy sambar, ghee drizzled on top.",
    price: 80, oldPrice: null, rating: 4.5, time: "15 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=500&q=80"
  },
  {
    id: 10, category: "rice", name: "Curd Rice",
    desc: "Soft rice mixed with creamy yogurt, tempered with mustard and pomegranate.",
    price: 70, oldPrice: null, rating: 4.4, time: "10 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1680703027879-a8ea5ab30f7c?w=500&q=80"
  },
  {
    id: 11, category: "rice", name: "Mutton Biryani",
    desc: "Slow-cooked tender mutton with aromatic spices and long-grain basmati.",
    price: 220, oldPrice: 270, rating: 4.8, time: "35 min",
    badge: "Bestseller", badgeClass: "bestseller",
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&q=80"
  },
  {
    id: 12, category: "rice", name: "Lemon Rice",
    desc: "Zesty lemon-flavored rice with turmeric, peanuts and curry leaves.",
    price: 65, oldPrice: null, rating: 4.3, time: "12 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80"
  },
  // BEVERAGES
  {
    id: 13, category: "beverages", name: "Mango Lassi",
    desc: "Thick, creamy mango yogurt drink blended with chilled milk and sugar.",
    price: 80, oldPrice: 100, rating: 4.9, time: "5 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&q=80"
  },
  {
    id: 14, category: "beverages", name: "Filter Coffee",
    desc: "South Indian decoction brewed with fresh roasted beans, served frothy.",
    price: 40, oldPrice: null, rating: 4.8, time: "8 min",
    badge: "Bestseller", badgeClass: "bestseller",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80"
  },
  {
    id: 15, category: "beverages", name: "Fresh Lime Soda",
    desc: "Ice cold lime soda, sweet or salty — refreshing on any day.",
    price: 50, oldPrice: null, rating: 4.5, time: "5 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=80"
  },
  {
    id: 16, category: "beverages", name: "Rose Milk",
    desc: "Chilled milk sweetened with rose syrup, garnished with basil seeds.",
    price: 60, oldPrice: 75, rating: 4.6, time: "5 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80"
  },
  {
    id: 17, category: "beverages", name: "Masala Chai",
    desc: "Aromatic tea brewed with ginger, cardamom, cloves and cinnamon.",
    price: 35, oldPrice: null, rating: 4.7, time: "6 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80"
  },
  {
    id: 18, category: "beverages", name: "Tender Coconut Water",
    desc: "Fresh young coconut water, nature's best electrolyte drink.",
    price: 70, oldPrice: null, rating: 4.9, time: "2 min",
    badge: "Bestseller", badgeClass: "bestseller",
    img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&q=80"
  },
  // SNACKS
  {
    id: 19, category: "snacks", name: "Mirchi Bajji",
    desc: "Big green chillies dipped in gram flour batter and deep fried golden.",
    price: 45, oldPrice: null, rating: 4.7, time: "15 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80"
  },
  {
    id: 20, category: "snacks", name: "Samosa (2 pcs)",
    desc: "Crispy pastry stuffed with spiced potato-pea filling, with tamarind chutney.",
    price: 40, oldPrice: null, rating: 4.6, time: "12 min",
    badge: "Bestseller", badgeClass: "bestseller",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80"
  },
  {
    id: 21, category: "snacks", name: "Pani Puri",
    desc: "Hollow crispy puris filled with tangy mint-flavored chilled water.",
    price: 60, oldPrice: 75, rating: 4.8, time: "8 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80"
  },
  {
    id: 22, category: "snacks", name: "Bread Pakora",
    desc: "Sandwich bread stuffed with spiced potato, dipped in besan and fried.",
    price: 50, oldPrice: null, rating: 4.4, time: "14 min",
    badge: "Veg", badgeClass: "veg",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=500&q=80"
  },
];

// ---- STATE ----
let cart = [];
let currentCat = "all";
let searchQuery = "";

// ---- DOM REFS ----
const foodGrid = document.getElementById("foodGrid");
const noResults = document.getElementById("noResults");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartFooter = document.getElementById("cartFooter");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const toast = document.getElementById("toast");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const searchInput = document.getElementById("searchInput");

// ---- RENDER FOOD CARDS ----
function renderFoodCards() {
  let filtered = FOOD_DATA.filter(item => {
    const matchCat = currentCat === "all" || item.category === currentCat;
    const matchSearch = item.name.toLowerCase().includes(searchQuery) ||
                        item.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  foodGrid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  filtered.forEach((item, idx) => {
    const cartItem = cart.find(c => c.id === item.id);
    const qty = cartItem ? cartItem.qty : 0;

    const card = document.createElement("div");
    card.className = "food-card";
    card.style.animationDelay = `${idx * 0.06}s`;

    card.innerHTML = `
      <div class="food-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80'"/>
        <span class="food-badge ${item.badgeClass}">${item.badge}</span>
        <button class="wishlist-btn ${isWishlisted(item.id) ? 'liked' : ''}" data-id="${item.id}">
          <i class="${isWishlisted(item.id) ? 'fas' : 'far'} fa-heart" style="color:${isWishlisted(item.id) ? '#e8421a' : '#888'}"></i>
        </button>
      </div>
      <div class="food-card-body">
        <div class="food-cat-label">${item.category}</div>
        <div class="food-name">${item.name}</div>
        <div class="food-desc">${item.desc}</div>
        <div class="food-meta">
          <span class="food-rating"><i class="fas fa-star"></i> ${item.rating}</span>
          <span class="food-time"><i class="fas fa-clock"></i> ${item.time}</span>
        </div>
      </div>
      <div class="food-card-footer">
        <div class="food-price">
          ₹${item.price}
          ${item.oldPrice ? `<span>₹${item.oldPrice}</span>` : ''}
        </div>
        ${qty === 0 ? `
          <button class="add-to-cart-btn" data-id="${item.id}">
            <i class="fas fa-plus"></i> Add
          </button>
        ` : `
          <div class="qty-control">
            <button class="qty-btn qty-dec" data-id="${item.id}"><i class="fas fa-minus"></i></button>
            <span class="qty-num" id="qty-${item.id}">${qty}</span>
            <button class="qty-btn qty-inc" data-id="${item.id}"><i class="fas fa-plus"></i></button>
          </div>
        `}
      </div>
    `;

    foodGrid.appendChild(card);
  });

  // Attach events
  document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(+btn.dataset.id));
  });
  document.querySelectorAll(".qty-inc").forEach(btn => {
    btn.addEventListener("click", () => changeQty(+btn.dataset.id, 1));
  });
  document.querySelectorAll(".qty-dec").forEach(btn => {
    btn.addEventListener("click", () => changeQty(+btn.dataset.id, -1));
  });
  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleWishlist(+btn.dataset.id, btn));
  });
}

// ---- WISHLIST ----
let wishlist = [];
function isWishlisted(id) { return wishlist.includes(id); }
function toggleWishlist(id, btn) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    btn.innerHTML = '<i class="far fa-heart" style="color:#888"></i>';
    btn.classList.remove("liked");
    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    btn.innerHTML = '<i class="fas fa-heart" style="color:#e8421a"></i>';
    btn.classList.add("liked");
    showToast("Added to wishlist ❤️");
  }
}

// ---- CART LOGIC ----
function addToCart(id) {
  const item = FOOD_DATA.find(f => f.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  renderFoodCards();
  showToast(`${item.name} added to cart 🛒`);
  animateCartBtn();
}

function changeQty(id, delta) {
  const existing = cart.find(c => c.id === id);
  if (!existing) return;
  existing.qty += delta;
  if (existing.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
    showToast("Item removed from cart");
  }
  updateCartUI();
  renderFoodCards();
}

function removeFromCart(id) {
  const item = cart.find(c => c.id === id);
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
  renderFoodCards();
  if (item) showToast(`${item.name} removed`);
}

function changeCartQty(id, delta) {
  const existing = cart.find(c => c.id === id);
  if (!existing) return;
  existing.qty += delta;
  if (existing.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
    showToast("Item removed from cart");
    renderFoodCards();
  }
  updateCartUI();
  renderCartSidebar();
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  cartCount.textContent = total;
  if (total > 0) cartCount.classList.add("show");
  else cartCount.classList.remove("show");
  renderCartSidebar();
}

function renderCartSidebar() {
  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.appendChild(cartEmpty);
    cartEmpty.style.display = "flex";
    cartFooter.style.display = "none";
    return;
  }

  cartEmpty.style.display = "none";
  cartFooter.style.display = "flex";

  cart.forEach(item => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=60'"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
        <div class="cart-item-qty" style="margin-top:6px">
          <button class="cart-qty-btn" data-id="${item.id}" data-d="-1"><i class="fas fa-minus"></i></button>
          <span style="font-weight:700;min-width:20px;text-align:center">${item.qty}</span>
          <button class="cart-qty-btn" data-id="${item.id}" data-d="1"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
    `;
    cartItemsEl.appendChild(el);
  });

  // Subtotal & total
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  cartSubtotal.textContent = `₹${sub}`;
  cartTotal.textContent = `₹${sub}`;

  document.querySelectorAll(".cart-qty-btn").forEach(btn => {
    btn.addEventListener("click", () => changeCartQty(+btn.dataset.id, +btn.dataset.d));
  });
  document.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(+btn.dataset.id));
  });
}

function animateCartBtn() {
  cartBtn.style.transform = "scale(1.2)";
  setTimeout(() => { cartBtn.style.transform = ""; }, 200);
}

// ---- CART SIDEBAR TOGGLE ----
function openCart() {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// ---- CATEGORY TABS ----
document.querySelectorAll(".cat-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCat = tab.dataset.cat;
    renderFoodCards();

    // Smooth scroll to grid
    document.querySelector(".food-section").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ---- SEARCH ----
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderFoodCards();
});

// ---- CHECKOUT ----
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;
  closeCart();
  setTimeout(() => {
    modalOverlay.classList.add("active");
  }, 400);
});

modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  cart = [];
  updateCartUI();
  renderFoodCards();
  showToast("Thank you for ordering! 🎉");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove("active");
});

// ---- TOAST ----
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

// ---- NAVBAR ACTIVE LINK ON SCROLL ----
const sections = document.querySelectorAll("section[id], nav");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll("section[id]").forEach(s => observer.observe(s));

// ---- HAMBURGER (Mobile) ----
document.getElementById("hamburger").addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  if (!links) return;
  if (links.style.display === "flex") {
    links.style.display = "";
  } else {
    links.style.cssText = "display:flex;flex-direction:column;position:absolute;top:70px;left:0;right:0;background:#fffaf7;padding:16px 24px;border-bottom:1.5px solid #f0ddd6;z-index:999;gap:8px";
  }
});

// ---- INIT ----
renderFoodCards();
renderCartSidebar();

console.log("🌶️ SpiceRush loaded successfully!");