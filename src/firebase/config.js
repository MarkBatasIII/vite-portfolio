// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJGoJHtqRPNUqWTdW3nQ3dkVQyGU2pOVM",
    authDomain: "my-portfolio-2a408.firebaseapp.com",
    projectId: "my-portfolio-2a408",
    storageBucket: "my-portfolio-2a408.firebasestorage.app",
    messagingSenderId: "196582275023",
    appId: "1:196582275023:web:05fb35d278567df50904ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);