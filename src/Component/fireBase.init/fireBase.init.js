// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJHJypveVbaj3DcVOWKTDIoLvhTwRuwpo",
    authDomain: "carseller-641d5.firebaseapp.com",
    projectId: "carseller-641d5",
    storageBucket: "carseller-641d5.appspot.com",
    messagingSenderId: "1091228916666",
    appId: "1:1091228916666:web:d3448c467da96ae83ddb83",
    measurementId: "G-02CVW4EKCS"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
