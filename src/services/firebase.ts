import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"

import type { User } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0b5w16KqK2F-VV-gTj1PnksiH0kRbArA",
  authDomain: "healthcare-saas-a3463.firebaseapp.com",
  projectId: "healthcare-saas-a3463",
  storageBucket: "healthcare-saas-a3463.firebasestorage.app",
  messagingSenderId: "998907837207",
  appId: "1:998907837207:web:83f57d10d662deccf6d552",
  measurementId: "G-HZ4WG7RPWW"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)


// 🔐 LOGIN
export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}


// 🧑‍⚕️ REGISTER (Bonus)
export const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}


// 🚪 LOGOUT
export const logoutUser = () => {
  return signOut(auth)
}


// 🔁 SESSION LISTENER
export const authListener = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback)
}