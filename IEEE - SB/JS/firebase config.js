// firebase-config.js
// This file connects your website to Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUqi6c979HdojNMtoclUeEyiz4ubRab1U",
  authDomain: "ieee-ce-kgr-website.firebaseapp.com",
  projectId: "ieee-ce-kgr-website",
  storageBucket: "ieee-ce-kgr-website.firebasestorage.app",
  messagingSenderId: "557381248492",
  appId: "1:557381248492:web:5329b65ddb0d2da8be8cc9"
};

// initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// make them available globally
export { auth, db };