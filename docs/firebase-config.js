// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgrnEVLdNPqy3xoDDYcOLxz3kxCPapw-Q",
  authDomain: "axusprotocpl.firebaseapp.com",
  projectId: "axusprotocpl",
  storageBucket: "axusprotocpl.firebasestorage.app",
  messagingSenderId: "190508692532",
  appId: "1:190508692532:web:3f9b499953fa95651c0661",
  measurementId: "G-8BEN4F2K90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
