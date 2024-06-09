import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "learnify-9d6fb.firebaseapp.com",
  projectId: "learnify-9d6fb",
  storageBucket: "learnify-9d6fb.appspot.com",
  messagingSenderId: "935820389579",
  appId: "1:935820389579:web:34d12c18e6514de597bf4e",
  measurementId: "G-YGNN64QPQ9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const googleProvider = new GoogleAuthProvider();
const provider = new GoogleAuthProvider();


export { app, provider, db, storage, auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword };
