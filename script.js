// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    if(loader){

      loader.classList.add("hide");

    }

  }, 1000);

});



// =========================
// DARK MODE
// =========================

const themeToggle =
document.getElementById("theme-toggle");

if(themeToggle){

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeToggle.querySelector("i");

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

}



// =========================
// TEMA SALVO
// =========================

window.addEventListener("DOMContentLoaded", () => {

  const savedTheme =
  localStorage.getItem("theme");

  if(savedTheme === "light"){

    document.body.classList.add("light");

    const icon =
    document.querySelector("#theme-toggle i");

    if(icon){

      icon.classList.remove("fa-moon");

      icon.classList.add("fa-sun");

    }

  }

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

  });

}



// =========================
// FECHAR MENU
// =========================

const navLinks =
document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});



// =========================
// HEADER SCROLL
// =========================

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(!header) return;

  if(window.scrollY > 50){

    header.style.background =
    "rgba(0,0,0,.88)";

    header.style.backdropFilter =
    "blur(16px)";

  }

  else{

    header.style.background =
    "rgba(0,0,0,.45)";

  }

});



// =========================
// BOTÃO HERO
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
// BOTÕES PRODUTO
// =========================

const productButtons =
document.querySelectorAll(".product-info button");

let cartCount = 0;

const cartBadge =
document.createElement("span");

cartBadge.classList.add("cart-badge");

cartBadge.innerHTML = "0";

const cartContainer =
document.querySelector(".fa-cart-shopping");

if(cartContainer){

  cartContainer.parentElement.appendChild(cartBadge);

}

productButtons.forEach((button) => {

  button.addEventListener("click", () => {

    if(button.classList.contains("active")) return;

    button.classList.add("active");

    button.innerHTML = "ADICIONADO ✓";

    button.style.background = "#22c55e";

    cartCount++;

    cartBadge.innerHTML = cartCount;

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

if(newsletterBtn){

  newsletterBtn.addEventListener("click", () => {

    const email =
    newsletterInput.value.trim();

    if(email === ""){

      alert("Digite seu e-mail!");

      return;

    }

    if(!email.includes("@") ||
       !email.includes(".")){

      alert("Digite um e-mail válido!");

      return;

    }

    alert(
      "Você entrou para o DROP da Morpheus Company 🔥"
    );

    newsletterInput.value = "";

  });

}



// =========================
// SCROLL SUAVE
// =========================

const links =
document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const id =
    link.getAttribute("href");

    const section =
    document.querySelector(id);

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

const revealElements =
document.querySelectorAll(
".product-card, .mini-item, .section-title"
);

const revealObserver =
new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

}, {

  threshold:0.15

});

revealElements.forEach((element) => {

  revealObserver.observe(element);

});



// =========================
// EFEITO 3D PRODUTOS
// =========================

if(window.innerWidth > 900){

  const products =
  document.querySelectorAll(".product-card");

  products.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

      const rect =
      card.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const rotateY =
      ((x / rect.width) - 0.5) * 12;

      const rotateX =
      ((y / rect.height) - 0.5) * -12;

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
// =========================
// FAQ ACCORDION
// =========================

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question =
  item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // FECHA OUTROS

    faqItems.forEach((faq) => {

      if(faq !== item){

        faq.classList.remove("active");

      }

    });

    // ABRE O CLICADO

    item.classList.toggle("active");

  });

});
const images = document.querySelectorAll(".carousel-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showImage(i) {
  images.forEach(img => img.classList.remove("active"));
  images[i].classList.add("active");
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// autoplay automático (troca a cada 3 segundos)
setInterval(nextImage, 3000);
