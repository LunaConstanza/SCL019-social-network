import { 
    logOut, 
    savePost, 
    postOnTheWall, 
    verification } from '../lib/firebase.js';

export const newContent = (getUserData) => {

    const containerDashboard = document.createElement('main');
    containerDashboard.setAttribute('id', 'mainDash');
    containerDashboard.classList.add('mainDash');

    // /*PERFIL*/
    const profile = document.createElement('div');
    profile.classList.add('mainDash_profile');
    const dataUser = document.createElement('h4');
    dataUser.setAttribute('id', 'dataUser');
    dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${getUserData.displayName}`;

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
    inputCreatePost.setAttribute('maxLength', '200');
    inputCreatePost.setAttribute('required', '');
    inputCreatePost.setAttribute('id', 'text-description');

    const submitPost = document.createElement('button');
    submitPost.setAttribute('type', 'submit');
    submitPost.classList.add('mainDash_board_createPost_submit');
    submitPost.innerHTML = `Publicar`;

    //         /*Publicaciones*/
    const publications = document.createElement('div');
    publications.classList.add('mainDash_board_publications');
    const topBar = document.createElement('div');
    topBar.classList.add('mainDash_board_publications_topbar');
    const titlePublications = document.createElement('h5');
    titlePublications.classList.add('mainDash_board_publications_topbar_title')
    titlePublications.innerHTML = `<i class="fa-solid fa-bomb"></i> Publicaciones`;
    const btnRefresh = document.createElement('button');
    btnRefresh.classList.add('mainDash_board_publications_topbar_refresh');
    btnRefresh.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i>`
    const scrollContent = document.createElement('div');
    scrollContent.classList.add('mainDash_board_publications_scroll');
    scrollContent.setAttribute('id', 'container_posts');

    // /*APPENDCHILD*/
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
    publications.appendChild(topBar);
    topBar.appendChild(titlePublications);
    topBar.appendChild(btnRefresh);
    publications.appendChild(scrollContent);

    const wallPost = postOnTheWall();

    formCreatePost.addEventListener('submit', (e) => {
        e.preventDefault();
        verification();
        const post = inputCreatePost.value;
        savePost(post);
        formCreatePost.reset();
        postOnTheWall();
    });

    btnRefresh.addEventListener('click', () => {
        postOnTheWall();
    });

    btnLogOut.addEventListener('click', () => {
        logOut();
    });

  
    return containerDashboard;
}