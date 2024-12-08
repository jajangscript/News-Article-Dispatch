// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "morning-dispatch-ebbf5.firebaseapp.com",
  projectId: "morning-dispatch-ebbf5",
  storageBucket: "morning-dispatch-ebbf5.firebasestorage.app",
  messagingSenderId: "89167360496",
  appId: "1:89167360496:web:9c6f45f318ea9557836d35",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
