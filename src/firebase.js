// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp, query, getDocs, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBF7TiAjMnFPvfmNTh9pRXgWMCAMqIZYRQ",
  // authDomain: "mobtodo-ed7d5.firebaseapp.com",
  // projectId: "mobtodo-ed7d5",
  // storageBucket: "mobtodo-ed7d5.appspot.com",
  // messagingSenderId: "980344442321",
  // appId: "1:980344442321:web:4e34cf29c7bf1d44fb24f0"

  apiKey: "AIzaSyDH-_jr0kraqkxxY2dqE-dXZKIM6eCpFhM",
  authDomain: "todomobz.firebaseapp.com",
  projectId: "todomobz",
  storageBucket: "todomobz.appspot.com",
  messagingSenderId: "60200159758",
  appId: "1:60200159758:web:a3037f4e43cd466c600a5f",
  measurementId: "G-DT80CTN0DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  collection,
  addDoc,
  serverTimestamp,
  query,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove
};
