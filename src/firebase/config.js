import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIUw1iH8Ip8H3cAZirjRlZX7qgqhi9-qY",
  authDomain: "abouttravel-545d4.firebaseapp.com",
  projectId: "abouttravel-545d4",
  storageBucket: "abouttravel-545d4.appspot.com",
  messagingSenderId: "969435216158",
  appId: "1:969435216158:web:bcbf2717ee21b037a7b10f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
