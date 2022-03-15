import { logOut, savePost, postOnTheWall } from './lib/firebase.js';
import { login } from './login.js';

const container = document.getElementById('root');

export const newContent = () => {

    console.log('entraste al muro');
    history.pushState(null, 'Dashboard', '/dashboard');
    document.querySelector('main').remove();

    const containerDashboard = document.createElement('main');
    containerDashboard.setAttribute('id', 'mainDash');
    containerDashboard.classList.add('mainDash');

    // /*PERFIL*/
    const profile = document.createElement('div');
    profile.classList.add('mainDash_profile');
    const dataUser = document.createElement('h4');
    dataUser.setAttribute('id', 'dataUser');

    const btnLogOut = document.createElement('button');
    btnLogOut.setAttribute('id', 'btnLogOut');
    btnLogOut.classList.add('btnLogOut');
    btnLogOut.innerHTML = `Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i>`;



    // /*PUBLICACIONES Y CREAR POST*/
    const board = document.createElement('div');
    board.classList.add('mainDash_board');

    //         /*Crear Post*/
    const createPost = document.createElement('div');
    createPost.classList.add('mainDash_board_createPost');
    const titleCreatePost = document.createElement('h5');
    titleCreatePost.classList.add('mainDash_board_createPost_title');
    titleCreatePost.innerHTML = `¿Qué vas a jugar hoy ?`;

    const formCreatePost = document.createElement('form');
    formCreatePost.classList.add('mainDash_board_createPost_form');
    formCreatePost.setAttribute('id', 'text-form');

    const inputCreatePost = document.createElement('textarea');
    inputCreatePost.classList.add('mainDash_board_createPost_textarea');
    inputCreatePost.setAttribute('placeholder', 'Escribe aquí...');
    inputCreatePost.setAttribute('maxLength', '1500');
    inputCreatePost.setAttribute('required', '');
    inputCreatePost.setAttribute('id', 'text-description');

    const submitPost = document.createElement('button');
    submitPost.setAttribute('type', 'submit');
    submitPost.classList.add('mainDash_board_createPost_submit');
    submitPost.innerHTML = `Publicar`;


    //         /*Publicaciones*/
    const publications = document.createElement('div');
    publications.classList.add('mainDash_board_publications');
    const titlePublications = document.createElement('h5');
    titlePublications.classList.add('mainDash_board_publications_title')
    titlePublications.innerHTML = `<i class="fa-solid fa-bomb"></i> Publicaciones`;
    const scrollContent = document.createElement('div');
    scrollContent.classList.add('mainDash_board_publications_scroll');
    scrollContent.setAttribute('id', 'conteiner_posts');
    
    // const starlike = document.createElement('button');
    // starlike.classList.add('mainDash_board_publications_content_starR');
    // starlike.innerHTML = `<i class="fa-regular fa-star"></i>`;
    // const likePost = document.createElement('p');
    // likePost.classList.add('mainDash_board_publications_content_likes')
    // likePost.setAttribute('id', 'likePost');
    // likePost.innerHTML = ` 0 likes`;

    //     let a = 0;
    //     starlike.addEventListener ('click', () => {
    //     starlike.innerHTML = `<i class="fa-solid fa-star starS"></i>`;
    //     a = a + 1;
    //     likePost.textContent = a + ' likes';
    //     });

    const btnCreatePost = document.createElement('button');
    btnCreatePost.classList.add('mainDash_board_createPost_btn');
    btnCreatePost.innerHTML = `+`;

    // /*APPENDCHILD*/
    container.appendChild(containerDashboard);
    containerDashboard.appendChild(profile);
    profile.appendChild(dataUser);
    profile.appendChild(btnLogOut);
    containerDashboard.appendChild(board);
    board.appendChild(createPost);
    createPost.appendChild(titleCreatePost);
    createPost.appendChild(formCreatePost);
    formCreatePost.appendChild(inputCreatePost);
    formCreatePost.appendChild(submitPost);
    board.appendChild(publications);
    publications.appendChild(titlePublications);
    publications.appendChild(scrollContent);
    // postUser.appendChild(starlike);
    // postUser.appendChild(likePost);
    containerDashboard.appendChild(btnCreatePost);


    const wallPost = postOnTheWall();

    // console.log(wallPost);

    formCreatePost.addEventListener('submit', (e) => {
        e.preventDefault();
        const post =inputCreatePost.value;
        savePost(post);
        formCreatePost.reset();
        postOnTheWall();
    });

    btnLogOut.addEventListener('click', () => {
        logOut();
        login();
    });
}