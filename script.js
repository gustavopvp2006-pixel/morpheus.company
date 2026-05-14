// =========================
// MORPHEUS COMPANY
// PREMIUM TRAP JS
// ACESSIBILIDADE + UX
// =========================



// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    if(loader){

      loader.classList.add("hide");

    }

  }, 900);

});



// =========================
// DARK MODE
// =========================

const themeToggle =
document.getElementById("theme-toggle");

function updateThemeIcon(){

  const icon =
  themeToggle?.querySelector("i");

  if(!icon) return;

  if(document.body.classList.contains("light")){

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

    themeToggle.setAttribute(
      "aria-label",
      "Ativar modo escuro"
    );

  }

  else{

    icon.classList.remove("fa-sun");

    icon.classList.add("fa-moon");

    themeToggle.setAttribute(
      "aria-label",
      "Ativar modo claro"
    );

  }

}

if(themeToggle){

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const currentTheme =
    document.body.classList.contains("light")
    ? "light"
    : "dark";

    localStorage.setItem(
      "theme",
      currentTheme
    );

    updateThemeIcon();

  });

}



// =========================
// TEMA SALVO
// =========================

window.addEventListener("DOMContentLoaded", () => {

  const savedTheme =
  localStorage.getItem("theme");

  if(savedTheme === "light"){

    document.body.classList.add("light");

  }

  updateThemeIcon();

});



// =========================
// MENU MOBILE
// =========================

const menuMobile =
document.querySelector(".menu-mobile");

const nav =
document.querySelector(".nav");

if(menuMobile && nav){

  menuMobile.addEventListener("click", () => {

    nav.classList.toggle("active");

    const expanded =
    nav.classList.contains("active");

    menuMobile.setAttribute(
      "aria-expanded",
      expanded
    );

  });

}



// =========================
// FECHAR MENU MOBILE
// =========================

const navLinks =
document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

    menuMobile?.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});



// =========================
// HEADER SCROLL
// =========================

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(!header) return;

  if(window.scrollY > 40){

    header.style.background =
    "rgba(0,0,0,.92)";

    header.style.backdropFilter =
    "blur(18px)";

  }

  else{

    if(document.body.classList.contains("light")){

      header.style.background =
      "rgba(255,255,255,.78)";

    }

    else{

      header.style.background =
      "rgba(0,0,0,.45)";

    }

  }

});



// =========================
// HERO BUTTON
// =========================

const heroButton =
document.querySelector(".btn-primary");

if(heroButton){

  heroButton.addEventListener("click", () => {

    const products =
    document.querySelector(".products");

    if(products){

      products.scrollIntoView({

        behavior:"smooth"

      });

    }

  });

}



// =========================
// CART BADGE
// =========================

const cartIcon =
document.querySelector(".fa-cart-shopping");

let cartCount = 0;

const cartBadge =
document.createElement("span");

cartBadge.classList.add("cart-badge");

cartBadge.innerHTML = "0";

cartBadge.setAttribute(
  "aria-label",
  "Quantidade de itens no carrinho"
);

if(cartIcon){

  cartIcon.parentElement.appendChild(cartBadge);

}



// =========================
// PRODUCT BUTTONS
// =========================

const productButtons =
document.querySelectorAll(".product-info button");

productButtons.forEach((button) => {

  button.addEventListener("click", () => {

    if(button.classList.contains("active")) return;

    button.classList.add("active");

    button.innerHTML =
    "ADICIONADO ✓";

    button.style.background =
    "#22c55e";

    button.style.color =
    "#ffffff";

    cartCount++;

    cartBadge.innerHTML =
    cartCount;

    setTimeout(() => {

      button.innerHTML =
      "ADICIONAR";

      button.style.background =
      "";

      button.style.color =
      "";

      button.classList.remove("active");

    }, 1800);

  });

});



// =========================
// NEWSLETTER
// =========================

const newsletterBtn =
document.querySelector(
".newsletter-box button"
);

const newsletterInput =
document.querySelector(
".newsletter-box input"
);

function validateEmail(email){

  const regex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);

}

if(newsletterBtn){

  newsletterBtn.addEventListener("click", () => {

    const email =
    newsletterInput.value.trim();

    if(email === ""){

      alert(
        "Digite seu e-mail."
      );

      newsletterInput.focus();

      return;

    }

    if(!validateEmail(email)){

      alert(
        "Digite um e-mail válido."
      );

      newsletterInput.focus();

      return;

    }

    alert(
      "Você entrou para o DROP da Morpheus Company 🔥"
    );

    newsletterInput.value = "";

  });

}



// =========================
// ENTER NO INPUT
// =========================

newsletterInput?.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    newsletterBtn.click();

  }

});



// =========================
// SCROLL SUAVE
// =========================

const smoothLinks =
document.querySelectorAll(
'a[href^="#"]'
);

smoothLinks.forEach((link) => {

  link.addEventListener("click", (e) => {

    const id =
    link.getAttribute("href");

    const section =
    document.querySelector(id);

    if(section){

      e.preventDefault();

      section.scrollIntoView({

        behavior:"smooth"

      });

    }

  });

});



// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const revealElements =
document.querySelectorAll(
`
.product-card,
.mini-item,
.section-title,
.faq-item,
.banner-content,
.newsletter
`
);

const revealObserver =
new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

}, {

  threshold:0.12

});

revealElements.forEach((element) => {

  revealObserver.observe(element);

});



// =========================
// EFEITO 3D PRODUTOS
// =========================

if(window.innerWidth > 900){

  const products =
  document.querySelectorAll(
  ".product-card"
  );

  products.forEach((card) => {

    card.addEventListener(
    "mousemove",
    (e) => {

      const rect =
      card.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const rotateY =
      ((x / rect.width) - 0.5) * 10;

      const rotateX =
      ((y / rect.height) - 0.5) * -10;

      card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      `;

    });

    card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      `;

    });

  });

}



// =========================
// PARALLAX HERO
// =========================

const hero =
document.querySelector(".hero");

window.addEventListener("scroll", () => {

  if(hero){

    let scroll =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    scroll * 0.4 + "px";

  }

});



// =========================
// FAQ ACCORDION
// =========================

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach((item, index) => {

  const question =
  item.querySelector(".faq-question");

  const answer =
  item.querySelector(".faq-answer");

  // ACESSIBILIDADE

  question.setAttribute(
    "tabindex",
    "0"
  );

  question.setAttribute(
    "role",
    "button"
  );

  question.setAttribute(
    "aria-expanded",
    "false"
  );

  answer.setAttribute(
    "id",
    `faq-answer-${index}`
  );

  question.setAttribute(
    "aria-controls",
    `faq-answer-${index}`
  );

  function toggleFaq(){

    const isActive =
    item.classList.contains("active");

    faqItems.forEach((faq) => {

      faq.classList.remove("active");

      faq.querySelector(".faq-question")
      ?.setAttribute(
        "aria-expanded",
        "false"
      );

    });

    if(!isActive){

      item.classList.add("active");

      question.setAttribute(
        "aria-expanded",
        "true"
      );

    }

  }

  question.addEventListener(
    "click",
    toggleFaq
  );

  question.addEventListener(
    "keydown",
    (e) => {

      if(
        e.key === "Enter" ||
        e.key === " "
      ){

        e.preventDefault();

        toggleFaq();

      }

    }
  );

});



// =========================
// ACESSIBILIDADE IMAGENS
// =========================

const images =
document.querySelectorAll("img");

images.forEach((img) => {

  if(!img.hasAttribute("alt")){

    img.setAttribute(
      "alt",
      "Imagem da Morpheus Company"
    );

  }

});



// =========================
// BOTÃO VOLTAR TOPO
// =========================

const backToTop =
document.createElement("button");

backToTop.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

backToTop.classList.add(
"back-to-top"
);

backToTop.setAttribute(
"aria-label",
"Voltar ao topo"
);

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

  if(window.scrollY > 500){

    backToTop.classList.add("show");

  }

  else{

    backToTop.classList.remove("show");

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({

    top:0,
    behavior:"smooth"

  });

});



// =========================
// PRELOAD HERO IMAGE
// =========================

const preloadImage =
new Image();

preloadImage.src =
"./img/hero-bg.jpg";



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
