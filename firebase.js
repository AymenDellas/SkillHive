import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9hYnEYJiwVDUMDpRtLhglWczpUSTcIao",
  authDomain: "skillhive-7dbdd.firebaseapp.com",
  projectId: "skillhive-7dbdd",
  storageBucket: "skillhive-7dbdd.firebasestorage.app",
  messagingSenderId: "243893891464",
  appId: "1:243893891464:web:4616a5410e73d963360a3d",
  measurementId: "G-ZNQXSJX3H6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
