// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAondC42dx5ODV1F5egbe0YkqG019jTJ9I",
    authDomain: "pc-hunk.firebaseapp.com",
    projectId: "pc-hunk",
    storageBucket: "pc-hunk.appspot.com",
    messagingSenderId: "153383569998",
    appId: "1:153383569998:web:d5178bfabf79a0a4f7d11f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;