// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6RJm9DhbHQJmMvD7DYh4gXk9_WrrP0A8",
  authDomain: "netflix-d1086.firebaseapp.com",
  projectId: "netflix-d1086",
  storageBucket: "netflix-d1086.appspot.com",
  messagingSenderId: "577169865944",
  appId: "1:577169865944:web:9913e2b749af43d415abad"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }