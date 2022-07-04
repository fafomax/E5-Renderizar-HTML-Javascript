import { errorResult, result, cleanHTML } from "./app.js";

export function errorMessage(error) {
  cleanHTML();
  const errorMessage = document.createElement("p");
  errorMessage.textContent = error;
  errorMessage.classList.add("error");

  //Insertarlo en el contenido HTML
  errorResult.appendChild(errorMessage);
  cleanHTML();

  // Elimina la alerta despues de 3 segundos
  setTimeout(() => {
    errorMessage.remove();
  }, 2000);
}
