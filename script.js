// =========================
// ARQUIVO: script.js
// =========================



// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const icon = themeToggle.querySelector("i");

  // ALTERAR ÍCONE

  if(document.body.classList.contains("dark")){

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

    localStorage.setItem("theme", "dark");

  }

  else{

    icon.classList.remove("fa-sun");

    icon.classList.add("fa-moon");

    localStorage.setItem("theme", "light");

  }

});



// =========================
// SALVAR TEMA
// =========================

window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "dark"){

    document.body.classList.add("dark");

    const icon = themeToggle.querySelector("i");

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
// FECHAR MENU AO CLICAR
// =========================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});



// =========================
// HEADER EFEITO SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

  }

  else{

    header.style.boxShadow = "none";

  }

});



// =========================
// BOTÕES PRODUTOS
// =========================

const buyButtons = document.querySelectorAll(".product-info button");

buyButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // EVITA CLIQUES DUPLOS

    if(button.classList.contains("active")) return;

    button.classList.add("active");

    // ALTERA TEXTO

    button.innerHTML = "Adicionado ✓";

    // MUDA COR

    button.style.background = "#28c76f";

    // VOLTAR

    setTimeout(() => {

      button.innerHTML = "Comprar";

      button.style.background = "";

      button.classList.remove("active");

    }, 2000);

  });

});



// =========================
// NEWSLETTER
// =========================

const newsletterBtn = document.querySelector(".newsletter-box button");

const newsletterInput = document.querySelector(".newsletter-box input");

newsletterBtn.addEventListener("click", () => {

  const email = newsletterInput.value.trim();

  // CAMPO VAZIO

  if(email === ""){

    alert("Digite seu e-mail!");

    return;

  }

  // VALIDAÇÃO

  if(!email.includes("@") || !email.includes(".")){

    alert("Digite um e-mail válido!");

    return;

  }

  // SUCESSO

  alert("Cadastro realizado com sucesso!");

  newsletterInput.value = "";

});



// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const cards = document.querySelectorAll(
  ".product-card, .benefit-card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

}, {
  threshold:0.2
});

cards.forEach((card) => {

  observer.observe(card);

});



// =========================
// EFEITO PARALLAX HERO
// =========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  let scroll = window.pageYOffset;

  hero.style.backgroundPositionY = scroll * 0.5 + "px";

});



// =========================
// SCROLL SUAVE
// =========================

const links = document.querySelectorAll('a[href^="#"]');

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
// BOTÃO HERO
// =========================

const heroButton = document.querySelector(".hero-content button");

heroButton.addEventListener("click", () => {

  const products = document.querySelector(".products");

  products.scrollIntoView({
    behavior:"smooth"
  });

});



// =========================
// EFEITO HOVER PRODUTOS
// =========================

const products = document.querySelectorAll(".product-card");

products.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-(y - rect.height / 2) / 25}deg)
      rotateY(${(x - rect.width / 2) / 25}deg)
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
// LOADING PAGE
// =========================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});



// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
  ".section-title, .banner-content, .newsletter"
);

const revealObserver = new IntersectionObserver((entries) => {

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
