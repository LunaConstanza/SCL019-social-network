// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  orderBy,
  Timestamp,
  
  query,
  
 } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
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
export const registerGoogle = (callback) => {
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
      callback(true);
      const dataUser = document.getElementById('dataUser');
      dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${nameUser}`;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
      // ...
      callback(false);
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
    }
  });
}
//-------- Se guarda el Email y el password del usuario ----------
export const registerUser = (email, password, displayName, date, callback) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Hola uid", user.uid);
      const userId = user.uid;
      emailVerification(auth);
      callback(true);
    })
    .then((userId) => addNewDocument(userId, displayName, date))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      callback(false);
      console.log(errorCode, errorMessage);
    });
}

//------Se ingresan los valores Firestore Datebase ----------
async function addNewDocument(userId, displayName, date) {
  const newDoc = await addDoc(orderCollection, {
    uid: userId,
    displayName: displayName,
    bithday: date,

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
      alert('Se ha enviado un mensaje de verificación a tu correo electrónico, por favor revisalo y verifica tu registro');
    });
}

//----- Hacer el Login con correo y contraseña 
export const loginEmailPassword = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Hola User!!!!! ', user.uid);
      callback(true);
      const dataUser = document.getElementById('dataUser');
      dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${user.email}`;
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
  addDoc(collection(db, 'Post'), { 
    uid: auth.currentUser.uid,
    name: auth.currentUser.displayName,
    description: description,
    likes:[],
    datepost: Timestamp.fromDate(new Date()),
     });


//---------- Publicamos en el Dashboard

export const postOnTheWall = async () => {
  const conteiner_posts = document.getElementById('conteiner_posts');
  const allPost = query(collection(db, "Post"), orderBy('datepost', 'desc'));
  const querySnapshot = await getDocs(allPost);
  let html = ''
  querySnapshot.forEach((doc) => {
    const post = doc.data();
    // const usuario = doc.data();
    // console.log('Hola usuario', usuario);

    html += `<div class="mainDash_board_pu  blications_content">
    <h6 class="mainDash_board_publications_content_user">${post.name} dice:</h6>
    <p class="mainDash_board_publications_content_text">${post.description}</p>
    </div>`
    console.log('Holaaa div ', post);
    // // console.log(`${doc.id} => ${doc.data()}`);
  });
 conteiner_posts.innerHTML = html
};

const likePost = () =>{

  const increment = firebase.firestore.fielValue.increment(1);
  const storyREf = db.collection('stories').doc('Hello world');
  storyREf.update({count : increment});
}