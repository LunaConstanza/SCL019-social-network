import { register } from '../componet/register.js';
import { newContent } from '../componet/newContent.js';
import { initial } from '../componet/initial.js';
import { login } from '../componet/login.js';
import { /*myFunction,*/ headerLogo } from "../lib/index.js";
import { getUserData } from './firebase.js';

export const router = (hash) => {
  console.log('Hola router');
  // Llamamos al div del html
  const rootBox = document.getElementById('root');

  switch (hash) {
    case '#/':
      document.getElementById('root').innerHTML = '';
      rootBox.appendChild(initial());
      break;
    case '#/login':
      document.getElementById('root').innerHTML = '';
      rootBox.appendChild(headerLogo());
      rootBox.appendChild(login());
      break;
    case '#/register':
      document.getElementById('root').innerHTML = '';
      rootBox.appendChild(headerLogo());
      rootBox.appendChild(register());
      break;
      case '#/dashboard':
        document.getElementById('root').innerHTML = '';
        rootBox.appendChild(headerLogo());
        rootBox.appendChild(newContent(getUserData()));
        break;
    default:
      root.innerHTML = 'mantenimiento'
  }

};

