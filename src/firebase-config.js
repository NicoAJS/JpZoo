// Kræver installation "npm install firebase"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD48yuRwlztBGWBzRdxmiPRKt9IdRkwRAg",
  authDomain: "zoo-app-478e8.firebaseapp.com",
  projectId: "zoo-app-478e8",
  storageBucket: "zoo-app-478e8.appspot.com",
  messagingSenderId: "830058679841",
  appId: "1:830058679841:web:a07f0628cc8149a0fd1d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
