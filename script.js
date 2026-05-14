// =========================
// ARQUIVO: script.js
// =========================

const buttons = document.querySelectorAll(".produto-card button");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    button.innerHTML = "Adicionado ✓";

    button.style.background = "#7bf1a8";

    setTimeout(() => {

      button.innerHTML = "Adicionar ao Carrinho";

      button.style.background = "#d8b4fe";

    }, 2000);

  });

});


// NEWSLETTER

const newsletterBtn = document.querySelector(".newsletter button");

newsletterBtn.addEventListener("click", () => {

  alert("Obrigado por se cadastrar na Morpheus Company!");

});
