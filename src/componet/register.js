import { registerUser } from "../lib/firebase.js";
// import { newContent } from "../componet/newContent.js";

// window.addEventListener("hashchange", register);

export function register() {
  console.log("ola k ase");
  // history.pushState(null, "Registro", "#/register");
  // window.scroll(0, 0);
  //  const container = document.getElementById("root");
  // document.querySelector("main").remove();

  const containerRegister = document.createElement("main");
  containerRegister.setAttribute("id", "mainRegister");
  containerRegister.classList.add("mainRegister");
  const subTitle = document.createElement("h2");
  subTitle.innerHTML = `Registro de Usuario`;
  const formRegister = document.createElement("form");
  formRegister.classList.add("formRegister");

  const inputNameAndLastName = document.createElement("input");
  inputNameAndLastName.setAttribute("id", "nameLastname");
  inputNameAndLastName.setAttribute("type", "text");
  inputNameAndLastName.setAttribute("placeholder", "Nombre y Apellido");
  inputNameAndLastName.setAttribute("pattern", "[A-Za-zÀ-ÿ ]{1,25}");
  inputNameAndLastName.setAttribute(
    "title",
    "- Solo se pueden ingresar letras. Máx. 25 carácteres."
  );
  inputNameAndLastName.setAttribute("required", "");

  const inputMail = document.createElement("input");
  inputMail.setAttribute("id", "email");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("placeholder", "Correo electrónico");
  inputMail.setAttribute("required", "");

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("id", "password");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("placeholder", "Crear contraseña");
  inputPassword.setAttribute("minlength", "6");
  inputPassword.setAttribute("maxlength", "14");
  inputPassword.setAttribute("required", "");

  const labelDate = document.createElement("label");
  labelDate.setAttribute("for", "date");
  labelDate.innerHTML = `Fecha de Nacim.`;

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("id", "date");
  inputDate.classList.add("inputDate");
  inputDate.setAttribute("max", "2007-12-31");
  inputDate.setAttribute("required", "");

  const btnSend = document.createElement("input");
  btnSend.setAttribute("type", "submit");
   btnSend.setAttribute("value", "Regístrate");
  btnSend.classList.add("submitRegister");
  

  const btnBack = document.createElement('button');
  btnBack.setAttribute('type', 'btn');
  btnBack.classList.add('btnBack');
  btnBack.innerHTML = `<a href="#/login"class="fa-solid fa-arrow-left"> VOLVER</a>` ;

  containerRegister.appendChild(subTitle);
  containerRegister.appendChild(formRegister);
  formRegister.appendChild(inputNameAndLastName);
  formRegister.appendChild(inputMail);
  formRegister.appendChild(inputPassword);
  formRegister.appendChild(labelDate);
  formRegister.appendChild(inputDate);
  formRegister.appendChild(btnSend);
  formRegister.appendChild(btnBack);

  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameLastname = document.getElementById("nameLastname").value;
    const dateOfBirth = document.getElementById("date").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(nameLastname);
    console.log(dateOfBirth);
    console.log(email);
    console.log(password);

    registerUser(email, password, nameLastname, dateOfBirth);
    });
        return containerRegister;
};