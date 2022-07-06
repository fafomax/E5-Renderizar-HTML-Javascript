import { errorResult, cleanHTML } from "./app.js";

export function errorMessage(error) {
  cleanHTML();
  const errorMessage = document.createElement("p");
  errorMessage.textContent = error;
  errorMessage.classList.add("error");

  errorResult.appendChild(errorMessage);
  cleanHTML();

  setTimeout(() => {
    errorMessage.remove();
  }, 2000);
}
