// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe07CwdOSCaOFSqcIT8uVm0EM0Ae5e4Fk",
  authDomain: "hw-topics-first-fb-project.firebaseapp.com",
  projectId: "hw-topics-first-fb-project",
  storageBucket: "hw-topics-first-fb-project.appspot.com",
  messagingSenderId: "513872626724",
  appId: "1:513872626724:web:e564fecb0e4ae3318d44b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);