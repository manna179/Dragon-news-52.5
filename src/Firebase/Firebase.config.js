// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBns7GHMz7m17Lq2Qs_DYv1fIafMwwIqkk",
  authDomain: "dragon-news-cda90.firebaseapp.com",
  projectId: "dragon-news-cda90",
  storageBucket: "dragon-news-cda90.firebasestorage.app",
  messagingSenderId: "585232802242",
  appId: "1:585232802242:web:d6fd9720e042366425b65b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;