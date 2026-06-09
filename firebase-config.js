// ============================================================
//  firebase-config.js
//  Firebase v10 Modular SDK 초기화 및 공통 유틸리티
//
//  ⚠️  아래 firebaseConfig 객체의 값을
//      Firebase 콘솔 → 프로젝트 설정 → 내 앱 에서
//      복사한 실제 값으로 교체하세요.
//
//  ⚠️  ADMIN_UIDS 배열에 관리자로 지정할
//      Firebase Auth UID를 추가하세요.
//      (콘솔 → Authentication → Users 탭에서 확인 가능)
// ============================================================

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

// ── 1. Firebase 프로젝트 설정 ───────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyBvNdhi7NnqLK7gz8HZj4ug9cIZvOBTkmE",
  authDomain: "cleanhub-issue-management.firebaseapp.com",
  projectId: "cleanhub-issue-management",
  storageBucket: "cleanhub-issue-management.firebasestorage.app",
  messagingSenderId: "891319011084",
  appId: "1:891319011084:web:ded57e73447d6f6aa12b29",
};

// ── 2. 관리자 이메일 목록 ──────────────────────────────────
export const ADMIN_EMAILS = [
  "yw.jang@bbodek.com",
  "taegoon@bbodek.com",
];

// ── 3. SDK 초기화 ──────────────────────────────────────────
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// ── 4. 헬퍼 함수 재-내보내기 ───────────────────────────────
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

// ── 5. 관리자 여부 확인 (이메일 기준) ─────────────────────
export function isAdmin(email) {
  return ADMIN_EMAILS.includes(email);
}
