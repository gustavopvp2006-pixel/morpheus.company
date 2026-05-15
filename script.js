// MENU LATERAL

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// POPUP CARRINHO

const cartButtons = document.querySelectorAll(".add-cart");
const popup = document.getElementById("cartPopup");

cartButtons.forEach(button => {

  button.addEventListener("click", () => {

    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 2500);

  });

});

// SCROLL HEADER

window.addEventListener("scroll", () => {

  const header = document.querySelector(".top-header");

  if(window.scrollY > 50){
    header.style.background = "#050505";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  }else{
    header.style.background = "#000";
    header.style.boxShadow = "none";
  }

});
