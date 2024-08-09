// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPdxmS2F_5fFpyR7rJvLmkTNYetQIDm9U",
  authDomain: "peruthinventorypantry.firebaseapp.com",
  projectId: "peruthinventorypantry",
  storageBucket: "peruthinventorypantry.appspot.com",
  messagingSenderId: "709742708433",
  appId: "1:709742708433:web:ce4a17878073374f6b27f0",
  measurementId: "G-FBBH3CY8LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
