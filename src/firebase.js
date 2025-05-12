// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbMsnzZuG2uMfwjSkNb5xh58r92cUAvGo",
  authDomain: "react-2022-a169e.firebaseapp.com",
  projectId: "react-2022-a169e",
  storageBucket: "react-2022-a169e.firebasestorage.app",
  messagingSenderId: "126000525617",
  appId: "1:126000525617:web:ed63c33b71d46307ef4010",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
