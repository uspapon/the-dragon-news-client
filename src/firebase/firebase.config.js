// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrncx4Fb7g6v0XPGfB5K61xCbVcSFZ1Ng",
  authDomain: "the-news-dragon-808a1.firebaseapp.com",
  projectId: "the-news-dragon-808a1",
  storageBucket: "the-news-dragon-808a1.appspot.com",
  messagingSenderId: "261228419809",
  appId: "1:261228419809:web:e53e10ba107702a250b5a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;