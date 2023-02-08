// URL Pattern (regex): www\.telepizza\.es/comida-a-domicilio/pizzas

// Type your JavaScript code here.
const observer = new MutationObserver(() => {
  const button = document.querySelector(
    "#category-layout-list > div:nth-child(1) > div.s4d-container-simple-v2 > div:nth-child(1) > div.s4d-product-decription > a"
  );
  button.textContent = "Personalizar";
  button.setAttribute("title", "¡A tu gusto!");
  button.classList.add("effect");

  const pictureCard = document.querySelector(
    "#category-layout-list > div:nth-child(1) > div.s4d-container-simple-v2 > div:nth-child(1) > div.s4d-product-image > picture > img"
  );

  button.addEventListener("mouseover", () => {
    pictureCard.setAttribute("style", "filter: grayscale(0);");
  });

  button.addEventListener("mouseout", () => {
    pictureCard.setAttribute("style", "filter: grayscale(1);");
  });
});

observer.observe(document.body, { childList: true, subtree: true });
