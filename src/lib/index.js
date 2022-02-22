// aqui exportaras las funciones que necesites
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const headerLogo = () => {
  const header = document.createElement('header');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logoRS');
  logo.setAttribute('src', 'icono.png');
  logo.setAttribute('alt', 'Lodo red social');
  header.appendChild(logo);


  return header;
}; 
