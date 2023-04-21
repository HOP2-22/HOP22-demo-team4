import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDx9oE48aZBhAXdLDYQL3pEqukhTi3OLoY",
  authDomain: "numeric-span-383709.firebaseapp.com",
  projectId: "numeric-span-383709",
  storageBucket: "numeric-span-383709.appspot.com",
  messagingSenderId: "320973854056",
  appId: "1:320973854056:web:7710127f9791889c9b32dd",
  measurementId: "G-751YGQSVLP",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
