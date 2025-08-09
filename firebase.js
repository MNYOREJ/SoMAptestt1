// firebase.js

// Import Firebase SDK modules from Google's CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// Your Firebase configuration object
// These values come from Firebase Console → Project Settings → General → Your apps → Web app
const firebaseConfig = {
  apiKey: "AIzaSyBhONntRE_aRsU0y1YcPZzWud3CBfwH_a8",
  authDomain: "somaptestt.firebaseapp.com",
  projectId: "somaptestt",
  storageBucket: "somaptestt.firebasestorage.app",
  messagingSenderId: "105526245138",
  appId: "1:105526245138:web:b8e7c0cb82a46e861965cb",
  measurementId: "G-4HKX7KN6Q3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Export db so it can be used in other files
export { db, collection, addDoc, getDocs, analytics };
