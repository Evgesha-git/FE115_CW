// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEDWxT6vm5gwF9eJ8QRVNDVInAs35DYA0",
    authDomain: "to-do-test-app-887f8.firebaseapp.com",
    projectId: "to-do-test-app-887f8",
    storageBucket: "to-do-test-app-887f8.appspot.com",
    messagingSenderId: "63382058435",
    appId: "1:63382058435:web:3c95716d9e6b3cf264f976",
    measurementId: "G-VYXQ2GFS7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db