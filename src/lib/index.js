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

export const footerCredits = () => {
  const footer = document.createElement('footer');
  const textFooter = document.createElement('p')
  textFooter.classList.add('textFooter')
  textFooter.innerHTML = `Copyright© 2022 | Created by <a href="https://github.com/DanielaAlcalaDaboin" target="_blank">Daniela Alcalá</a>, <a href="https://github.com/LizBri" target="_blank">Elizabeth Bringas</a> y <a href="https://github.com/LunaConstanza" target="_blank">Luna González</a>`;

  footer.appendChild(textFooter);

  return footer;
};