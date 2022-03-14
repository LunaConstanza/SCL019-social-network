// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,

  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
// import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js"
import { firebaseConfig } from "./config.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore();
let currentUser;
const orderCollection = collection(db, "user");

// const analytics = getAnalytics(app);




//-----Login con Google ---------------
export const registerGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const nameUser = user.displayName;
      userDataGoogle();
      console.log("holaaaaa user ", nameUser);
      return nameUser;

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
export const userDataGoogle = async () => {
  const user = auth.currentUser;
  const userName = user.displayName;
  if (user !== null) {
    const docRef = await addDoc(collection(db, "google"), {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
    });
  }
};

// ------ Cerrar sesión ---------
export const logOut = () => {
  signOut(auth).then(() => {
    console.log('Usuario Cerro Sesión');

  }).catch((error) => {
    // An error happened.
  });
}

// ------Permite verificar si hay un usuario conectado 
export const verification = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser = user;
      console.log('usuario Logeado', currentUser.displayName);
      const uid = user.uid;
      return currentUser;
    } else {
      console.log('No hay Usuario logueado');
      // User is signed out
      // ...
    }
  });
}
//-------- Se guarda el Email y el password del usuario ----------
export const registerUser = (email, password, nameLastname, date) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Hola uid", user.uid);
      const userId = user.uid;
      emailVerification(auth);
      return userId;
      // ...
    })
    .then((userId) => addNewDocument(userId, nameLastname, date))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
}

//------Se ingresan los valores Firestore Datebase ----------
async function addNewDocument(userId, nameLastname, date) {
  const newDoc = await addDoc(orderCollection, {
    uid: userId,
    name: nameLastname,
    bithday: date,
    datepost: Timestamp.fromDate(new Date()),

  });
  console.log(`Tu cuenta ha sido creada en ${newDoc.path}`);
};

//---------Enviar correo para Recuperar contraseña-------/
export const resetPass = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      //..
    });
}

//----Enviar correo de validación de Google -----
function emailVerification(auth) {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });
}

//----- Hacer el Login con correo y contraseña 
export const loginEmailPassword = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Hola User!!!!! ', user);
      callback(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/user-not-found') {
        alert('usuario no regristrado');

      } else if (errorCode === 'auth/wrong-password') {
        alert('Contraseña incorrecta');
      }
      callback(false);
    });
}
// -------------Almacenamos el post--------
export const savePost = (description) =>
  addDoc(collection(db, 'Post'), { description });

//---------- Publicamos en el Dashboard
export const postOnTheWall = async () => {
export const savePost = (description) =>
  addDoc(collection(db, 'Post'), { description });

export const postOnTheWall = async () => {
  const publicationContainer = document.getElementById('publication-container');
  const querySnapshot = await getDocs(collection(db, "Post"));
  let html = ''

  querySnapshot.forEach((doc) => {
    const post = doc.data();
    const usuario = doc.data().displayName;
    console.log('Hola usuario', usuario);

    html += `<div>
    <p>${post.description}</p>
    </div>`
    console.log('Holaaa div ', post);
    // // console.log(`${doc.id} => ${doc.data()}`);
  });
  publicationContainer.innerHTML = html
}
