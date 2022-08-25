import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1YgaifO24xUDU550BzOVFL8LT3DLIusU",
  authDomain: "reactcoder-dfd48.firebaseapp.com",
  projectId: "reactcoder-dfd48",
  storageBucket: "reactcoder-dfd48.appspot.com",
  messagingSenderId: "894218880985",
  appId: "1:894218880985:web:6993b4fc9ebc7dfe287bc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//seleccionar la DB de firestore
export const DB = getFirestore(app);


