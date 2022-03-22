export const initial = () => {

  const mainCharge = document.createElement("main");
  mainCharge.classList.add("mainLogo");
  const imgLogo = document.createElement("img");
  imgLogo.classList.add("imgLogo");
  imgLogo.setAttribute("src", "./img/logo.png");
  imgLogo.setAttribute("alt", "Logo Red Social Inicio");

  const aLogin = document.createElement('a');
  aLogin.classList.add('aLogin');
  aLogin.setAttribute('href', '#/login');

  mainCharge.appendChild(aLogin);
  aLogin.appendChild(imgLogo);

  return mainCharge;
}