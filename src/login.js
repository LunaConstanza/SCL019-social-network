// Este es el punto de entrada de tu aplicacion

import { myFunction, headerLogo, footerCredits } from './lib/index.js';
import { register } from './register.js';

myFunction();

const header = headerLogo();
const footer = footerCredits();
const container = document.getElementById('root');

const mainCharge = document.createElement('main');
mainCharge.classList.add('mainLogo');

const imgLogo = document.createElement('img');
imgLogo.classList.add('imgLogo');
imgLogo.setAttribute('src', './img/en-construccion.png');
imgLogo.setAttribute('alt', 'Logo Red Social Inicio');
container.appendChild(mainCharge);
mainCharge.appendChild(imgLogo);

imgLogo.addEventListener('click', () => {
    console.log('hice click');
    mainCharge.remove();
    history.pushState(null, 'login', '/login');

    const containerLogin = document.createElement('main');
    containerLogin.classList.add('mainLogin');
    const subTitleLogin = document.createElement('h2');
    subTitleLogin.innerHTML = `Inicio de Sesión`;
    const formLogin = document.createElement('form');

    const UserLogin = document.createElement('input');
    UserLogin.setAttribute('type', 'text');
    UserLogin.setAttribute('placeholder', 'Ingresa tu usuario');

    const btnRegister = document.createElement('button');
    btnRegister.innerHTML = `Registrate`;

    container.appendChild(header);
    container.appendChild(containerLogin);
    containerLogin.appendChild(subTitleLogin);
    containerLogin.appendChild(formLogin);
    formLogin.appendChild(UserLogin);
    formLogin.appendChild(btnRegister);
    container.appendChild(footer);
    
    btnRegister.addEventListener('click', () => {
        register();
        containerLogin.remove();
        footer.remove();
    });
});