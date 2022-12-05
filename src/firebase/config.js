// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxQqAFfoFU733iMFOTBTm8lpoc0kIYiPo",
  authDomain: "reactjs-dbd18.firebaseapp.com",
  projectId: "reactjs-dbd18",
  storageBucket: "reactjs-dbd18.appspot.com",
  messagingSenderId: "852748785129",
  appId: "1:852748785129:web:7676836e099d5a1cb3e778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);