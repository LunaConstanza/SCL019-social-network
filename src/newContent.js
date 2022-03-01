import { logOut } from './lib/firebase.js'

const container = document.getElementById('root');

export function newContent() {

    console.log('entraste al muro');
    history.pushState(null, 'Dashboard', '/dashboard');

    const containerDashboard = document.createElement('main');
    containerDashboard.setAttribute('id', 'mainMuro');

    const btnLogOut = document.createElement('button');
    btnLogOut.setAttribute('id', 'btnLogOut');
    btnLogOut.classList.add('hidden');
    btnLogOut.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión`;

    container.appendChild(containerDashboard);
    containerDashboard.appendChild(btnLogOut);

    btnLogOut.addEventListener('click', () => {
        logOut();
        containerDashboard.remove();
        
    });
}