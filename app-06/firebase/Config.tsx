// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8gVLAGQ1ELapHPZmedAmIRs1-sCiL9_Q",
    authDomain: "app-06-16e6f.firebaseapp.com",
    databaseURL: "https://app-06-16e6f-default-rtdb.firebaseio.com",
    projectId: "app-06-16e6f",
    storageBucket: "app-06-16e6f.firebasestorage.app",
    messagingSenderId: "730519078822",
    appId: "1:730519078822:web:25ee477a27037404b2f167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase( app );