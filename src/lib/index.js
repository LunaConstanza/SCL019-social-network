// aqui exportaras las funciones que necesites
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const headerLogo = () => {
  const header = document.createElement('header');
  const logo = document.createElement('img');
  logo.classList.add('logoRS');
  logo.setAttribute('width', '50px');
  logo.setAttribute('src', './img/icono.png');
  logo.setAttribute('alt', 'Lodo red social');

  header.appendChild(logo);

  return header;
};