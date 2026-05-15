// MENU

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

// CARRINHO

const cartButtons = document.querySelectorAll(".add-cart");

const cartSidebar = document.getElementById("cartSidebar");

const cartIcon = document.querySelector(".fa-bag-shopping");

const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");

const finishOrder = document.getElementById("finishOrder");

let cart = [];

// ABRIR CARRINHO

cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

// FECHAR

closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

// ADICIONAR

cartButtons.forEach(button => {

  button.addEventListener("click", () => {

    const name = button.dataset.name;

    const price = button.dataset.price;

    cart.push({ name, price });

    updateCart();

    cartSidebar.classList.add("active");

  });

});

// UPDATE

function updateCart(){

  cartItems.innerHTML = "";

  if(cart.length === 0){

    cartItems.innerHTML = `
      <p class="empty-cart">
        Seu carrinho está vazio.
      </p>
    `;

  }else{

    cart.forEach(item => {

      cartItems.innerHTML += `
        <div class="cart-item">

          <div>
            <h4>${item.name}</h4>
            <p>R$ ${item.price}</p>
          </div>

        </div>
      `;

    });

  }

  cartCount.innerText = cart.length;

}

// WHATSAPP

finishOrder.addEventListener("click", () => {

  if(cart.length === 0) return;

  let message =
  "Olá, gostaria de finalizar meu pedido:%0A%0A";

  cart.forEach(item => {

    message += `• ${item.name} - R$ ${item.price}%0A`;

  });

  const phone = "5511987654321";

  const url =
  `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");

});
