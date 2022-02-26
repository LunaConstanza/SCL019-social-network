import { footerCredits } from './lib/index.js';
import { registerUser} from './lib/firebase.js';

const container = document.getElementById('root');
const footer = footerCredits();

export function register() {

    console.log('ola k ase');
    history.pushState(null, 'Registro', '/register')


    const containerRegister = document.createElement('main');
    containerRegister.setAttribute('id', 'mainRegister');
    containerRegister.classList.add('mainRegister');

    const subTitle = document.createElement('h2');
    subTitle.innerHTML = `Registro de usuario`;
    const formRegister = document.createElement('form');

    const inputNameAndLastName = document.createElement('input');
    inputNameAndLastName.setAttribute('id', 'nameLastname');
    inputNameAndLastName.setAttribute('type', 'text');
    inputNameAndLastName.setAttribute('placeholder', 'Nombre y Apellido');

    const inputMail = document.createElement('input');
    inputMail.setAttribute('id', 'email');
    inputMail.setAttribute('type', 'email');
    inputMail.setAttribute('placeholder', 'Correo electrónico');

    const inputPassword = document.createElement('input');
    inputPassword.setAttribute('id', 'password');
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('placeholder', 'Crear contraseña');

    const labelDate = document.createElement('label');
    labelDate.setAttribute('for', 'date');
    labelDate.innerHTML = `Fecha de nacimiento`;

    const inputDate = document.createElement('input');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('id', 'date');
    inputDate.setAttribute('max', '2007-12-31');

    const btnSend = document.createElement('input');
    btnSend.setAttribute('type', 'submit');
    btnSend.setAttribute('value', 'Registrate');
    btnSend.setAttribute('id', 'submitRegister');
    btnSend.classList.add('submitRegister');



    container.appendChild(containerRegister);
    containerRegister.appendChild(subTitle);
    containerRegister.appendChild(formRegister);
    formRegister.appendChild(inputNameAndLastName);
    formRegister.appendChild(inputMail);
    formRegister.appendChild(inputPassword);
    formRegister.appendChild(labelDate);
    formRegister.appendChild(inputDate);
    formRegister.appendChild(btnSend);
    container.appendChild(footer);

    formRegister.addEventListener('submit', e => {
        e.preventDefault();
        const nameLastname = document.getElementById('nameLastname').value;
        const dateOfBirth = document.getElementById('date').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        console.log(nameLastname);
        console.log(dateOfBirth);
        console.log(email);
        console.log(password);

        // dataUser(nameLastname,dateOfBirth);
        registerUser(email, password);
        
    });









    // const form = document.getElementById('form');

    // const inputs = document.querySelectorAll('#form input');

    // const expressions = {

    //     nameLastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    //     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    //     password: /^.{6,12}$/ // 6 a 12 digitos.

    // };

    // const fields = {
    //     nameLastname: false,
    //     email: false,
    //     password: false

    // };

    // const validationForm = e => {
    //     // con esta linea tomaremos cada nombre de los inputs para que este sea reconocido


    //     switch (e.target.name) {
    //         /* declaraciones ejecutadas cuando el resultadop de la expresion coincide con el valor asignado en este caso las expresiones (valid) */
    //         case "nameLastname":
    //             inputValidation(expressions.nameLastname, e.target, 'nameLastname');

    //             break;

    //         case "email":
    //             inputValidation(expressions.email, e.target, 'email');

    //             break;

    //         case "password":
    //             inputValidation(expressions.password, e.target, 'password');
    //             break;
    //     };
    // };

    // const inputValidation = (expressions, input, fields) => {
    //     if (expressions.test(input.value)) {
    //         document.getElementById(`grupo__${fields}`).classList.remove('formulario__grupo-incorrecto');
    //         document.getElementById(`grupo__${fields}`).classList.add('formulario__grupo-correcto');
    //         document.querySelector(`#grupo__${fields} i`).classList.add('fa-check-circle');
    //         document.querySelector(`#grupo__${fields} i`).classList.remove('fa-times-circle');
    //         document.querySelector(`#grupo__${fields} .formulario__input-error`).classList.remove('formulario__input-error-activo');

    //     } else {
    //         document.getElementById(`grupo__${fields}`).classList.add('formulario__grupo-incorrecto');
    //         document.getElementById(`grupo__${fields}`).classList.remove('formulario__grupo-correcto');
    //         document.querySelector(`#grupo__${fields} i`).classList.add('fa-times-circle');
    //         document.querySelector(`#grupo__${fields} i`).classList.remove('fa-check-circle');
    //         document.querySelector(`#grupo__${fields} .formulario__input-error`).classList.add('formulario__input-error-activo');

    //     }
    // }

    // // parametro input para identificar
    // inputs.forEach((input) => {
    //     // se hara la funcion cada vez que haya un evento de tecleo dentro de los input
    //     input.addEventListener('keyup', validationForm);
    //     input.addEventListener('blur', validationForm);
    // });
};

