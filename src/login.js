// Este es el punto de entrada de tu aplicacion

import { myFunction, headerLogo, footerCredits } from './lib/index.js';
import { register } from './register.js';
import { registerGoogle} from './lib/firebase.js'
import { newContent } from './lib/newContent.js'

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

    const userLogin = document.createElement('input');
    userLogin.setAttribute('type', 'text');
    userLogin.setAttribute('placeholder', 'Correo electrónico');

    const passwordLogin = document.createElement('input');
    passwordLogin.setAttribute('type', 'password');
    passwordLogin.setAttribute('placeholder', 'Ingresa tu contraseña');

    const btnLogIn = document.createElement('button');
    btnLogIn.innerHTML = `Iniciar Sesión`;

    const btnGoogle = document.createElement('button');
    btnGoogle.setAttribute('id','btnGoogle');
    btnGoogle.innerHTML = `Ingresa con Google`;

    const btnRegister = document.createElement('button');
    btnRegister.innerHTML = `Regístrate`;

    container.appendChild(header);
    container.appendChild(containerLogin);
    containerLogin.appendChild(subTitleLogin);
    containerLogin.appendChild(formLogin);
    formLogin.appendChild(userLogin);
    formLogin.appendChild(passwordLogin);
    formLogin.appendChild(btnLogIn);
    formLogin.appendChild(btnGoogle);
    formLogin.appendChild(btnRegister);
   
    container.appendChild(footer);
    
    btnRegister.addEventListener('click', () => {
        register();
        containerLogin.remove();
        footer.remove();
    });

    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        registerGoogle();
        containerLogin.remove();
        newContent();
    });
});