// firebase.js
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBRDCFSJl___6-r3l2FAUdqn0fQ9eVvjRU",
  authDomain: "expo-projects-f6ba3.firebaseapp.com",
  databaseURL: "https://expo-projects-f6ba3-default-rtdb.firebaseio.com",
  projectId: "expo-projects-f6ba3",
  storageBucket: "expo-projects-f6ba3.firebasestorage.app",
  messagingSenderId: "1000484077284",
  appId: "1:1000484077284:web:1569d48fc48215cccc76f1"
};

const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

export const db = getDatabase(app);   // ✅ Realtime DB
export const auth = getAuth(app);
