// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0vhtrPl21TrKqb0_Fe32MIHcZMgenzkc",
  authDomain: "fir-auth-2-6b950.firebaseapp.com",
  projectId: "fir-auth-2-6b950",
  storageBucket: "fir-auth-2-6b950.firebasestorage.app",
  messagingSenderId: "1016929313793",
  appId: "1:1016929313793:web:91efc5d5f2d290b06b0c00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
