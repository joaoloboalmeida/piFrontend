import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCtBMyJCLOue_00wwk048OfbxaEab2Xaos",
  authDomain: "ichat-f03e9.firebaseapp.com",
  projectId: "ichat-f03e9",
  storageBucket: "ichat-f03e9.appspot.com",
  messagingSenderId: "357480447586",
  appId: "1:357480447586:web:8c296a308e92fed56b5b3b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
