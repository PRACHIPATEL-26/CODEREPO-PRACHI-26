import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDl0LmpkTZdq79okdO59wo-_GoDhZkvaEQ",
  authDomain: "glamourshine-51fb8.firebaseapp.com",
  projectId: "glamourshine-51fb8",
  storageBucket: "glamourshine-51fb8.firebasestorage.app",
  messagingSenderId: "380226064251",
  appId: "1:380226064251:web:1bb6a45ed239bd6b27f7de",
  measurementId: "G-J3Q2ZD1JTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
