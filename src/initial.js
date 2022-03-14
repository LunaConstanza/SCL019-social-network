import { login } from "./login.js";

const container = document.getElementById("root");

const mainCharge = document.createElement("main");
mainCharge.classList.add("mainLogo");
const imgLogo = document.createElement("img");
imgLogo.classList.add("imgLogo");
imgLogo.setAttribute("src", "./img/logo.png");
imgLogo.setAttribute("alt", "Logo Red Social Inicio");
container.appendChild(mainCharge);
mainCharge.appendChild(imgLogo);

imgLogo.addEventListener("click", () => {
  login();
  mainCharge.remove();
});
