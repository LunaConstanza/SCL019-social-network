import { myFunction, headerLogo, footerCredits } from './lib/index.js';
import { register } from './register.js';
import { registerGoogle, loginEmailPassword, resetPass} from './lib/firebase.js'
import { newContent } from './newContent.js'

myFunction();

const header = headerLogo();
const footer = footerCredits();
const container = document.getElementById('root');

export function login() {
    console.log('hice click');
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
    btnLogIn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Iniciar Sesión`;

    const textReset = document.createElement('p');
    textReset.classList.add('resetPass');
    textReset.innerHTML = `¿Olvidaste tu contraseña?`;


    /*************POP UP***********/
    
    let divOverlay = document.createElement('div');
    divOverlay.classList.add('overlay');
    divOverlay.setAttribute('id', 'overlay');
    let divPopup = document.createElement('div');
    divPopup.classList.add('popup');
    divPopup.setAttribute('id', 'popup');
    const btnClose = document.createElement('i');
    btnClose.classList.add('fa-solid');
    btnClose.classList.add('fa-xmark');
    const h3Popup = document.createElement('h3');
    h3Popup.innerHTML = `No hay problema ¡nosotras te ayudamos!`;
    const textPopup = document.createElement('p');
    textPopup.innerHTML = `Enviaremos a tu email un correo para que recuperes tu contraseña rápidamente.`
    const formResetPass = document.createElement('form');
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('id', 'userEmail')
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('placeholder', 'Ingresa aquí tu correo electrónico');
    inputEmail.setAttribute('size', '30');
    inputEmail.setAttribute('maxlength', '40');
    inputEmail.setAttribute('required','');
    const resetPassword = document.createElement('button');
    resetPassword.innerHTML = `<i class="fa-solid fa-key"></i> Recuperar Contraseña`;


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
    formLogin.appendChild(textReset);
    formLogin.appendChild(divOverlay);
    divOverlay.appendChild(divPopup);
    divPopup.appendChild(btnClose);
    divPopup.appendChild(h3Popup);
    divPopup.appendChild(textPopup);
    divPopup.appendChild(formResetPass);
    formResetPass.appendChild(inputEmail);
    formResetPass.appendChild(resetPassword);
    formLogin.appendChild(btnGoogle);
    formLogin.appendChild(linkRegister);
    container.appendChild(footer);

    formLogin.addEventListener('submit', e => {
        e.preventDefault();
        console.log('click en boton inicio de sesión');
        const  valor = loginEmailPassword ();
        if (valor === true){
            newContent();
            containerLogin.remove();
            footer.remove();
        }
       
    });
     



    /*Abrir y cerrar popup*/
    textReset.addEventListener('click', (e) =>{
        e.preventDefault();
        divOverlay.classList.add("active");
        divPopup.classList.add("active");
    });
    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        divOverlay.classList.remove("active");
        divPopup.classList.remove("active");
    });
    formResetPass.addEventListener('submit', (e) => {
        e.preventDefault();
        divOverlay.classList.remove("active");
        divPopup.classList.remove("active");
        const saveEmail = document.getElementById('userEmail').value;
        resetPass(saveEmail);
    });
    /*FIN abrir y cerrar popup*/


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
};