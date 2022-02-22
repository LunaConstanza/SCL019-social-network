// Este es el punto de entrada de tu aplicacion

import { myFunction, headerLogo } from './lib/index.js';
import { register } from './register.js';

myFunction();

const spaceLogo = headerLogo();
const container = document.getElementById('root');

const mainCharge = document.createElement('main');
mainCharge.setAttribute('class', 'mainLogo');

const imgLogo = document.createElement('img');
mainCharge.setAttribute('class','imgLogo');
imgLogo.setAttribute('src', './img/en-construccion.png');
imgLogo.setAttribute('alt', 'Logo Red Social Inicio');
container.appendChild(mainCharge);
mainCharge.appendChild(imgLogo);

imgLogo.addEventListener('click', () => {
    console.log('hice click');
    mainCharge.remove();
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

    container.appendChild(spaceLogo);
    container.appendChild(containerLogin);
    containerLogin.appendChild(subTitleLogin);
    containerLogin.appendChild(formLogin);
    formLogin.appendChild(UserLogin);
    formLogin.appendChild(btnRegister);
    
    btnRegister.addEventListener('click', () => {
        register();
        containerLogin.remove();
    });
});