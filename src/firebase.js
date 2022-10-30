// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBngZvArbjVivbUvGcc17FJ1dWqHHvN5DA",
  authDomain: "chat-app-478be.firebaseapp.com",
  projectId: "chat-app-478be",
  storageBucket: "chat-app-478be.appspot.com",
  messagingSenderId: "601963136012",
  appId: "1:601963136012:web:4f329ad4fc6b6633291a29",
  measurementId: "G-2HKYYCMF6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);