// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuCoIVNpA7CnPgMwsZqKqo4-PvOzY_Lok",
  authDomain: "color-palet-react.firebaseapp.com",
  projectId: "color-palet-react",
  storageBucket: "color-palet-react.appspot.com",
  messagingSenderId: "801964930573",
  appId: "1:801964930573:web:a3bc1aeb2d214a941c0744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()