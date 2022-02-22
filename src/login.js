// Este es el punto de entrada de tu aplicacion

import { myFunction, headerLogo } from './lib/index.js';
import { register } from './register.js';

myFunction();

const spaceLogo = headerLogo();
const logo = document.getElementById('photoLogo');
const container = document.getElementById('container');
const container2 = document.getElementById('container2');

logo.addEventListener('click', () => {
    console.log('hice click');
    container.remove('photoLogo');

    history.pushState(null, 'login', '/login');

    const containerLogin = document.createElement('main');
    const subTitleLogin = document.createElement('h2');
    subTitleLogin.innerHTML = `Inicio de Sesión`;
    const formLogin = document.createElement('form');

    const UserLogin = document.createElement('input');
    UserLogin.setAttribute('type', 'text');
    UserLogin.setAttribute('placeholder', 'Ingresa tu usuario');

    const btnRegister = document.createElement('button');
    btnRegister.innerHTML = `Registrate`;

    container2.appendChild(spaceLogo);
    container2.appendChild(containerLogin);
    containerLogin.appendChild(subTitleLogin);
    containerLogin.appendChild(formLogin);
    formLogin.appendChild(UserLogin);
    formLogin.appendChild(btnRegister);
    
    btnRegister.addEventListener('click', () => {
        register();
    });
});