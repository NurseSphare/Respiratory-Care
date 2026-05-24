// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDisqDxl9qVCB_iJcEadrLYjvMr33YdT5I",
  authDomain: "respiratory-team.firebaseapp.com",
  databaseURL: "https://respiratory-team-default-rtdb.firebaseio.com",
  projectId: "respiratory-team",
  storageBucket: "respiratory-team.firebasestorage.app",
  messagingSenderId: "731300314581",
  appId: "1:731300314581:web:ec58be5de4659bc832d15c",
  measurementId: "G-ZCTK58B2MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);