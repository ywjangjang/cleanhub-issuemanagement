import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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
  doc,
  updateDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

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
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
  ref,
  uploadBytes,
  getDownloadURL,
};

export function isAdmin(email) {
  return ADMIN_EMAILS.includes(email);
}
