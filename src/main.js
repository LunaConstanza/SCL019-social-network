// Este es el punto de entrada de tu aplicacion

import { myFunction, headerLogo } from './lib/index.js';

myFunction();
// console.log(headerLogo());

const root = document.getElementById('root');

const spaceLogo = headerLogo();

const containerRegister = document.createElement('main');
const subTitle = document.createElement('h2');
subTitle.innerHTML=`Registro de usuario`;
const formRegister = document.createElement('form');

const inputNameAndLastName = document.createElement('input');
inputNameAndLastName.setAttribute('type','text');
inputNameAndLastName.setAttribute('placeholder','Nombre y Apellido');

const inputUser = document.createElement('input');
inputUser.setAttribute('type','text');
inputUser.setAttribute('placeholder','Crear usuario');

const inputPassword = document.createElement('input');
inputPassword.setAttribute('type','password');
inputPassword.setAttribute('placeholder','Crear contraseña');

const inputPassword2 = document.createElement('input');
inputPassword2.setAttribute('type','password');
inputPassword2.setAttribute('placeholder','Repetir contraseña');

const inputMail = document.createElement('input');
inputMail.setAttribute('type','email');
inputMail.setAttribute('placeholder','Correo electrónico');

const labelDate = document.createElement('label');
labelDate.setAttribute ('for','date');
labelDate.innerHTML=`Fecha de nacimiento`;

const inputDate = document.createElement('input');
inputDate.setAttribute('type','date');
inputDate.setAttribute('id','date');
inputDate.setAttribute('max','2007-12-31');

const btnSend = document.createElement('input'); 
btnSend.setAttribute('type','submit');
btnSend.setAttribute('value','Registrate');
btnSend.setAttribute('id','buttonRegis');

root.appendChild(spaceLogo);
root.appendChild(containerRegister);
containerRegister.appendChild(subTitle);
containerRegister.appendChild(formRegister);
formRegister.appendChild(inputNameAndLastName);
formRegister.appendChild(inputUser);
formRegister.appendChild(inputPassword);
formRegister.appendChild(inputPassword2);
formRegister.appendChild(inputMail);
formRegister.appendChild(labelDate);
formRegister.appendChild(inputDate);
formRegister.appendChild(btnSend);