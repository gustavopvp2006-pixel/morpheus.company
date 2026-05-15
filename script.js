// =========================
// MENU LATERAL
// =========================

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");

// ABRIR MENU

menuBtn.addEventListener("click", () => {

  sidebar.classList.add("active");

  overlay.classList.add("active");

});

// FECHAR MENU

closeMenu.addEventListener("click", closeSidebar);

overlay.addEventListener("click", closeSidebar);

function closeSidebar(){

  sidebar.classList.remove("active");

  overlay.classList.remove("active");

}

// =========================
// CARRINHO
// =========================

const cartButtons =
document.querySelectorAll(".add-cart");

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

// ARRAY CARRINHO

let cart = [];

// =========================
// ABRIR CARRINHO
// =========================

cartButton.addEventListener("click", () => {

  cartSidebar.classList.add("active");

  overlay.classList.add("active");

});

// =========================
// FECHAR CARRINHO
// =========================

closeCart.addEventListener("click", () => {

  cartSidebar.classList.remove("active");

  overlay.classList.remove("active");

});

// =========================
// ADICIONAR PRODUTO
// =========================

cartButtons.forEach(button => {

  button.addEventListener("click", () => {

    const name =
    button.dataset.name;

    const price =
    button.dataset.price;

    // ADICIONAR ITEM

    cart.push({

      name,
      price

    });

    // ATUALIZAR CARRINHO

    updateCart();

    // ABRIR CARRINHO

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

    // POPUP

    showPopup();

  });

});

// =========================
// POPUP
// =========================

function showPopup(){

  cartPopup.classList.add("show");

  setTimeout(() => {

    cartPopup.classList.remove("show");

  }, 2000);

}

// =========================
// ATUALIZAR CARRINHO
// =========================

function updateCart(){

  // LIMPAR

  cartItems.innerHTML = "";

  // CARRINHO VAZIO

  if(cart.length === 0){

    cartItems.innerHTML = `

      <p class="empty-cart">

        Seu carrinho está vazio.

      </p>

    `;

  }

  // CARRINHO COM ITENS

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

  // CONTADOR

  cartCount.innerText = cart.length;

  // BOTÕES REMOVER

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
// FINALIZAR PEDIDO
// =========================

finishOrder.addEventListener("click", () => {

  // VERIFICAR CARRINHO

  if(cart.length === 0){

    alert("Seu carrinho está vazio.");

    return;

  }

  // MENSAGEM

  let message =
  "Olá, gostaria de finalizar meu pedido:%0A%0A";

  let total = 0;

  // LISTAR ITENS

  cart.forEach(item => {

    message +=
    `• ${item.name} - R$ ${item.price}%0A`;

    total += Number(item.price);

  });

  // TOTAL

  message +=
  `%0ATotal: R$ ${total}`;

  // NÚMERO WHATSAPP

  const phone =
  "5511987984894";

  // LINK FINAL

  const url =
  `https://wa.me/${phone}?text=${message}`;

  // ABRIR WHATSAPP

  window.open(url, "_blank");

});

// =========================
// FECHAR COM ESC
// =========================

document.addEventListener("keydown", (event) => {

  if(event.key === "Escape"){

    closeSidebar();

    cartSidebar.classList.remove("active");

  }

});

// =========================
// ANIMAÇÃO HEADER
// =========================

window.addEventListener("scroll", () => {

  const header =
  document.querySelector(".top-header");

  if(window.scrollY > 30){

    header.style.height = "90px";

  }else{

    header.style.height = "110px";

  }

});
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

// ABRIR BUSCA

searchBtn.addEventListener("click", () => {

  searchContainer.classList.toggle("active");

  searchInput.focus();

});

// PESQUISA EM TEMPO REAL

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

    }else{

      card.style.display = "none";

    }

  });

});

// ENTER = LOCALIZA

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

        // SCROLL SUAVE

        card.scrollIntoView({

          behavior: "smooth",
          block: "center"

        });

        // EFEITO

        card.style.transform =
        "scale(1.04)";

        card.style.boxShadow =
        "0 0 30px rgba(0,0,0,0.25)";

        setTimeout(() => {

          card.style.transform = "";

          card.style.boxShadow = "";

        }, 2000);

      }

    });

  }

});

// =========================
// AJUDA
// =========================

const helpBtn =
document.getElementById("helpBtn");

const helpModal =
document.getElementById("helpModal");

const closeHelp =
document.getElementById("closeHelp");

// ABRIR

helpBtn.addEventListener("click", (e) => {

  e.preventDefault();

  helpModal.classList.add("active");

});

// FECHAR

closeHelp.addEventListener("click", () => {

  helpModal.classList.remove("active");

});

// FAQ

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question =
  item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});
// =========================
// AJUDA SIDEBAR
// =========================

const sidebarHelpBtn =
document.getElementById("sidebarHelpBtn");

sidebarHelpBtn.addEventListener("click", (e) => {

  e.preventDefault();

  // FECHA MENU

  sidebar.classList.remove("active");

  overlay.classList.remove("active");

  // ABRE AJUDA

  helpModal.classList.add("active");

});

