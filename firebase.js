// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { GoogleAuthProvider } from "firebase/compat/auth";

// import "firebase/compat/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrSumt3wIV6-mO9aT762Au28Mpj_I-7GA",
  authDomain: "fir-auth-ac113.firebaseapp.com",
  projectId: "fir-auth-ac113",
  storageBucket: "fir-auth-ac113.appspot.com",
  messagingSenderId: "170721406762",
  appId: "1:170721406762:web:0e2f5c4097eccb488bf853",
  measurementId: "G-3YCE3ZJPQC"
};

// Initialize Firebase
// let app;
// if(firebase.app.length === 0)
// {
//     app = firebase.initializeApp(firebaseConfig);
// }else{
//     app=firebase.app();
// }
const app = firebase.initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth =firebase.auth();
export {auth,provider};