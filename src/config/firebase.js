// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// import { getFirestore, collection } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and latser, measurementId is optional
const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
});

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
export const auth = app.auth();
export default app;
