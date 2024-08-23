import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

console.log(`${process.env.REACT_APP_FIREBASE_APIKEY}`);


const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_DOMAIN}.firebaseapp.com`,
    projectId: `${process.env.REACT_APP_FIREBASE_DOMAIN}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_DOMAIN}.appspot.com`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APPID}`
  };

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
auth.languageCode = 'en';
export const provider = new GoogleAuthProvider();
