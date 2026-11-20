import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Paste YOUR Firebase web app config here
// (Firebase Console -> Project settings -> Your apps -> Web app -> Config)
const firebaseConfig = {
 apiKey: "AIzaSyDGPuzvGjvM7q42QlY-B2hlDFIh30fDveM",
  authDomain: "tools-661b2.firebaseapp.com",
  projectId: "tools-661b2",
  storageBucket: "tools-661b2.firebasestorage.app",
  messagingSenderId: "624286671039",
  appId: "1:624286671039:web:f590314fa5ed1b7d8ae60a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
