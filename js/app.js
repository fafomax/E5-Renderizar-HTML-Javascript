import { pizzas } from "./dataBase.js";
import { errorMessage } from "./error.js";

const btnInput = document.querySelector(".btnInput");
export const result = document.querySelector(".container");
const nameInput = document.querySelector(".nameInput");
export const spinnerDiv = document.querySelector(".spinner");
export const errorResult = document.querySelector(".error");

window.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
  showPizzas();
  btnInput.addEventListener("click", searchPizza);
});

const showPizzas = () => {
  let pizzasFromLocal = JSON.parse(localStorage.getItem("pizzas"));

  pizzas.forEach((pizza) => {
    const { id, img, ingredientes, nombre, precio } = pizza;
    console.log(pizza);
    const pizzaDiv = document.createElement("form");
    pizzaDiv.classList.add("result-container");

    pizzaDiv.innerHTML = `
                            <h2>${nombre}</h2>
                            <p>Ingredientes: ${ingredientes}</p>
                            <p>Precio: $${precio}</p>
                            <img src='${img}'>
                            `;
    result.appendChild(pizzaDiv);
  });
};

const searchPizza = () => {
  const pizzaName = pizzas.find(
    (pizza) => pizza.nombre.toUpperCase() === nameInput.value.toUpperCase()
  );

  if (nameInput.value == "") {
    cleanError();
    errorMessage("Debe ingresar el nombre de la pizza");
    return;
  } else if (pizzaName == undefined) {
    cleanError();
    errorMessage("No se encontro la pizza. Intenta con otra");
    return;
  }
  showSelected(pizzaName);
};

const showSelected = (pizzaName) => {
  cleanHTML();
  const { img, ingredientes, nombre, precio } = pizzaName;
  const pizzaDiv = document.createElement("div");
  pizzaDiv.classList.add("result-container");

  spinnerDiv.classList.remove("hidden");

  setTimeout(() => {
    cleanHTML();
    spinnerDiv.classList.add("hidden");
    pizzaDiv.classList.add("result-container");
    pizzaDiv.innerHTML = `
                    <h2>${nombre}</h2>
                    <p>Ingredientes: ${ingredientes}</p>
                    <p>Precio: $${precio}</p>
                    <img src='${img}'>
                    `;
    result.appendChild(pizzaDiv);
  }, 2500);
};

export const cleanHTML = () => {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
};

export const cleanError = () => {
  while (errorResult.firstChild) {
    errorResult.removeChild(errorResult.firstChild);
  }
};
