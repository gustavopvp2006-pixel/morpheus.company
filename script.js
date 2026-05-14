// =========================
// ARQUIVO: script.js
// =========================


// =========================
// BOTÕES DOS PRODUTOS
// =========================

const buttons = document.querySelectorAll(".produto-card button");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    // EVITA CLIQUE DUPLO

    if(button.classList.contains("active")) return;

    button.classList.add("active");

    // TEXTO

    button.innerHTML = "Adicionado ✓";

    // ESTILO

    button.style.background = "#7bf1a8";
    button.style.color = "#000";

    // VOLTAR AO NORMAL

    setTimeout(() => {

      button.innerHTML = "Adicionar ao Carrinho";

      button.style.background = "#d8b4fe";

      button.style.color = "#000";

      button.classList.remove("active");

    }, 2000);

  });

});


// =========================
// NEWSLETTER
// =========================

const newsletterBtn = document.querySelector(".newsletter button");

const newsletterInput = document.querySelector(".newsletter input");

newsletterBtn.addEventListener("click", () => {

  const email = newsletterInput.value;

  // VERIFICAÇÃO

  if(email === ""){

    alert("Digite seu e-mail!");

    return;

  }

  // VALIDA EMAIL

  if(!email.includes("@") || !email.includes(".")){

    alert("Digite um e-mail válido!");

    return;

  }

  // SUCESSO

  alert("Obrigado por se cadastrar na Morpheus Company!");

  newsletterInput.value = "";

});


// =========================
// MENU MOBILE
// =========================

const mobileMenu = document.querySelector(".menu-mobile");

const nav = document.querySelector(".nav");

mobileMenu.addEventListener("click", () => {

  nav.classList.toggle("active");

});


// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,0.85)";

    header.style.borderBottom = "1px solid rgba(255,255,255,0.08)";

  }

  else{

    header.style.background = "rgba(0,0,0,0.65)";

  }

});


// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const cards = document.querySelectorAll(
  ".produto-card, .cupom, .ajuda-card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

cards.forEach((card) => {

  observer.observe(card);

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

    section.scrollIntoView({
      behavior: "smooth"
    });

    // FECHAR MENU MOBILE

    nav.classList.remove("active");

  });

});
