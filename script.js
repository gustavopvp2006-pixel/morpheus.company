// =========================
// ARQUIVO: script.js
// =========================



// =========================
// BOTÕES DOS PRODUTOS
// =========================

const buttons = document.querySelectorAll(".produto-card button");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    // EVITA CLIQUES DUPLOS

    if(button.classList.contains("active")) return;

    button.classList.add("active");

    // ALTERA TEXTO

    button.innerHTML = "Adicionado ✓";

    // ALTERA COR

    button.style.background = "#7bf1a8";
    button.style.color = "#000";

    // VOLTA AO NORMAL

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

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,0.92)";

    header.style.backdropFilter = "blur(10px)";

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

}, {
  threshold: 0.2
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

    if(section){

      section.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});



// =========================
// CARROSSEL MANUAL
// =========================

const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

let autoPlay;



// MOSTRAR SLIDE

function showSlide(index){

  slides.forEach((slide) => {

    slide.classList.remove("active");

  });

  slides[index].classList.add("active");

}



// PRÓXIMO SLIDE

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){

    currentSlide = 0;

  }

  showSlide(currentSlide);

}



// SLIDE ANTERIOR

function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){

    currentSlide = slides.length - 1;

  }

  showSlide(currentSlide);

}



// EVENTOS BOTÕES

nextBtn.addEventListener("click", () => {

  nextSlide();

  resetAutoPlay();

});



prevBtn.addEventListener("click", () => {

  prevSlide();

  resetAutoPlay();

});



// AUTO PLAY

function startAutoPlay(){

  autoPlay = setInterval(() => {

    nextSlide();

  }, 5000);

}



// RESET AUTO PLAY

function resetAutoPlay(){

  clearInterval(autoPlay);

  startAutoPlay();

}



// INICIAR

showSlide(currentSlide);

startAutoPlay();



// =========================
// PAUSAR CARROSSEL NO HOVER
// =========================

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", () => {

  clearInterval(autoPlay);

});

carousel.addEventListener("mouseleave", () => {

  startAutoPlay();

});
