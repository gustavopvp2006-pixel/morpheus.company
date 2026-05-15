// =========================
// ELEMENTOS
// =========================

const menuBtn =
document.getElementById("menuBtn");

const closeMenu =
document.getElementById("closeMenu");

const sidebar =
document.getElementById("sidebar");

const overlay =
document.getElementById("overlay");

const cartSidebar =
document.getElementById("cartSidebar");

const cartButton =
document.getElementById("cartButton");

const closeCart =
document.getElementById("closeCart");

const cartItems =
document.getElementById("cartItems");

const cartCount =
document.getElementById("cartCount");

const finishOrder =
document.getElementById("finishOrder");

const cartPopup =
document.getElementById("cartPopup");

const cartButtons =
document.querySelectorAll(".add-cart");

// =========================
// MENU
// =========================

if(menuBtn){

  menuBtn.addEventListener("click", () => {

    sidebar.classList.add("active");

    overlay.classList.add("active");

  });

}

function closeSidebar(){

  sidebar.classList.remove("active");

  overlay.classList.remove("active");

}

if(closeMenu){

  closeMenu.addEventListener("click", closeSidebar);

}

if(overlay){

  overlay.addEventListener("click", () => {

    closeSidebar();

    cartSidebar.classList.remove("active");

    helpModal.classList.remove("active");

  });

}

// =========================
// CARRINHO
// =========================

let cart = [];

if(cartButton){

  cartButton.addEventListener("click", () => {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

  });

}

if(closeCart){

  closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

  });

}

// =========================
// ADICIONAR PRODUTOS
// =========================

cartButtons.forEach(button => {

  button.addEventListener("click", () => {

    const name =
    button.dataset.name;

    const price =
    button.dataset.price;

    cart.push({

      name,
      price

    });

    updateCart();

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

    showPopup();

  });

});

// =========================
// POPUP
// =========================

function showPopup(){

  if(!cartPopup) return;

  cartPopup.classList.add("show");

  setTimeout(() => {

    cartPopup.classList.remove("show");

  }, 2000);

}

// =========================
// UPDATE CART
// =========================

function updateCart(){

  if(!cartItems) return;

  cartItems.innerHTML = "";

  if(cart.length === 0){

    cartItems.innerHTML = `

      <p class="empty-cart">

        Seu carrinho está vazio.

      </p>

    `;

  }

  else{

    cart.forEach((item, index) => {

      cartItems.innerHTML += `

        <div class="cart-item">

          <div>

            <h4>${item.name}</h4>

            <p>R$ ${item.price}</p>

          </div>

          <button
            class="remove-item"
            data-index="${index}"
          >

            <i class="fa-solid fa-trash"></i>

          </button>

        </div>

      `;

    });

  }

  cartCount.innerText = cart.length;

  // REMOVER

  const removeButtons =
  document.querySelectorAll(".remove-item");

  removeButtons.forEach(button => {

    button.addEventListener("click", () => {

      const index =
      button.dataset.index;

      cart.splice(index, 1);

      updateCart();

    });

  });

}

// =========================
// FINALIZAR
// =========================

if(finishOrder){

  finishOrder.addEventListener("click", () => {

    if(cart.length === 0){

      alert("Seu carrinho está vazio.");

      return;

    }

    let message =
    "Olá, gostaria de finalizar meu pedido:%0A%0A";

    let total = 0;

    cart.forEach(item => {

      message +=
      `• ${item.name} - R$ ${item.price}%0A`;

      total += Number(item.price);

    });

    message +=
    `%0ATotal: R$ ${total}`;

    // SEU WHATSAPP

    const phone =
    "5511987984894";

    const url =
    `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");

  });

}

// =========================
// BUSCA INLINE
// =========================

const searchBtn =
document.getElementById("searchBtn");

const searchContainer =
document.querySelector(".search-container");

const searchInput =
document.getElementById("searchInput");

const productCards =
document.querySelectorAll(".product-card");

if(searchBtn){

  searchBtn.addEventListener("click", () => {

    searchContainer.classList.toggle("active");

    searchInput.focus();

  });

}

// PESQUISA

if(searchInput){

  searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    productCards.forEach(card => {

      const title =
      card.querySelector("h3")
      .innerText
      .toLowerCase();

      if(title.includes(value)){

        card.style.display = "block";

      }

      else{

        card.style.display = "none";

      }

    });

  });

}

// ENTER

if(searchInput){

  searchInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

      const value =
      searchInput.value.toLowerCase();

      let found = false;

      productCards.forEach(card => {

        const title =
        card.querySelector("h3")
        .innerText
        .toLowerCase();

        if(title.includes(value) && !found){

          found = true;

          card.scrollIntoView({

            behavior: "smooth",
            block: "center"

          });

          card.style.transform =
          "scale(1.03)";

          card.style.boxShadow =
          "0 0 30px rgba(0,0,0,0.2)";

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
// HELP / FAQ
// =========================

const helpBtn =
document.getElementById("helpBtn");

const sidebarHelpBtn =
document.getElementById("sidebarHelpBtn");

const helpModal =
document.getElementById("helpModal");

const closeHelp =
document.getElementById("closeHelp");

// ABRIR FAQ TOPO

if(helpBtn && helpModal){

  helpBtn.addEventListener("click", (e) => {

    e.preventDefault();

    helpModal.classList.add("active");

  });

}

// ABRIR FAQ SIDEBAR

if(sidebarHelpBtn && helpModal){

  sidebarHelpBtn.addEventListener("click", (e) => {

    e.preventDefault();

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

    helpModal.classList.add("active");

  });

}

// FECHAR FAQ

if(closeHelp){

  closeHelp.addEventListener("click", () => {

    helpModal.classList.remove("active");

  });

}

// FAQ EXPANSIVO

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const item =
    question.parentElement;

    item.classList.toggle("active");

  });

});

// =========================
// ESC
// =========================

document.addEventListener("keydown", (event) => {

  if(event.key === "Escape"){

    closeSidebar();

    cartSidebar.classList.remove("active");

    helpModal.classList.remove("active");

  }

});
