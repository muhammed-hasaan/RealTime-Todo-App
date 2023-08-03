// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJuHnlulcgg4NjCRTahWPDMNDEJqagShU",
  authDomain: "budge-d1d68.firebaseapp.com",
  projectId: "budge-d1d68",
  storageBucket: "budge-d1d68.appspot.com",
  messagingSenderId: "189934002965",
  appId: "1:189934002965:web:01a6824235645a916fff1c",
  measurementId: "G-5KMT101X85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
