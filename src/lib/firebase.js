// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase } from "https://DATABASE_NAME.southamerica-east1.firebaseio.com";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import {firebaseConfig} from "./config.js"


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);


const auth = getAuth();
export const registerUser = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
  });
}

const database = getDatabase(app);
export const dataUser = (nameLastname, dateOfbirth) =>{
  // Constante original      const database = getDatabase(app);
   getDatabase (database, nameLastname, dateOfbirth);
}



// import { getDatabase } from "firebase/database";

// // TODO: Replace with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "PROJECT_ID.firebaseapp.com",
//   // The value of `databaseURL` depends on the location of the database
//   databaseURL: "https://DATABASE_NAME.firebaseio.com",
//   projectId: "PROJECT_ID",
//   storageBucket: "PROJECT_ID.appspot.com",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID",
//   // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//   measurementId: "G-MEASUREMENT_ID",
// };

// const app = initializeApp(firebaseConfig);

// Get a reference to the database service
