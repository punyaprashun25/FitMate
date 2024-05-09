import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIUt36MHK8lWwdrT84R3f8VKLqssEnlNw",
  authDomain: "fitmate-e539d.firebaseapp.com",
  projectId: "fitmate-e539d",
  storageBucket: "fitmate-e539d.appspot.com",
  messagingSenderId: "75930031444",
  appId: "1:75930031444:web:00b13386fde1fc851e24c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);

export {app, auth, fireStore};