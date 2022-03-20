// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and latser, measurementId is optional
const app = firebase.initializeApp(config);

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
export const db = getFirestore(app);
export const auth = app.auth();
export default app;
