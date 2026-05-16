// =========================
// ELEMENTOS
// =========================

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const cartSidebar = document.getElementById("cartSidebar");
const cartButton = document.getElementById("cartButton");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const finishOrder = document.getElementById("finishOrder");
const cartPopup = document.getElementById("cartPopup");

const cartButtons = document.querySelectorAll(".add-cart");

// FAQ
const faqModal = document.getElementById("faqModal");
const openFaq = document.getElementById("openFaq");
const sidebarFaqBtn = document.getElementById("sidebarFaqBtn");
const closeFaq = document.getElementById("closeFaq");
const faqItems = document.querySelectorAll(".faq-item");

// ACESSIBILIDADE
const accessibilityBtn = document.getElementById("accessibilityBtn");
const accessibilityPanel = document.getElementById("accessibilityPanel");
const closeAccessibility = document.getElementById("closeAccessibility");

const sidebarAccessibilityBtn = document.getElementById("sidebarAccessibilityBtn");

// =========================
// ESTADO
// =========================

let cart = [];
let currentFontSize = 16;

// =========================
// MENU
// =========================

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar?.classList.add("active");
    overlay?.classList.add("active");
  });
}

function closeSidebar() {
  sidebar?.classList.remove("active");
  overlay?.classList.remove("active");
}

if (closeMenu) {
  closeMenu.addEventListener("click", closeSidebar);
}

// =========================
// OVERLAY
// =========================

if (overlay) {
  overlay.addEventListener("click", () => {
    closeSidebar();
    cartSidebar?.classList.remove("active");
    faqModal?.classList.remove("active");
    accessibilityPanel?.classList.remove("active");
  });
}

// =========================
// CARRINHO
// =========================

if (cartButton) {
  cartButton.addEventListener("click", () => {
    cartSidebar?.classList.add("active");
    overlay?.classList.add("active");
  });
}

if (closeCart) {
  closeCart.addEventListener("click", () => {
    cartSidebar?.classList.remove("active");
    overlay?.classList.remove("active");
  });
}

// =========================
// ADICIONAR PRODUTOS
// =========================

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cart.push({
      name: button.dataset.name,
      price: button.dataset.price
    });

    updateCart();

    cartSidebar?.classList.add("active");
    overlay?.classList.add("active");

    showPopup();
  });
});

// =========================
// POPUP
// =========================

function showPopup() {
  if (!cartPopup) return;

  cartPopup.classList.add("show");

  setTimeout(() => {
    cartPopup.classList.remove("show");
  }, 2000);
}

// =========================
// ATUALIZAR CARRINHO
// =========================

function updateCart() {
  if (!cartItems) return;

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">Seu carrinho está vazio.</p>`;
  } else {
    cart.forEach((item, index) => {
      cartItems.innerHTML += `
        <div class="cart-item">
          <div>
            <h4>${item.name}</h4>
            <p>R$ ${item.price}</p>
          </div>

          <button class="remove-item" data-index="${index}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    });
  }

  if (cartCount) {
    cartCount.innerText = cart.length;
  }

  document.querySelectorAll(".remove-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      cart.splice(index, 1);
      updateCart();
    });
  });
}

// =========================
// FINALIZAR PEDIDO
// =========================

if (finishOrder) {
  finishOrder.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    let message = "Olá, gostaria de finalizar meu pedido:%0A%0A";
    let total = 0;

    cart.forEach(item => {
      message += `• ${item.name} - R$ ${item.price}%0A`;
      total += Number(item.price);
    });

    message += `%0ATotal: R$ ${total}`;

    const phone = "5511987984894";

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );
  });
}

// =========================
// BUSCA
// =========================

const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchContainer?.classList.toggle("active");
    searchInput?.focus();
  });
}

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();

      card.style.display = title.includes(value) ? "block" : "none";
    });
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const value = searchInput.value.toLowerCase();
      let found = false;

      productCards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value) && !found) {
          found = true;

          card.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

          card.style.transform = "scale(1.03)";
          card.style.boxShadow = "0 0 30px rgba(0,0,0,0.2)";

          setTimeout(() => {
            card.style.transform = "";
            card.style.boxShadow = "";
          }, 2000);
        }
      });
    }
  });
}

// =========================
// FAQ
// =========================

function openFaqModal() {
  faqModal?.classList.add("active");
  overlay?.classList.add("active");
  sidebar?.classList.remove("active");
}

function closeFaqModal() {
  faqModal?.classList.remove("active");
  overlay?.classList.remove("active");
}

if (openFaq) {
  openFaq.addEventListener("click", e => {
    e.preventDefault();
    openFaqModal();
  });
}

if (sidebarFaqBtn) {
  sidebarFaqBtn.addEventListener("click", e => {
    e.preventDefault();
    openFaqModal();
  });
}

if (closeFaq) {
  closeFaq.addEventListener("click", closeFaqModal);
}

if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach(i => i.classList.remove("active"));

      if (!isActive) item.classList.add("active");
    });
  });
}

// =========================
// TECLADO ESC
// =========================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSidebar();
    cartSidebar?.classList.remove("active");
    faqModal?.classList.remove("active");
    accessibilityPanel?.classList.remove("active");
    overlay?.classList.remove("active");
  }
});

// =========================
// HEADER SCROLL
// =========================

window.addEventListener("scroll", () => {
  const header = document.querySelector(".top-header");
  if (!header) return;

  header.style.background =
    window.scrollY > 40
      ? "rgba(0,0,0,0.92)"
      : "rgba(0,0,0,0.96)";
});

// =========================
// ACESSIBILIDADE PREMIUM
// =========================

const accessibilityBtn =
document.getElementById("accessibilityBtn");

const accessibilityPanel =
document.getElementById("accessibilityPanel");

let fontSize = parseInt(localStorage.getItem("fontSize")) || 16;

// abrir/fechar painel
if (accessibilityBtn) {
  accessibilityBtn.addEventListener("click", () => {
    accessibilityPanel.classList.toggle("active");
  });
}

// aplicar fonte global
function applyFont() {
  document.documentElement.style.fontSize = fontSize + "px";
  localStorage.setItem("fontSize", fontSize);
}

// aumentar texto
function changeFontSize(value) {
  fontSize += value;

  if (fontSize < 12) fontSize = 12;
  if (fontSize > 24) fontSize = 24;

  applyFont();
}

// =========================
// TEMA (CLARO / ESCURO REAL)
// =========================

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
}

function toggleLightMode() {
  if (document.body.classList.contains("light-mode")) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

// =========================
// ALTO CONTRASTE REAL
// =========================

function toggleContrast() {
  document.body.classList.toggle("high-contrast");

  const active = document.body.classList.contains("high-contrast");

  localStorage.setItem("contrast", active ? "1" : "0");
}

// =========================
// CARREGAR PREFERÊNCIAS
// =========================

(function initAccessibility() {
  // fonte
  applyFont();

  // tema
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("light-mode");
  }

  // contraste
  const contrast = localStorage.getItem("contrast");
  if (contrast === "1") {
    document.body.classList.add("high-contrast");
  }
})();
