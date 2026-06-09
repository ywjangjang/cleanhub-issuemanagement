import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvNdhi7NnqLK7gz8HZj4ug9cIZvOBTkmE",
  authDomain: "cleanhub-issue-management.firebaseapp.com",
  projectId: "cleanhub-issue-management",
  storageBucket: "cleanhub-issue-management.firebasestorage.app",
  messagingSenderId: "891319011084",
  appId: "1:891319011084:web:ded57e73447d6f6aa12b29",
};

export const ADMIN_EMAILS = [
  "yw.jang@bbodek.com",
  "taegoon@bbodek.com",
];

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
  serverTimestamp,
};

export function isAdmin(email) {
  return ADMIN_EMAILS.includes(email);
}
