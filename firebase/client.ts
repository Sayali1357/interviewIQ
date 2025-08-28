
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBfzNaYgAMw4_-qkEPgv-G4-XJoTxK4avs",
  authDomain: "interviewiq-2423d.firebaseapp.com",
  projectId: "interviewiq-2423d",
  storageBucket: "interviewiq-2423d.firebasestorage.app",
  messagingSenderId: "126246293924",
  appId: "1:126246293924:web:239651f2aa89903d73b131",
  measurementId: "G-D5J3T25VM4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);