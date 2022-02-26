import { logOut } from './firebase.js'

const container = document.getElementById('root');

export function newContent() {

    const containerMuro = document.createElement('main');
    containerMuro.setAttribute('id', 'mainMuro');

    const btnLogOut = document.createElement('button');
    btnLogOut.setAttribute('id', 'btnLogOut');
    btnLogOut.classList.add('hidden');
    btnLogOut.innerHTML = `Cerrar sesión`;

    container.appendChild(containerMuro);
    containerMuro.appendChild(btnLogOut);

    btnLogOut.addEventListener('click', (e) => {
        e.preventDefault();
        logOut();
        containerMuro.remove();
    });
}    