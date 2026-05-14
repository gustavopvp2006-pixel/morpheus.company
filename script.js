// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hide");

  }, 1200);

});



// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const icon = themeToggle.querySelector("i");

  // ALTERA ÍCONE

  if(document.body.classList.contains("light")){

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

    localStorage.setItem("theme", "light");

  }

  else{

    icon.classList.remove("fa-sun");

    icon.classList.add("fa-moon");

    localStorage.setItem("theme", "dark");

  }

});



// =========================
// SALVAR TEMA
// =========================

window.addEventListener("DOMContentLoaded", () => {

  const savedTheme = localStorage.getItem("theme");

  const icon = themeToggle.querySelector("i");

  if(savedTheme === "light"){

    document.body.classList.add("light");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

  }

});



// =========================
// MENU MOBILE
// =========================

const menuMobile = document.querySelector(".menu-mobile");

const nav = document.querySelector(".nav");

menuMobile.addEventListener("click", () => {

  nav.classList.toggle("active");

});



// =========================
// FECHAR MENU MOBILE
// =========================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});



// =========================
// HEADER SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,.85)";

    header.style.backdropFilter = "blur(16px)";

    header.style.borderBottom =
    "1px solid rgba(255,255,255,.08)";

  }

  else{

    header.style.background = "rgba(0,0,0,.45)";

  }

});



// =========================
// BOTÃO HERO
// =========================

const heroButton = document.querySelector(".btn-primary");

heroButton.addEventListener("click", () => {

  const products = document.querySelector(".products");

  products.scrollIntoView({

    behavior:"smooth"

  });

});



// =========================
// BOTÕES PRODUTOS
// =========================

const productButtons =
document.querySelectorAll(".product-info button");

productButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // EVITA DUPLO CLIQUE

    if(button.classList.contains("active")) return;

    button.classList.add("active");

    // TEXTO

    button.innerHTML = "ADICIONADO ✓";

    // ESTILO

    button.style.background = "#22c55e";

    // VOLTA

    setTimeout(() => {

      button.innerHTML = "ADICIONAR";

      button.style.background = "";

      button.classList.remove("active");

    }, 2000);

  });

});



// =========================
// NEWSLETTER
// =========================

const newsletterBtn =
document.querySelector(".newsletter-box button");

const newsletterInput =
document.querySelector(".newsletter-box input");

newsletterBtn.addEventListener("click", () => {

  const email = newsletterInput.value.trim();

  // CAMPO VAZIO

  if(email === ""){

    alert("Digite seu e-mail!");

    return;

  }

  // VALIDAÇÃO

  if(!email.includes("@") ||
     !email.includes(".")){

    alert("Digite um e-mail válido!");

    return;

  }

  // SUCESSO

  alert("Você entrou para o DROP da Morpheus Company 🔥");

  newsletterInput.value = "";

});



// =========================
// SCROLL SUAVE
// =========================

const links =
document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const id = link.getAttribute("href");

    const section = document.querySelector(id);

    if(section){

      section.scrollIntoView({

        behavior:"smooth"

      });

    }

  });

});



// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const revealElements = document.querySelectorAll(
  ".product-card, .mini-item, .section-title"
);

const revealObserver = new IntersectionObserver(
(entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

}, {

  threshold:0.2

});

revealElements.forEach((element) => {

  revealObserver.observe(element);

});



// =========================
// EFEITO 3D PRODUTOS
// =========================

const products =
document.querySelectorAll(".product-card");

products.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY =
    ((x / rect.width) - 0.5) * 16;

    const rotateX =
    ((y / rect.height) - 0.5) * -16;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;

  });

});



// =========================
// PARALLAX HERO
// =========================

const hero =
document.querySelector(".hero");

window.addEventListener("scroll", () => {

  let scroll = window.pageYOffset;

  hero.style.backgroundPositionY =
  scroll * 0.5 + "px";

});



// =========================
// ANIMAÇÃO TEXTO HERO
// =========================

const heroTitle =
document.querySelector(".hero-left h1");

window.addEventListener("load", () => {

  heroTitle.style.opacity = "0";

  heroTitle.style.transform = "translateY(40px)";

  setTimeout(() => {

    heroTitle.style.transition = "1s";

    heroTitle.style.opacity = "1";

    heroTitle.style.transform =
    "translateY(0px)";

  }, 1300);

});



// =========================
// EFEITO GLOW MOUSE
// =========================

document.addEventListener("mousemove", (e) => {

  const x = e.clientX;
  const y = e.clientY;

  document.body.style.background = `
    radial-gradient(
      circle at ${x}px ${y}px,
      rgba(77,163,255,.06),
      transparent 25%
    ),
    var(--bg)
  `;

});



// =========================
// CONTADOR CARRINHO
// =========================

const cartIcon =
document.querySelector(".fa-cart-shopping");

let cartCount = 0;

// CRIAR BOLINHA

const cartBadge =
document.createElement("span");

cartBadge.classList.add("cart-badge");

cartBadge.innerHTML = "0";

cartIcon.parentElement.appendChild(cartBadge);

// SOMAR PRODUTOS

productButtons.forEach((button) => {

  button.addEventListener("click", () => {

    cartCount++;

    cartBadge.innerHTML = cartCount;

  });

});



// =========================
// HOVER HERO IMAGE
// =========================

const heroImage =
document.querySelector(".hero-right img");

heroImage.addEventListener("mousemove", (e) => {

  const rect = heroImage.getBoundingClientRect();

  const x = e.clientX - rect.left;

  const y = e.clientY - rect.top;

  const rotateY =
  ((x / rect.width) - 0.5) * 10;

  const rotateX =
  ((y / rect.height) - 0.5) * -10;

  heroImage.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-10px)
  `;

});

heroImage.addEventListener("mouseleave", () => {

  heroImage.style.transform = `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    translateY(0px)
  `;

});



// =========================
// CONSOLE STYLE
// =========================

console.log(
"%cMORPHEUS COMPANY 🔥",
`
color:#4da3ff;
font-size:28px;
font-weight:bold;
`
);

console.log(
"%cLuxury Trap Jewelry",
`
color:white;
font-size:14px;
`
);
