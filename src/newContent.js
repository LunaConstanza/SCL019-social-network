import { logOut, registerUser } from './lib/firebase.js'
import { login } from './login.js';

const container = document.getElementById('root');

// const footer = footerCredits();


export function newContent() {

    console.log('entraste al muro');
    history.pushState(null, 'Dashboard', '/dashboard');

    const containerDashboard = document.createElement('main');
    containerDashboard.setAttribute('id', 'mainMuro');

    const btnLogOut = document.createElement('button');
    btnLogOut.setAttribute('id', 'btnLogOut');
    btnLogOut.classList.add('hidden');
    btnLogOut.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión`;
    
    const dashboardForm = document.createElement('form');
    dashboardForm.classList.add('formRegister');
    
    const userName = document.createElement('h2');
    //  userName.innerHTML = `${currentUser.displayname}`;

    const writteText = document.createElement('input');
    writteText.setAttribute('id', 'postText');
    writteText.setAttribute('type', 'text');
    

    container.appendChild(containerDashboard);
    containerDashboard.appendChild(btnLogOut);
    containerDashboard.appendChild(dashboardForm);
    containerDashboard.appendChild(userName);
    containerDashboard.appendChild(writteText);


    btnLogOut.addEventListener('click', () => {
        logOut();
        containerDashboard.remove();
        login();
        
    });
}