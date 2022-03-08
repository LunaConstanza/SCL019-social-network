import { logOut, registerUser } from './lib/firebase.js'
import { login } from './login.js';

const container = document.getElementById('root');

// const footer = footerCredits();


export function newContent() {

    console.log('entraste al muro');
    history.pushState(null, 'Dashboard', '/dashboard');

    const containerDashboard = document.createElement('main');
    containerDashboard.setAttribute('id', 'mainDash');
    containerDashboard.classList.add('mainDash');

    /*PERFIL*/
    const profile = document.createElement('div');
    profile.classList.add('mainDash_profile');
    const dataUser = document.createElement('h4');
    dataUser.setAttribute('id', 'dataUser');
    dataUser.innerHTML = `<span class="h4bold">Hola!</span> Juanita Perez`;

    const btnLogOut = document.createElement('button');
    btnLogOut.setAttribute('id', 'btnLogOut');
    btnLogOut.classList.add('btnLogOut');
    btnLogOut.innerHTML = `Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i>`;

    /*PUBLICACIONES Y CREAR POST*/
    const board = document.createElement('div');
    board.classList.add('mainDash_board');

            /*Crear Post*/
    const createPost = document.createElement('div');
    createPost.classList.add('mainDash_board_createPost');
    const titleCreatePost = document.createElement('h5');
    titleCreatePost.classList.add('mainDash_board_createPost_title');
    titleCreatePost.innerHTML = `¿Qué vas a jugar hoy ?`
    const formCreatePost = document.createElement('form');
    formCreatePost.classList.add('mainDash_board_createPost_form')
    const inputCreatePost = document.createElement('textarea');
    inputCreatePost.classList.add('mainDash_board_createPost_textarea');
    inputCreatePost.setAttribute('placeholder', 'Escribe aquí...');
    inputCreatePost.setAttribute('maxLength', '1500');
    inputCreatePost.setAttribute('required', '');
    const btnCreatePost = document.createElement('button');
    btnCreatePost.setAttribute('type', 'submit');
    btnCreatePost.classList.add('mainDash_board_createPost_btn');
    btnCreatePost.innerHTML = `Publicar`;

            /*Publicaciones*/
    const publications = document.createElement('div');
    publications.classList.add('mainDash_board_publications');
    const titlePublications = document.createElement('h5');
    titlePublications.classList.add('mainDash_board_publications_title')
    titlePublications.innerHTML = `Publicaciones`;

    const postUser = document.createElement('div');
    postUser.classList.add('mainDash_board_publications_content');
    const nameUser = document.createElement('h6');
    nameUser.classList.add('mainDash_board_publications_content_user')
    nameUser.innerHTML = `Juanita Perez`;
    const textUser = document.createElement('p');
    textUser.classList.add('mainDash_board_publications_content_text')
    textUser.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rerum laboriosam magnam sint odio ratione velit harum nostrum! Accusantium optio consequuntur, ducimus quia perspiciatis aperiam eveniet inventore aut aliquid, quo maxime in laboriosam repellendus, quibusdam numquam neque ipsa dolor minus animi quae magnam sapiente natus error quos. Laboriosam, perferendis perspiciatis!`;
    const starlike = document.createElement('button');
    starlike.classList.add('mainDash_board_publications_content_starR');
    starlike.innerHTML = `<i class="fa-regular fa-star"></i>`;
    const likePost = document.createElement('p');
    likePost.classList.add('mainDash_board_publications_content_likes')
    likePost.setAttribute('id', 'likePost');
    likePost.innerHTML = ` 0 likes`;

        let a = 0;
        starlike.addEventListener ('click', () => {
        starlike.innerHTML = `<i class="fa-solid fa-star starS"></i>`;
        a = a + 1;
        likePost.textContent = a + ' likes';
        });



    /*APPENDCHILD*/
    container.appendChild(containerDashboard);
    containerDashboard.appendChild(profile);
    profile.appendChild(dataUser);
    profile.appendChild(btnLogOut);
    containerDashboard.appendChild(board);
    board.appendChild(createPost);
    createPost.appendChild(titleCreatePost);
    createPost.appendChild(formCreatePost);
    formCreatePost.appendChild(inputCreatePost);
    formCreatePost.appendChild(btnCreatePost);
    board.appendChild(publications);
    publications.appendChild(titlePublications);
    publications.appendChild(postUser);
    postUser.appendChild(nameUser);
    postUser.appendChild(textUser);
    postUser.appendChild(starlike);
    postUser.appendChild(likePost);

    btnLogOut.addEventListener('click', () => {
        logOut();
        containerDashboard.remove();
        login();
        
    });
}