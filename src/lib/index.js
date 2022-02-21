// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const headerLogo = () => {
  const header = document.createElement('header');
    header.innerHTML=`<h1>LOGO</h1>`; 
    //`<img class="" src="" alt="logo proyecto">`;
  return header;
};  