// Este es el punto de entrada de tu aplicacion

import { myFunction, headerLogo, footerCredits } from './lib/index.js';
import { register } from './register.js';
import { registerGoogle, loginEmailPassword } from './lib/firebase.js'
import { newContent } from './newContent.js'

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
    formLogin.classList.add('formLogin');

    const userLogin = document.createElement('input');
    userLogin.setAttribute('type', 'email');
    userLogin.setAttribute('id', 'emailLogin');
    userLogin.setAttribute('placeholder', 'Ingresa tu correo electrónico');
    userLogin.setAttribute('size', '25');
    userLogin.setAttribute('maxlength', '40');
    userLogin.setAttribute('required','');

    const passwordLogin = document.createElement('input');
    passwordLogin.setAttribute('type', 'password');
    passwordLogin.setAttribute('id', 'passwordLogin');
    passwordLogin.setAttribute('placeholder', 'Ingresa tu contraseña');
    passwordLogin.setAttribute('minlength', '6');
    passwordLogin.setAttribute('maxlength', '12');
    passwordLogin.setAttribute('required','');

    const btnLogIn = document.createElement('button');
    btnLogIn.setAttribute('type', 'submit');
    btnLogIn.classList.add('btnLogIn');
    btnLogIn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Iniciar Sesión`;

    const textO = document.createElement('p');
    textO.innerHTML = `ó`;

    const btnGoogle = document.createElement('button');
    btnGoogle.classList.add('btnGoogle');
    btnGoogle.innerHTML = `<i class="fa-brands fa-google"></i> Iniciar sesión con Google`;

    const linkRegister = document.createElement('p');
    linkRegister.innerHTML = `¿No tienes cuenta? <a href="#" id="linkReg">Regístrate</a>`;


    container.appendChild(header);
    container.appendChild(containerLogin);
    containerLogin.appendChild(subTitleLogin);
    containerLogin.appendChild(formLogin);
    formLogin.appendChild(userLogin);
    formLogin.appendChild(passwordLogin);
    formLogin.appendChild(btnLogIn);
    formLogin.appendChild(textO);
    formLogin.appendChild(btnGoogle);
    formLogin.appendChild(linkRegister);
    container.appendChild(footer);

    btnLogIn.addEventListener('click', e => {
        e.preventDefault();
        console.log('click en boton inicio de sesión');
        const  valor = loginEmailPassword ();
        if (valor === true){
            containerLogin.remove();
            footer.remove();
            newContent();
        }
       
    });
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        registerGoogle();
        containerLogin.remove();
        footer.remove();
        newContent();
    });
    const btnRegister = document.getElementById('linkReg');
    btnRegister.addEventListener('click', (e) => {
        e.preventDefault();
        register();
        containerLogin.remove();
        footer.remove();
    });
});