import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxj3pm7gmuM1J0KkGugaJJLzJnLrYbyVQ",
  authDomain: "house-market-4402b.firebaseapp.com",
  projectId: "house-market-4402b",
  storageBucket: "house-market-4402b.appspot.com",
  messagingSenderId: "1010628802219",
  appId: "1:1010628802219:web:3c036c0b896c3aecdd29ee",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
